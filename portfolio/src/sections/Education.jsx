import React from 'react';

const Education = () => {
  return (
    <section className="relative w-full min-h-screen overflow-visible">
      {/* Карта обучения */}
      <img
        src="/assets/hero/screen.png"
        alt="map edu"
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

     
    </section>
  );
};

export default Education;