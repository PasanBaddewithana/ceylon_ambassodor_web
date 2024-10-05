import React from "react";
import building_image from ".././../../assets/buildingImage.jpg";

export default function InnovationBanner() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-Montserrat">
      <img
        src={building_image}
        alt="Reflective glass panels of a skyscraper"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          <p>Innovation isn&apos;t</p>
          <p>just in our DNA,</p>
          <p>it&apos;s in everything</p>
          <p>we do. </p>
        </div>
      </div>
    </div>
  );
}
