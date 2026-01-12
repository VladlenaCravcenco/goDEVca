import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-visible"
    >
      <div className="relative w-full max-w-[1200px] mx-auto">
        <img
          src="/assets/hero/screen.png"
          alt="Notebook"
          className="
         absolute
          top-0
          left-1/2
          -translate-x-[60%]
          w-[130vw]
          max-w-[1800px]
          md:w-[110vw]
          sm:w-[100vw]
          sm:-translate-x-[55%]
          z-10
          transition-all
          duration-500
        "
        />
      </div>
    </section>
  );
};

export default About;