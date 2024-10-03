// src/components/Hero.js
import React from "react";
import planeImage from "../../../assets/airliner-plane-parked-terminal-view-from-front-cockpit-fuselage-with-boarding-bridge.png";

const Hero = () => {
  return (
    <section className="relative">
      <div className="">
        <img
          src={planeImage}
          alt="Airplane"
          className="w-full h-[600px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
