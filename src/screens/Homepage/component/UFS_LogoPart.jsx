import React from "react";
import ship1 from "../../../assets/home/ship01.png";
import ship2 from "../../../assets/home/ship2.jpg";
import ufs_orange from "../../../assets/home/ufs_orange.png";

const LogisticsPage = () => {
  return (
    <div className="mt-4 flex flex-col justify-center items-center bg-gray-50">
      {/* Container for the content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-center justify-between  space-y-8 ">
          {/* Ships images */}
          <div className="space-y-16">
            <img src={ship1} alt="Ship 1" className="w-full max-w-sm mx-auto" />
            <img src={ship2} alt="Ship 2" className="w-full max-w-sm mx-auto" />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <img
              src={ufs_orange}
              alt="UFS Logo"
              className="w-36 mx-auto lg:mx-0"
            />
            <h1 className="text-3xl font-bold text-customBlue">
              Your Global Logistics Partner for Seamless Solutions
            </h1>
            <p className="text-gray-600">
              UFS is a leader in logistics and supply chain management, offering
              a full suite of services including air, sea, and inland freight,
              warehousing, and global consolidation. With a strong network of
              partners and state-of-the-art technology, UFS delivers efficient,
              reliable, and cost-effective logistics solutions that meet the
              complex needs of businesses worldwide.
            </p>

            {/* View More Button */}
            <div className="flex items-center space-x-4 py-8 border-t-2 border-customBlue ">
              {/* Circle with Plus Icon */}
              <div className="flex justify-center items-center w-12 h-12 bg-orange-300 rounded-full">
                <svg
                  className="w-6 h-6 text-customBlue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              {/* Text beside Icon */}
              <div className="text-gray-800">
                <p className="font-medium">View more</p>
                <p>about our services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsPage;
