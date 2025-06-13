// src/sections/About.jsx

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#fff] flex justify-center items-center overflow-hidden"
    >
      {/* 📓 Блокнот */} 
      <img
        src="public/assets/hero/blocknote.png"
        alt="Notebook"
        className="max-w-[1000px] w-[90%] z-10"
      />

      {/* 🧷 Заголовок About Me */}
      <img
        src="public/assets/hero/aboutme.png"
        alt="About me label"
        className="absolute top-10 left-8 w-[200px] z-20"
      />

      {/* 👩‍💻 3D персонаж */}
      <img
        src="public/assets/hero/personaj.png"
        alt="3D character"
        className="absolute bottom-0 left-[45%] w-[200px] z-30"
      />

      {/* 📸 Фото полароид */}
      <img
        src="public/assets/hero/photo.png"
        alt="Vlada photo"
        className="absolute top-20 right-[12%] w-[180px] z-20"
      />

      {/* 📌 Контакт */}
      <img
        src="public/assets/hero/contact.png"
        alt="Contact details"
        className="absolute bottom-[100px] right-[8%] w-[220px] z-30"
      />

      {/* ☕ Кружка */}
      <img
        src="public/assets/hero/cup.png"
        alt="Cup of coffee"
        className="absolute top-0 left-0 w-[150px] rotate-[-10deg] z-10"
      />

      {/* 🧵 Лента */}
      <img
        src="public/assets/hero/lenta_webdesigner.png"
        alt="Ribbon Web Designer"
        className="absolute bottom-10 left-4 w-[200px] rotate-[10deg] z-10"
      />

      {/* 🔶 Лого Figma */}
      <img
        src="public/assets/hero/figmalogo.png"
        alt="Figma logo"
        className="absolute top-[60%] left-[10%] w-[80px] z-20"
      />

      {/* ➡️ Стрелка */}
      <img
        src="public/assets/hero/aroowbold.png"
        alt="Arrow"
        className="absolute top-[32%] right-[30%] w-[40px] rotate-[-10deg] z-10"
      />

      {/* 🟠 View More */}
      <img
        src="public/assets/hero/viewmore.png"
        alt="View More"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[120px] z-40 hover:scale-105 transition"
      />
    </section>
  );
};

export default About;