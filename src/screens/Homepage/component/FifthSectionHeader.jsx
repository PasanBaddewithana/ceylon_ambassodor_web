import React from "react";
import aerofly from "../../../assets/aeroflylogo.svg";

const FifthSectionHeader = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-row justify-center items-center w-1/2 p-20">
        <img src={aerofly} className="w-[200px]" />
        <div className="flex flex-col justify-center items-start ml-10 pl-10">
          <p className="text-[20px] font-Montserrat text-customBlue mb-0" data-aos="fade-up" data-aos-duration="1000">
            Let's{" "}
          </p>
          <p className="text-[28px] font-Montserrat text-customBlue font-semibold mt-[-8px]" data-aos="fade-up" data-aos-duration="1500">
            Fly Higher Together
          </p>
        </div>
      </div>
      <div className="w-1/2 text-[13px] pr-[140px] font-Montserrat justify-center items-start" data-aos="fade-up" data-aos-duration="2000">
        At Aerofly Aviation, we are dedicated to delivering tailored aviation
        solutions that help airline grow,thrive, and succeed.Whether you're
        looking to expand your cargo operations,enter new markets, or enhance
        customer satisfcation, we are here to help you soar to new heights.
      </div>
    </div>
  );
};

export default FifthSectionHeader;
