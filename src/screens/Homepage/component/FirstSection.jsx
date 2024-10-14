import React from "react";
import heroImage from "../../../assets/hero_image.png";
import brandColored from "../../../assets/brand_pulse_ml_color.svg";
import BrandNavSection from "./BrandPulseNavigationSection";

const FirstSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="w-full relative">
        <img src={heroImage} className="w-full" alt="Hero" />

        {/* Overlay the brand image in the center of the hero image */}
        <img
          src={brandColored}
          alt="Brand Logo"
          className="absolute top-1/2 right-[2.5%] transform -translate-x-1/2 -translate-y-1/2 w-[340px]"
        />
        <div className="absolute bottom-0 w-screen">
          <BrandNavSection />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
