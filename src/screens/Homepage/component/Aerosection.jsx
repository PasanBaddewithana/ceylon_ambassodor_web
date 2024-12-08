import React from "react";

import plane1 from "../../../assets/H2.png";
import ufs_orange from "../../../assets/home/ufs_orange.png";

const AeroLogisticsPage = () => {
  return (
    <div className="mt-4  mb-4 flex flex-col justify-center items-center bg-gray-50">
      {/* Container for the content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-center justify-between  space-y-8 ">
          {/* Ships images */}
          <div className="space-y-16">
            <img
              src={plane1}
              alt="Ship 2"
              className="w-full max-w-2xl mx-auto"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left font-Montserrat">
            <h1 className="text-3xl font-bold text-customBlue">
              Elevating the Future of Aviation
            </h1>
            <p className="text-gray-600 pb-4">
              <strong className="text-black"> Aerofly Aviation</strong> provides
              comprehensive aviation solutions, specializing in cargo capacity
              management, airline representation, and customer service solutions
              tailored to meet the evolving needs of the global aviation
              industry. With a focus on maximizing efficiency and revenue,
              Aerofly Aviation delivers cutting-edge solutions backed by
              industry expertise, innovative technology, and a commitment to
              excellence.
              <br />
              <br />
              <strong className="text-black">
                Soar higher with Aerofly Aviation
              </strong>
              —your trusted partner in aviation success.
            </p>

            {/* View More Button */}
            <div className="flex items-center space-x-4 py-4 border-t-2 border-customBlue">
              {/* Clickable area with hover effect */}
              <a
                href="#"
                className="flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 cursor-pointer"
              >
                {/* Circle with Plus Icon */}
                <div className="flex justify-center items-center w-12 h-12 bg-orange-300 rounded-full transition-transform duration-300 hover:scale-110">
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
                <div className="text-gray-800 font-kollektif ">
                  <p className="font-medium">View more</p>
                  <p>about our services</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AeroLogisticsPage;
