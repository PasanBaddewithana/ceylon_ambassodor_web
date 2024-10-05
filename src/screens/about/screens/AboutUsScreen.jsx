import React from "react";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import Hero from "../../Homepage/component/HeroSection";
import ship from "../../../assets/ship.png";
import FrontBanner from "../components/FrontBanner";

function AboutUsScreen() {
  const images = [ship, ship];
  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <div className="flex-1 bg-customBlue">
        <Hero images={images} />
        <FrontBanner />
      </div>
    </div>
  );
}

export default AboutUsScreen;
