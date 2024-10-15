import React from "react";
import logistic_banner from "../../../assets/home/4th_image_home.jpg";
import logo from "../../../assets/Logo.svg";

const LogisticsBanner = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-100">
      {/* Background Image */}
      <img
        src={logistic_banner}
        alt="Logistics background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-8 py-16 lg:px-20">
        <div className="bg-white bg-opacity-90 p-6 max-w-md rounded-md shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            Your Global Logistics Partner for Seamless Solutions
          </h1>
          <p className="mt-4 text-base text-gray-700">
            UFS is a leader in logistics and supply chain management, offering a
            full suite of services including air, sea, and inland freight,
            warehousing, and global consolidation. With a strong network of
            partners and state-of-the-art technology, UFS delivers efficient,
            reliable, and cost-effective logistics solutions that meet the
            complex needs of businesses worldwide.
          </p>
          <div className="mt-4">
            <img
              src="/path-to-logo.png"
              alt="Ceylon Ambassador"
              className="w-40 h-auto"
            />{" "}
            {/* Update with your logo */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsBanner;
