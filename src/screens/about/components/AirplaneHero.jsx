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

      {/* Overlay Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={logo} alt="Ceylon Ambassador Logo" className="h-24 md:h-32" />
      </div>
    </section>
  );
};

export default AirplaneHero;
