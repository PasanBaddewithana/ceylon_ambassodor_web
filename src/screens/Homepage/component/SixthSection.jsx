import React from "react";
import brandePulse from "../../../assets/brand_pulse_ml_color.svg";

const SixthSection = () => {
  return (
    <div className="flex flex-row justify-center items-baseline p-20">
      <div className="flex flex-row justify-center items-center w-1/2 ">
        <img src={brandePulse} className="w-[200px]" />
        <div className="flex flex-col justify-center items-start pl-10">
          <p className="text-[20px] text-black mb-0">Why Choose</p>
          <p className="text-[28px] text-black font-semibold mt-[-8px]">
            BrandPulse?
          </p>
        </div>
      </div>

      <div className="w-1/2 text-[13px] pr-[50px] flex flex-col items-center justify-center">
        <p className="p-0">
          Choosing BrandPulse means working with a team that's passionate about
          crafting brands that resonate and inspire. Here's why businesses trust
          us with their branding and marketing needs:
        </p>
        <p className="text-[13px] p-1">
          <span className="font-bold">Creative Expertise:</span> At BrandPulse,
          we bring creativity to every project, ensuring that your brand is
          visually stunning and strategically aligned with your goals.
        </p>
        <p className="text-[13px] p-1">
          <span className="font-bold">Tailored Solutions: </span> We understand
          that every brand is unique, which is why we offer customized solutions
          designed to meet your specific business objectives and challenges.
        </p>
        <p className="text-[13px] p-1">
          <span className="font-bold">Data-Driven Strategy:</span> We leverage
          data and analytics to inform every decision, ensuring that your
          marketing campaigns are optimized for success and delivering
          measurable results.
        </p>

        <p className="text-[13px] p-1">
          <span className="font-bold">Seamless Collaboration:</span> We work
          closely with your team throughout the entire process, ensuring that
          every aspect of your brand is aligned with your vision and
          consistently executed.
        </p>
        <p className="text-[13px] p-1">
          <span className="font-bold">Long-Lasting Impact:</span> Our goal is to
          create brands that stand the test of time, leaving a lasting
          impression on your audience and driving long-term business growth.
        </p>
      </div>
    </div>
  );
};

export default SixthSection;
