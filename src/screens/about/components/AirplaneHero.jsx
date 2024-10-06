import React from "react";
import airplaneImage from "../../../assets/airplane_about_hero.jpg";
import logo from "../../../assets/white_logo_2.svg";

const AirplaneHero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={airplaneImage}
        alt="Airplane"
        className="w-full h-full object-cover"
      />

      {/* Overlay Logo aligned to bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <img src={logo} alt="Ceylon Ambassador Logo" className="h-24" />
      </div>
    </section>
  );
};

export default AirplaneHero;
