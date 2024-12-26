import React from "react";
import Icon1Black from "../../../assets/blue_ufs_logo.svg";
import Icon1Color from "../../../assets/home/ufs_orange.png";
import Icon2Black from "../../../assets/Aerofly_blue_logo.svg";
import Icon2Color from "../../../assets/aeroflylogo.svg";
import Icon3Black from "../../../assets/khmergate_blue_logo.svg";
import Icon3Color from "../../../assets/Khmergate/khermgate_green_logo.svg";
import Icon4Black from "../../../assets/brand_pulse_blue_logo.svg";
import Icon4Color from "../../../assets/brand_pulse_ml_color.svg";

const HomeGridComponent = () => {
  const icons = [
    { black: Icon1Black, color: Icon1Color },
    { black: Icon2Black, color: Icon2Color },
    { black: Icon3Black, color: Icon3Color },
    { black: Icon4Black, color: Icon4Color },
  ];

  return (
    <div className="w-full py-6 bg-white border border-gray-400">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-32 md:w-48 group"
          >
            {/* Black Icon */}
            <img
              src={icon.black}
              alt={`Icon ${index + 1} Black`}
              className="h-18 md:h-20 transition-opacity duration-300 group-hover:opacity-0"
            />
            {/* Colored Icon */}
            <img
              src={icon.color}
              alt={`Icon ${index + 1} Color`}
              className="h-18 md:h-20 absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGridComponent;
