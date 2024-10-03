import React from "react";
import planeImage from "../../../assets/plane_image.svg";

const Hero = () => {
  return (
    <section className="relative">
      {" "}
      {/* Add top padding */}
      <div className="w-full">
        <img
          src={planeImage}
          alt="Airplane"
          className="w-full h-[550px] object-cover" // Keep object-cover to fill the space
        />
      </div>
    </section>
  );
};

export default Hero;
