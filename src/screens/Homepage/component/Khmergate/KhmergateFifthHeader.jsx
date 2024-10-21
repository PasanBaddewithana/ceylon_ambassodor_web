import React from "react";
import aerofly from "../../../../assets/aeroflylogo.svg";

const KhmergateFifthHeader = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-row justify-center items-center w-1/2 p-20">
        <img src={aerofly} className="w-[200px]" />
        <div className="flex flex-col justify-center items-start pl-10">
          <p className="text-[20px] text-black mb-0">Your </p>
          <p className="text-[28px] text-[#015B02] font-semibold mt-[-8px]">
            Journey Starts Here
          </p>
        </div>
      </div>
      <div className="w-1/2 text-[13px] pr-[140px] justify-center items-start text-[#015B02]">
        Whether you're looking to discover Camobida's cultural treasures,
        explore distant lands, or host an unforgettable event, KhmerGate is your
        partner in making it happen. Our expert team is ready to craft the
        perfect journey for you , filled with unique experiences and personal
        touches that make every trip special.
      </div>
    </div>
  );
};

export default KhmergateFifthHeader;
