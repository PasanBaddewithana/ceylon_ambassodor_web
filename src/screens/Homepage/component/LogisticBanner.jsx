import React from "react";
import logistic_banner from "../../../assets/home/4th_image_home.jpg";
import logo from "../../../assets/home/blueQuata.svg";

const LogisticsBanner = () => {
  return (
    <div className="relative w-full h-[750px] overflow-hidden bg-customGray">
      {/* Background Image */}
      <img
        src={logistic_banner}
        alt="Logistics background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Text content */}
      <div className="mt-16 relative z-10 flex flex-col items-start justify-center px-8 py-16 lg:px-20">
        <div className="p-6 max-w-md">
          {/* Quote Icon at the Start */}
          <div className="flex justify-start mb-4">
            <img src={logo} alt="Quote Icon" className="w-16 h-16" />
          </div>

          {/* Title and Description */}
          <h1 className="text-2xl font-bold text-customBlue font-MontserratMedium">
            Your Global Logistics
            <br />
            Partner for Seamless Solutions
          </h1>
          <p className="mt-8 text-sm text-customBlue font-Montserrat">
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

export default LogisticsBanner;
