import React, { useEffect, useState } from "react";
import AmbientBackground from "./components/AmbientBackground";
import ContactModal from "./components/ContactModal";
import SiteHeader from "./components/SiteHeader";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import { buildLocalizedPath, copy, getRouteState } from "./i18n";

function App() {
  const [isDark] = useState(false);
  const [route, setRoute] = useState(() => getRouteState());
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = getRouteState();
      const hasUnsupportedPath = nextRoute.subPath.length > 0;

      if (!nextRoute.isLocalized || hasUnsupportedPath) {
        const nextPath = buildLocalizedPath(
          nextRoute.lang,
          [],
          nextRoute.search,
          nextRoute.hash,
        );

        window.history.replaceState({}, "", nextPath);
        setRoute(getRouteState());
        return;
      }

      setRoute(nextRoute);
    };

    syncRoute();
    window.addEventListener("popstate", syncRoute);

    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  const changeLanguage = (nextLanguage) => {
    const nextPath = buildLocalizedPath(nextLanguage, [], route.search, route.hash);
    window.history.pushState({}, "", nextPath);
    setRoute(getRouteState());
  };

  const t = copy[route.lang];

  return (
    <div
      className={`transition-all duration-700 relative ${isDark ? "bg-[#868686] text-white" : "bg-[#D4D4D4] text-black"}`}
    >
      <main className="relative z-20">
        <SiteHeader
          lang={route.lang}
          t={t}
          onChangeLanguage={changeLanguage}
          onOpenContact={() => setIsContactOpen(true)}
        />
        <AmbientBackground />
        <Hero t={t} onOpenContact={() => setIsContactOpen(true)} />
        <Projects t={t} />
      </main>
      <ContactModal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        t={t.modal}
      />
    </div>
  );
}

export default App;
