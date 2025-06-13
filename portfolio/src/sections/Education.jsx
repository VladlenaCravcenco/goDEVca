import React from 'react';

const Education = () => {
  return (
    <section className="relative w-full h-[1000px] bg-white overflow-hidden">
      {/* Карта обучения */}
      <img
        src="/assets/hero/map-edu.png"
        alt="map edu"
        className="absolute top-[100px] left-[100px] w-[550px] rotate-[-2deg] z-10"
      />

      {/* Диплом */}
      <img
        src="/assets/hero/diplom.png"
        alt="diploma"
        className="absolute top-0 right-[80px] w-[320px] rotate-[3deg] z-20"
      />

      {/* Опыт */}
      <img
        src="/assets/hero/experience.png"
        alt="experience"
        className="absolute top-[250px] right-[30px] w-[340px] rotate-[-5deg] z-30"
      />

      {/* Soft Skills (клавиши) */}
      <img
        src="/assets/hero/softskills.png"
        alt="soft skills"
        className="absolute bottom-[80px] left-[350px] w-[160px] rotate-[-5deg] z-40"
      />
    </section>
  );
};

export default Education;