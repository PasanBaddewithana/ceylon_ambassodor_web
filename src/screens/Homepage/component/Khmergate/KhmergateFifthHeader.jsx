// import React from "react";
// import aerofly from "../../../../assets/Khmergate/khermgate_green_logo.svg";

// const KhmergateFifthHeader = () => {
//   return (
//     <div className="flex flex-row justify-center items-center">
//       <div className="flex flex-row justify-center items-center w-1/2 p-20">
//         <img src={aerofly} className="w-[200px]" />
//         <div className="flex flex-col justify-center items-start pl-10">
//           <p className="text-[20px] text-black mb-0">Your </p>
//           <p className="text-[28px] text-[#015B02] font-semibold mt-[-8px]">
//             Journey Starts Here
//           </p>
//         </div>
//       </div>
//       <div className="w-1/2 text-[13px] pr-[140px] justify-center items-start text-[#015B02]">
//         Whether you're looking to discover Camobida's cultural treasures,
//         explore distant lands, or host an unforgettable event, KhmerGate is your
//         partner in making it happen. Our expert team is ready to craft the
//         perfect journey for you , filled with unique experiences and personal
//         touches that make every trip special.
//       </div>
//     </div>
//   );
// };

// export default KhmergateFifthHeader;

import React from "react";
import aerofly from "../../../../assets/Khmergate/khermgate_green_logo.svg";

const KhmergateFifthHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center font-Montserrat px-6 md:px-12 lg:px-20 py-10 text-[#015B02]" >
      {/* Logo and Heading Section */}
      <div
        className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-1/2 lg:p-20 mb-8 lg:mb-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={aerofly} className="w-[150px] md:w-[200px]" alt="UFS Logo" />
        <div className="flex flex-col justify-center items-start lg:pl-10 mt-4 lg:mt-0">
          <p className="text-[18px] md:text-[20px]  mb-0 text-[#015B02]">
          Your 
          </p>
          <p className="text-[22px] md:text-[28px]  font-semibold mt-[-4px] md:mt-[-8px] text-[#015B02]">
          Journey Starts Here
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div
        className="text-[12px] md:text-[13px] lg:text-base text-center lg:text-left w-full lg:w-1/2 px-4 lg:pr-[140px]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
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

