import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import brandColored from "../../../assets/brand_pulse_ml_color.svg";

const LastSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={brandColored} className="w-[480px] p-14" />
      <p className="pb-6 text-[#181728] text-[13px] font-[500]">
        Contact us today to start building your brand's future with BrandPulse
      </p>
      <div className="flex space-x-4 pb-10">
        <FontAwesomeIcon icon={faFacebookF} className="text-[#181728]" />
        <FontAwesomeIcon icon={faInstagram} className="text-[#181728]" />
        <FontAwesomeIcon icon={faXTwitter} className="text-[#181728]" />
        <FontAwesomeIcon icon={faLinkedinIn} className="text-[#181728]" />
        <FontAwesomeIcon icon={faYoutube} className="text-[#181728]" />
      </div>
      <div className="w-full h-[150px] flex justify-between  border-[#181728] border-[3px]">
        <div className="w-1/7 bg-transparent h-full border border-[#181728]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#181728]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#181728]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#181728]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#181728]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#181728]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#181728]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#181728]"></div>
      </div>
    </div>
  );
};

export default LastSection;
