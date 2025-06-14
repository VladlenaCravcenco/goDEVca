import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-visible">
      {/* Шапка */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-4 z-10">
        <div className="relative flex items-center justify-between px-6 py-4 rounded-full bg-gradient-to-b from-white to-[#f2f2f2] border border-[#e6e6e6] shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)]">
          
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
        src="/assets/hero/1screen.png"
        alt="Folder"
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-10 overflow-visible"
      />
    </section>
  );
};

export default Hero;