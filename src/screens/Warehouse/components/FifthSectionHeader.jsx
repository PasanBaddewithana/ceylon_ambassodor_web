import React from "react";
import ufslogo from "../../../assets/warehouse/UFS_log_Orange.svg";

const FifthSectionHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center font-Montserrat px-6 md:px-12 lg:px-20 py-10">
      {/* Logo and Heading Section */}
      <div
        className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-1/2 lg:p-20 mb-8 lg:mb-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={ufslogo} className="w-[150px] md:w-[200px]" alt="UFS Logo" />
        <div className="flex flex-col justify-center items-start lg:pl-10 mt-4 lg:mt-0">
          <p className="text-[18px] md:text-[20px] text-customBlue mb-0">
            Let's Move
          </p>
          <p className="text-[22px] md:text-[28px] text-customBlue font-semibold mt-[-4px] md:mt-[-8px]">
            Forward Together
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div
        className="text-[12px] md:text-[13px] lg:text-base text-center lg:text-left w-full lg:w-1/2 px-4 lg:pr-[140px]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
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
