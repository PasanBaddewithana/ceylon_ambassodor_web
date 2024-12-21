import React from "react";
import secondSection from "../../../assets/secondSection.png";
import aerofly from "../../../assets/aeroflylogo.svg";
import runaway from "../../../assets/runawayPlane.jpg";

// const AeroSecond = () => {
//   return (
//     <div className="bg-gradient-to-r from-[#36FADA] via-[#37AFEC] to-[#0D4B83] w-full h-[550px] flex justify-center items-center relative">
//       {/* Left part */}
//       <div className="w-1/2 h-full flex flex-col justify-center items-center ">
//         <div className="flex flex-col justify-center items-start">
//           <img src={aerofly} className="w-[200px] mb-9" />
//           <p className="text-black text-[28px] font-bold font-MontserratMedium "data-aos="fade-up" data-aos-duration="1000">
//             "Your Trusted Partner{" "}
//           </p>
//           <p className="text-black text-[28px] font-bold mb-5 font-MontserratMedium "data-aos="fade-up" data-aos-duration="1500">
//             in Aviation Excellence"
//           </p>
//           <div className="h-[2px] w-[500px] bg-[#BC9C61] font-Montserrat"></div>
//           <p className="text-black text-[14px] mt-4 w-[390px] font-Montserrat" data-aos="fade-up" data-aos-duration="2000">
//             At Aerofly Aviation, we take pride in delivering comprehensive and
//             innovative solutions to the global aviation industry. From
//             maximizing cargo sales to providing world-class airline
//             representation, we are committed to helping airlines and aviation
//             companies operate efficiently, expand into new markets, and grow
//             their revenue streams. With Aerofly Aviation, you are partnering
//             with a team that understands the intricacies of the aviation
//             industry and delivers tailored services designed to meet the
//             evolving demands of air travel.
//           </p>
//         </div>
//       </div>

//       {/* Divider: Vertical White Line */}
//       <div className="h-[480px] w-[2px] bg-[#BC9C61] "></div>

//       {/* Right part */}
//       <div className="w-1/2 h-full flex justify-center items-center">
//         <p className="text-white text-[24px] p-12">
//           <img src={runaway} />
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AeroSecond;
const AeroSecond = () => {
  //background color to blue
  return (
    //height to half of the screen 051e4a
    <div className="flex flex-col md:flex-row h-1/2 bg-gradient-to-r from-[#36FADA] via-[#37AFEC] to-[#0D4B83]">
      {/* Left side (Text and small image) align tecxt ot left  add 30 px padding */}
      <div className="flex-1 pr-5 pl-20 pb-16">
        <img
          src={aerofly}
          alt="warehouse"
          className="mb-4 w-full md:w-1/2 transform scale-50"
        />

        
        <p className="text-white text-[28px] font-bold font-MontserratMedium "data-aos="fade-up" data-aos-duration="1000">
             "Your Trusted Partner{" "}
          </p>
          <p className="text-white text-[28px] font-bold mb-5 font-MontserratMedium "data-aos="fade-up" data-aos-duration="1500">
          in Aviation Excellence"
          </p>

        <div className="w-3/4 bg-[#c6a664] h-[2px] mb-3"></div>
        <p className="text-s text-white font-Montserrat lg:pr-20 lg:mt-5" data-aos="fade-up" data-aos-duration="3000">
        At Aerofly Aviation, we take pride in delivering comprehensive and
             innovative solutions to the global aviation industry. From
             maximizing cargo sales to providing world-class airline
             representation, we are committed to helping airlines and aviation
             companies operate efficiently, expand into new markets, and grow
            their revenue streams. With Aerofly Aviation, you are partnering
             with a team that understands the intricacies of the aviation
              industry and delivers tailored services designed to meet the evolving demands of air travel.

        </p>
      </div>

      {/* Middle (Vertical line)  align center */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-[2px] h-3/4 bg-[#c6a664]"></div>
      </div>

      {/* Right side (Image only) */}
      <div className="flex-1 items-center justify-center hidden md:flex">
        <img
          src={runaway}
          alt="warehouse large"
          className="object-cover h-3/4 w-4/5"
        />
      </div>
    </div>
  );
};

export default AeroSecond;
