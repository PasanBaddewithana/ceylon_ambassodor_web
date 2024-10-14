import React from "react";

const LogisticsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      {/* Container for the content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Ships images */}
          <div className="space-y-8">
            <img
              src="/path/to/ship1.png"
              alt="Ship 1"
              className="w-full max-w-sm mx-auto"
            />
            <img
              src="/path/to/ship2.png"
              alt="Ship 2"
              className="w-full max-w-sm mx-auto"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <img
              src="/path/to/logo.png"
              alt="UFS Logo"
              className="w-32 mx-auto lg:mx-0"
            />
            <h1 className="text-3xl font-bold text-gray-800">
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
            <button className="px-6 py-2 mt-4 bg-yellow-500 text-white rounded-lg">
              View more about our services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsPage;
