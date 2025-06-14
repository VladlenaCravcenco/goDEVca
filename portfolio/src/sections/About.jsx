import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-[900px] -mt-[120px] bg-white overflow-visible z-10"
    >
      <div className="relative w-full max-w-[1200px] mx-auto">
        <img
          src="/assets/hero/2screen.png"
          alt="Notebook"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
};

export default About;