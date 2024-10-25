import React from "react";
import brandpulse from "../../../../assets/brand_pulse_ml_color.svg";

const BrandPulseFifthSectionHeader = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-row justify-center items-center w-1/2 p-20">
        <img src={brandpulse} className="w-[250px] h-auto " />
        <div className="flex flex-col justify-center items-start ml-10 pl-10">
          <p className="text-[18px] font-Montserrat text-[#808589] mb-0">
            Let's Build Something
          </p>
          <p className="text-[32px] font-Montserrat  text-[#015b02] font-semibold mt-[-8px]">
            Iconic Together
          </p>
        </div>
      </div>
      <div className="w-1/2 text-[13px] pr-[140px] justify-center items-start font-Montserrat">
        At BrandPulse, we're committed to helping you create a brand that not
        only stands out but also stands for something. Whether you're building a
        new brand, refreshing an existing one, or looking to launch a dynamic
        marketing campaign, BrandPulse is here to turn your vision into reality.
      </div>
    </div>
  );
};

export default BrandPulseFifthSectionHeader;
