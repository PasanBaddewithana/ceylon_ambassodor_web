import React from "react";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import Hero from "../../Homepage/component/HeroSection";
import ship from "../../../assets/ship.png";

function AboutUsScreen() {
  const images = [ship, ship];
  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <Hero images={images} />
    </div>
  );
}

export default AboutUsScreen;
