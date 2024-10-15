import React from "react";
import backgroundImage from "../../../assets/home/3_image_home.jpg";

const GlobalLogisticsComponent = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Background Image Section */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Text Content Section */}
      <div className="relative z-10 h-full w-full flex items-center justify-end pr-20">
        <div className="w-1/2 space-y-6 text-white">
          {/* Logo */}
          <div className="text-5xl font-bold text-white">W</div>

          {/* Title */}
          <h1 className="text-4xl font-bold">
            Your Global Logistics Partner for Seamless Solutions
          </h1>

          {/* Description */}
          <p className="text-lg leading-relaxed">
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
