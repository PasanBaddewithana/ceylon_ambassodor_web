
import React from "react";
import secondSection from "../../../assets/secondSection.png";
import brandPulse from "../../../assets/brandpulse_logo.svg";
const SecondPart = () => {
  //background color to blue
  return (
    //height to half of the screen 051e4a
    <div className="flex flex-col md:flex-row h-1/2 bg-[#181728]">
      {/* Left side (Text and small image) align tecxt ot left  add 30 px padding */}
      <div className="flex-1 pr-5 pl-20 pb-16">
        <img
          src={brandPulse}
          alt="warehouse"
          className="mb-4 w-full md:w-1/2 transform scale-50"
        />

        
        <p className="text-white text-[28px] font-bold font-MontserratMedium "data-aos="fade-up" data-aos-duration="1000">
        "Crafting Brands{" "}
          </p>
          <p className="text-white text-[28px] font-bold mb-5 font-MontserratMedium "data-aos="fade-up" data-aos-duration="1500">
          That Inspire"
          </p>

        <div className="w-3/4 bg-[#c6a664] h-[2px] mb-3"></div>
        <p className="text-s text-white font-Montserrat lg:pr-20 lg:mt-5" data-aos="fade-up" data-aos-duration="3000">
        At BrandPulse, we believe that a brand is more than just a logo-it's
             a story, a vision, and an experience. In today's competitive world,
             your brand needs to stand out, resonate with your audience, and
             leave a lasting impression. That's where we come in. BrandPulse
             offers comprehensive branding, creative design, and marketing
             services that elevate businesses, transforming them into iconic
             brands that people remember. Whether you're launching a new brand or
             reinventing an existing one, BrandPulse is your trusted partner in
             bringing your brand to life.

        </p>
      </div>

      {/* Middle (Vertical line)  align center */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-[2px] h-3/4 bg-[#c6a664]"></div>
      </div>

      {/* Right side (Image only) */}
      <div className="flex-1 items-center justify-center hidden md:flex">
        <img
          src={secondSection}
          alt="warehouse large"
          className="object-cover h-3/4 w-4/5"
        />
      </div>
    </div>
  );
};

export default SecondPart;

