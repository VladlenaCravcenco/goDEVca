import React, { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`transition-all duration-700 relative ${isDark ? "bg-[#868686] text-white" : "bg-[#D4D4D4] text-black"}`}>
      
      {/* Контент сайта */}
      <main className="relative z-20">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <About />
        <Education />
        <Projects />
      </main>
    </div>
  );
}

export default App;