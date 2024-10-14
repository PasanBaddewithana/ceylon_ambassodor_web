import React from "react";

import second_img from "../../../assets/home/2.ndimagejpg.jpg";

const SecondHomeImageComponent = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={second_img}
        alt="Logistics Background"
        className="absolute h-full w-full object-cover"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-end h-full bg-black bg-opacity-10 text-white p-8">
        <div className="max-w-3xl text-left ">
          {/* Quote or Logo */}
          <div className="text-6xl font-bold mb-4 lg:text-left">
            <span className="font-extrabold text-white">"</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-xl lg:text-5xl font-bold mb-6">
            Your Global Logistics Partner for Seamless Solutions
          </h1>

          {/* Description */}
          <p className="text-sm lg:text-lg mb-6">
            UFS is a leader in logistics and supply chain management, offering a
            full suite of services including air, sea, and inland freight,
            warehousing, and global consolidation. With a strong network of
            partners and state-of-the-art technology, UFS delivers efficient,
            reliable, and cost-effective logistics solutions that meet the
            complex needs of businesses worldwide.
          </p>

          <div className="border-t border-white opacity-30 my-8"></div>

          {/* Footer Statement */}
          <div className="text-left flex items-center space-x-4">
            <div className="h-8 w-8 bg-white rounded-full"></div>
            <p className="text-sm lg:text-lg font-semibold">
              UFS is a leader in logistics and supply chain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHomeImageComponent;
