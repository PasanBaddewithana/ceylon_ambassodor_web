// src/components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src="/hero-image.png" // Replace with the image path
        alt="Airplane"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">CEYLON AMBASSADOR</h1>
      </div>
    </section>
  );
};

export default Hero;
