import React from "react";
import working_man from "../../../assets/workingMan.png";

const HeaderPart = () => {
  return (
    <div className=" bg-white">
      {/* Top Section with Image and Text */}
      <div className="container max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-4 lg:px-8">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={working_man}
            alt="Shipping services"
            className="w-3/4 h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col justify-center border-l-2 border-bggray mt-8 pb-4 lg:mt-0">
          <div className="border-b-2 border-bggray pl-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              The Heart of Ceylon Ambassador
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At <strong>Ceylon Ambassador,</strong> our greatest strength lies in our people.
              Behind every seamless shipment, innovative solution, and
              successful project is a dedicated team of experts who work
              tirelessly to deliver excellence. Our crew is a diverse group of
              professionals, united by a shared vision to connect businesses and
              people across the globe with precision, care, and innovation.
            </p>
          </div>
          <div className="mt-4 ml-8 flex items-center">
            <button className="flex items-center">
              <div className="bg-customBlue rounded-full w-8 h-8 flex items-center justify-center ">
                <span className="text-3xl font-bold text-white">+</span>
              </div>
            </button>
            <div className="ml-4">
              <p>View more about our services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPart;
