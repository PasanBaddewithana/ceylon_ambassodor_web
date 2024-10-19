import React from "react";
import brandePulse from "../../../assets/brand_pulse_ml_color.svg";

const AeroFifthHeader = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-row justify-center items-center w-1/2 p-20">
        <img src={brandePulse} className="w-[200px]" />
        <div className="flex flex-col justify-center items-center pl-10">
          <p className="text-[20px] text-black mb-0">Let's Build Something</p>
          <p className="text-[28px] text-green-800 font-semibold mt-[-8px]">
            Iconic Together
          </p>
        </div>
      </div>
      <div className="w-1/2 text-[13px] pr-[140px] justify-center items-start">
        At BrandPulse,we're committed to helping you create a brand that not
        only stands out but also stands for something.Whether you're building a
        new brand, refreshing as existing one, or looking to launch a dynamic
        marketing campaign,BrandPulse is here to turn your vision into reality.
      </div>
    </div>
  );
};

export default AeroFifthHeader;
