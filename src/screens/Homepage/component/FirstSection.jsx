import React from "react";

import brandColored from "../../../assets/brand_pulse_ml_color.svg";
import BrandNavSection from "./BrandPulseNavigationSection";

const FirstSection = ({
  image,
  first,
  second,
  third,
  fourth,
  branding,
  midbranding,
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="w-full relative">
        <img src={image} className="w-full" alt="Hero" />

        {/* Overlay the brand image in the center of the hero image */}
        <img
          src={branding}
          alt="Brand Logo"
          className="absolute top-1/2 right-[0%] transform -translate-x-1/4 -translate-y-1/2 w-[500px]"
        />

        {/* <img
          src={midbranding}
          alt="Mid Brand Logo"
          className="absolute top-1/2   w-[340px]"
        /> */}
        <div className="absolute bottom-0 w-screen">
          <BrandNavSection
            first={first}
            second={second}
            third={third}
            fourth={fourth}
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
