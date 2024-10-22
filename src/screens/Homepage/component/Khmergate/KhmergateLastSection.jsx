import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const KhmergateLastSection = ({ lastwords, lastImage }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={lastImage} className="w-[480px] p-14" />
      <p className="pb-6 text-[#015B02] text-[13px] font-[500]">{lastwords}</p>
      <div className="flex space-x-4 pb-10">
        <FontAwesomeIcon icon={faFacebookF} className="text-[#015B02]" />
        <FontAwesomeIcon icon={faInstagram} className="text-[#015B02]" />
        <FontAwesomeIcon icon={faXTwitter} className="text-[#015B02]" />
        <FontAwesomeIcon icon={faLinkedinIn} className="text-[#015B02]" />
        <FontAwesomeIcon icon={faYoutube} className="text-[#015B02]" />
      </div>
      <div className="w-full h-[150px] flex justify-between border-[#015B02] border-[3px]">
        <div className="w-1/7 bg-transparent h-full border border-[#015B02]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#015B02]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#015B02]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#015B02]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#015B02]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#015B02]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#015B02]"></div>
        <div className="w-1/7 bg-transparent h-full border border-[#015B02]"></div>
      </div>
    </div>
  );
};

export default KhmergateLastSection;
