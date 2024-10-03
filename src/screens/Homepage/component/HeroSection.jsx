import React from "react";
import planeImage from "../../../assets/editPlaneImage.png";

const Hero = () => {
  return (
    <section className="relative">
      <div className="w-full">
        <img
          src={planeImage}
          alt="Airplane"
          className="w-full h-[570px] object-cover" // Keep object-cover to fill the space
        />
        {/* White overlay with opacity */}
        <div className="absolute inset-0 bg-white opacity-10"></div>
      </div>
    </section>
  );
};

export default Hero;
