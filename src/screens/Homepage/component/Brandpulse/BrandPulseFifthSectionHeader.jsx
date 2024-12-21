// import React from "react";
// import brandpulse from "../../../../assets/brand_pulse_ml_color.svg";

// const BrandPulseFifthSectionHeader = () => {
//   return (
//     <div className="flex flex-row justify-center items-center">
//       <div className="flex flex-row justify-center items-center w-1/2 p-20">
//         <img src={brandpulse} className="w-[250px] h-auto " />
//         <div className="flex flex-col justify-center items-start ml-10 pl-10">
//           <p className="text-[18px] font-Montserrat text-[#808589] mb-0">
//             Let's Build Something
//           </p>
//           <p className="text-[32px] font-Montserrat  text-[#015b02] font-semibold mt-[-8px]">
//             Iconic Together
//           </p>
//         </div>
//       </div>
//       <div className="w-1/2 text-[13px] pr-[140px] justify-center items-start font-Montserrat">
//         At BrandPulse, we're committed to helping you create a brand that not
//         only stands out but also stands for something. Whether you're building a
//         new brand, refreshing an existing one, or looking to launch a dynamic
//         marketing campaign, BrandPulse is here to turn your vision into reality.
//       </div>
//     </div>
//   );
// };

// export default BrandPulseFifthSectionHeader;

import React from "react";
import brandpulse from "../../../../assets/brand_pulse_ml_color.svg";

const BrandPulseFifthSectionHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center font-Montserrat px-6 md:px-12 lg:px-20 py-10">
      {/* Logo and Heading Section */}
      <div
        className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-1/2 lg:p-20 mb-8 lg:mb-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={brandpulse} className="w-[150px] md:w-[200px]" alt="UFS Logo" />
        <div className="flex flex-col justify-center items-start lg:pl-10 mt-4 lg:mt-0">
          <p className="text-[18px] md:text-[20px] text-[#808589] mb-0">
          Let's Build Something
          </p>
          <p className="text-[22px] md:text-[28px] text-[#015b02] font-semibold mt-[-4px] md:mt-[-8px]">
          Iconic Together
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div
        className="text-[12px] md:text-[13px] lg:text-base text-center lg:text-left w-full lg:w-1/2 px-4 lg:pr-[140px]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
       At BrandPulse, we're committed to helping you create a brand that not
         only stands out but also stands for something. Whether you're building a
         new brand, refreshing an existing one, or looking to launch a dynamic
         marketing campaign, BrandPulse is here to turn your vision into reality.
      </div>
    </div>
  );
};

export default BrandPulseFifthSectionHeader;
