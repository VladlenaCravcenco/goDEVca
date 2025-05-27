import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      {/* Белый фон (стол) */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Контейнер с визуалом */}
      <div className="relative z-10 w-full h-full">

        {/* Надпись PORTFOLIO */}
        <img
          src="/assets/hero/portfolio-title.png"
          alt="PORTFOLIO"
          className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[600px] max-w-[90%]"
        />

        {/* Welcome стикер */}
        <img
          src="/assets/hero/sticker-welcome.png"
          alt="Welcome"
          className="absolute top-10 left-10 w-28 rotate-[4deg]"
        />

        {/* Кнопки */}
        <img
          src="/assets/hero/about-button.png"
          alt="About me"
          className="absolute top-10 right-[160px] w-28 cursor-pointer hover:scale-105 transition"
        />

        <img
          src="/assets/hero/assets-button.png"
          alt="Assets"
          className="absolute top-10 right-[60px] w-24 cursor-pointer hover:scale-105 transition"
        />

        {/* Name и Position */}
        <img
          src="/assets/hero/name-label.png"
          alt="Name"
          className="absolute bottom-[140px] left-[120px] w-44 rotate-[-2deg]"
        />

        <img
          src="/assets/hero/position-label.png"
          alt="Position"
          className="absolute bottom-[100px] left-[280px] w-44 rotate-[2deg]"
        />

        {/* Ручка */}
        <img
          src="/assets/hero/pen.png"
          alt="Pen"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-40"
        />

        {/* Бумажка, скрепка, лента и т.д. */}
        <img
          src="/assets/hero/tape.png"
          alt="Tape"
          className="absolute bottom-0 right-0 w-32"
        />
      </div>
    </section>
  );
};

export default Hero;