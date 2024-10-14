import React from "react";
import white_logo from "../../../assets/white_logo_2.svg";

export default function FrontBanner() {
  return (
    <div className="bg-[#0A1A3A] h-[114px] mt-0 flex items-end justify-between px-8  font-Montserrat">
      <h1 className="text-white text-4xl font-bold ml-24 mb-4">
        Ceylon Ambassador
      </h1>
      <div className="flex items-center mr-24 mb-4">
        <img
          src={white_logo}
          alt="Ceylon Ambassador Logo"
          className="h-[50px] w-[300px] object-contain"
        />
      </div>
    </div>
  );
}
