import React from "react";
import secondSection from "../../../assets/secondSection.png";
import aerofly from "../../../assets/aeroflylogo.svg";
import runaway from "../../../assets/runawayPlane.jpg";

const AeroSecond = () => {
  return (
    <div className="bg-gradient-to-r from-[#36FADA] via-[#37AFEC] to-[#0D4B83] w-full h-[550px] flex justify-center items-center relative">
      {/* Left part */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-start">
          <img src={aerofly} className="w-[200px] mb-9" />
          <p className="text-black text-[28px] font-bold font-MontserratMedium ">
            "Your Trusted Partner{" "}
          </p>
          <p className="text-black text-[28px] font-bold mb-5 font-MontserratMedium ">
            in Aviation Excellence"
          </p>
          <div className="h-[2px] w-[500px] bg-[#BC9C61] font-Montserrat"></div>
          <p className="text-black text-[14px] mt-4 w-[390px] font-Montserrat">
            At Aerofly Aviation, we take pride in delivering comprehensive and
            innovative solutions to the global aviation industry. From
            maximizing cargo sales to providing world-class airline
            representation, we are committed to helping airlines and aviation
            companies operate efficiently, expand into new markets, and grow
            their revenue streams. With Aerofly Aviation, you are partnering
            with a team that understands the intricacies of the aviation
            industry and delivers tailored services designed to meet the
            evolving demands of air travel.
          </p>
        </div>
      </div>

      {/* Divider: Vertical White Line */}
      <div className="h-[480px] w-[2px] bg-[#BC9C61] "></div>

      {/* Right part */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <p className="text-white text-[24px] p-12">
          <img src={runaway} />
        </p>
      </div>
    </div>
  );
};

export default AeroSecond;
