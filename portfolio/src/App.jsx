import React, { useState } from "react";
import AmbientBackground from "./components/AmbientBackground";
import SiteHeader from "./components/SiteHeader";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  const [isDark] = useState(false);

  return (
    <div
      className={`transition-all duration-700 relative ${isDark ? "bg-[#868686] text-white" : "bg-[#D4D4D4] text-black"}`}
    >
      {/* Контент сайта */}
      <main className="relative z-20">
        <SiteHeader />
        <AmbientBackground />
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
