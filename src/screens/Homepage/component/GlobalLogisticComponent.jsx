import React from "react";
import backgroundImage from "../../../assets/home/3_image_home.jpg";

const GlobalLogisticsComponent = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image Section */}
      <div
        className="absolute inset-y-0 left-0 w-full object-cover h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Text Content Section */}
      <div className="relative z-10 h-full w-full flex  items-end justify-end pr-20 text-white">
        <div className="w-2/5 lg:mb-24 space-y-6">
          {/* Title */}
          <h1 className="text-4xl font-bold font-MontserratMedium">
            Your Global Logistics Partner for Seamless Solutions
          </h1>

          {/* Description */}
          <p className="text-sm leading-relaxed font-Montserrat">
            UFS is a leader in logistics and supply chain management, offering a
            full suite of services including air, sea, and inland freight,
            warehousing, and global consolidation. With a strong network of
            partners and state-of-the-art technology, UFS delivers efficient,
            reliable, and cost-effective logistics solutions that meet the
            complex needs of businesses worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalLogisticsComponent;
