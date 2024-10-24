import React from "react";
import secondSection from "../../../assets/secondSection.png";
import brandPulse from "../../../assets/brandpulse_logo.svg";

const SecondPart = () => {
  return (
    <div className="bg-[#181728] w-full h-[550px] flex justify-center items-center relative">
      {/* Left part */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-start">
          <img src={brandPulse} className="w-[200px] h-auto mb-9" />
          <p className="text-white text-4xl font-MontserratMedium font-semibold">
            "Crafting Brands{" "}
          </p>
          <p className="text-white text-4xl font-MontserratMedium font-semibold mb-5">
            That Inspire"
          </p>
          <div className="h-[2px] w-[500px] bg-[#BC9C61] "></div>
          <p className="text-white text-[14px]  font-Montserrat mt-4 w-[390px]">
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
      </div>

      {/* Divider: Vertical White Line */}
      <div className="h-[480px] w-[2px] bg-[#BC9C61] "></div>

      {/* Right part */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <p className="text-white text-[24px] p-12">
          <img src={secondSection} />
        </p>
      </div>
    </div>
  );
};

export default SecondPart;
