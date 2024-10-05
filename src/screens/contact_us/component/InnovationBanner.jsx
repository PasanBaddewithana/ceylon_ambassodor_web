import React from "react";
import building_image from "../../../assets/buildingImage.jpg";

export default function InnovationBanner() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-Montserrat">
      {/* Gray bar at the top */}
      <div className="w-full h-[25px] bg-customGray" /> {/* Added gray div */}
      <img
        src={building_image}
        alt="Reflective glass panels of a skyscraper"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center font-Montserrat">
        <div className="text-white text-left font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-5xl leading-tight">
          <p className="text-7xl">"</p>
          <p> Innovation isn&apos;t</p>
          <p> just in our DNA,</p>
          <p> it&apos;s in everything</p>
          <p> we do. </p>
          <p className="text-7xl text-right"> "</p>
        </div>
      </div>
    </div>
  );
}
