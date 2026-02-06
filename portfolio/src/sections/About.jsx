import { useEffect, useMemo, useRef, useState } from "react";
import "/src/About.css";

export default function About() {
  const wrapRef = useRef(null);
  const rafRef = useRef(null);

  // временная картинка "поле"
  const imgUrl = useMemo(
    () =>
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80",
    []
  );

  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;

        // 0..1 прогресс появления блока
        const progress = 1 - Math.min(1, Math.max(0, rect.top / vh));

        // от -24px до +24px
        const y = (progress - 0.5) * 48;
        setOffsetY(y);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="aboutSection">
      <div ref={wrapRef} className="aboutWrap">
        {/* фон */}
        <div
          className="aboutBg"
          style={{
            backgroundImage: `url(${imgUrl})`,
            transform: `translate3d(0, ${offsetY}px, 0) scale(1.08)`,
          }}
        />

        {/* градиент */}
        <div className="aboutOverlay" />

        {/* контент */}
        <div className="aboutContent">
          <div className="aboutText">
            <div className="aboutKicker">About me</div>
            <div className="aboutTitle">Designer & Frontend Developer</div>
            <div className="aboutDesc">
              Quick intro section. Later we’ll connect your real photo + text from Sanity.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}