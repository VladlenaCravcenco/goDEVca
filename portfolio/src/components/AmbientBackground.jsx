import { useEffect, useMemo, useRef } from "react";
import "./AmbientBackground.css";

export default function AmbientBackground() {
  const canvasRef = useRef(null);

  const balls = useMemo(
    () => [
      { r: 150, vx: 0.055, vy: 0.035, x: 0.18, y: 0.22 },
      { r: 240, vx: -0.035, vy: 0.030, x: 0.72, y: 0.32 },
      { r: 110, vx: 0.045, vy: -0.040, x: 0.58, y: 0.78 },
    ],
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let rafId = 0;

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    let last = performance.now();

    const draw = (t) => {
      const dt = Math.min(32, t - last);
      last = t;

      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      for (const b of balls) {
        b.x += (b.vx * dt) / 1000;
        b.y += (b.vy * dt) / 1000;

        // мягкие отскоки от границ
        if (b.x < 0.05) { b.x = 0.05; b.vx *= -1; }
        if (b.x > 0.95) { b.x = 0.95; b.vx *= -1; }
        if (b.y < 0.05) { b.y = 0.05; b.vy *= -1; }
        if (b.y > 0.95) { b.y = 0.95; b.vy *= -1; }

        const cx = b.x * w;
        const cy = b.y * h;

        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r * 2.4);
        g.addColorStop(0, "rgba(20,20,22,0.10)");
        g.addColorStop(0.35, "rgba(20,20,22,0.06)");
        g.addColorStop(1, "rgba(20,20,22,0.00)");

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, b.r * 2.4, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [balls]);

  return (
    <>
      <canvas ref={canvasRef} className="ambient__canvas" aria-hidden="true" />
      {/* стекло: всегда под контентом */}
      <div className="ambient__glass" aria-hidden="true" />
    </>
  );
}