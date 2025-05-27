import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      {/* Белый фон (стол) */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Шапка */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-4">
        <div className="relative flex items-center justify-between px-6 py-4 rounded-full bg-gradient-to-b from-white to-[#f2f2f2] border border-[#e6e6e6] shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)]">
          {/* Ручка */}
          <img
            src="/assets/hero/Pen.png"
            alt="Pen"
            className="h-22 object-contain"
          />
          {/* Кнопки */}
          <div className="flex gap-4">
            <img
              src="/assets/hero/button-about-me.png"
              alt="About Me"
              className="w-[150px] cursor-pointer hover:scale-105 transition"
            />
            <img
              src="/assets/hero/button-assets.png"
              alt="Assets"
              className="w-[150px] cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

      {/* Папка позади */}
      <img
        src="/assets/hero/map.png"
        alt="Folder"
        className="absolute top-25 left-1/2 -translate-x-1/2 w-[60%] z-0"
      />

      {/* Белый лист с тенью */}
      <img
        src="public/assets/hero/Letter_US.png"
        alt="Paper"
        className="absolute top-50 left-1/2 -translate-x-1/2 w-[1200px] z-10"
      />
      {/* === Контейнер с бумагой в папке === */}
      <div className="relative mx-auto mt-50 w-[1200px] sm:w-[800px] md:w-[1000px] max-w-full">
        {/* Welcome стикер */}
        <img
          src="/assets/hero/welcome.png"
          alt="Welcome"
          className="absolute top-[30px] left-[50px] w-[350px] rotate-[-3deg] z-20"
        />

        {/* Надпись PORTFOLIO */}
        <img
          src="/assets/hero/portfolio_title.png"
          alt="PORTFOLIO"
          className="absolute left-1/2 -translate-x-1/2 top-[140px] w-[90%] z-30"
        />

        {/* Стикер Name */}
        <img
          src="/assets/hero/name_sticker.png"
          alt="Name"
          className="absolute top-[700px] left-[0px] w-[350px] rotate-[358deg] z-20"
        />

        {/* Стикер Position */}
        <img
          src="/assets/hero/position_sticker.png"
          alt="Position"
          className="absolute top-[650px] right-[0px] w-[350px] rotate-[2deg] z-20"
        />
      </div>

      {/* Бумажка, скрепка, лента и т.д. */}
      <img
        src="/assets/hero/uidesigner_lenta.png"
        alt="Tape"
        className="absolute bottom-0 right-0 w-32"
      />
    </section>
  );
};

export default Hero;
