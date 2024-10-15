import React from "react";
import backgroundImage from "../../../assets/home/3_image_home.jpg";
import quote_img from "../../../assets/quata.png";

const GlobalLogisticsComponent = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image Section */}
      <div
        className="absolute inset-y-0 left-0 w-full object-cover h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Text Content Section */}
      <div className="relative z-10 h-full w-full flex items-center justify-end pr-20 text-white">
        <div className="w-2/5 lg:mb-24 space-y-6">
          {/* Quote Image */}
          <img
            src={quote_img}
            alt="Quote Icon"
            className="h-12 w-12 lg:h-14 lg:w-14"
          />

          <div className="ml-4">
            {/* Title */}
            <h1 className="mt-4 text-4xl font-bold font-MontserratMedium">
              Your Global Logistics
              <br />
              Partner for Seamless Solutions
            </h1>

            {/* Description */}
            <p className="text-sm leading-relaxed  text-justify font-Montserrat mt-8">
              UFS is a leader in logistics and supply chain management, offering
              a full suite of services including air, sea, and inland freight,
              warehousing, and global consolidation. With a strong network of
              partners and state-of-the-art technology, UFS delivers efficient,
              reliable, and cost-effective logistics solutions that meet the
              complex needs of businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLogisticsComponent;
