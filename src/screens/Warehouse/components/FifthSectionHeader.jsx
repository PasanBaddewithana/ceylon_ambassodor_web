import React from "react";
import ufslogo from "../../../assets/warehouse/UFS_log_Orange.svg";

const FifthSectionHeader = () => {
  return (
    <div className="flex flex-row justify-center items-center font-Montserrat ">
      <div className="flex flex-row justify-center items-center w-1/2 p-20">
        <img src={ufslogo} className="w-[200px]" />
        <div className="flex flex-col justify-center items-start pl-10">
          <p className="text-[20px] text-customBlue mb-0">Let's Move</p>
          <p className="text-[28px] text-customBlue font-semibold mt-[-8px]">
            Forward Together
          </p>
        </div>
      </div>
      <div className="w-1/2 text-[13px] pr-[140px] justify-center items-start">
        At United Freight Solutions, we are committed to providing the logistics
        solutions that keep your business moving forward. Whether you’re
        shipping across the country or around the world, we have the expertise,
        technology, and network to ensure that your goods arrive safely and on
        time. Let us take care of your logistics, so you can focus on growing
        your business.
      </div>
    </div>
  );
};

export default FifthSectionHeader;
