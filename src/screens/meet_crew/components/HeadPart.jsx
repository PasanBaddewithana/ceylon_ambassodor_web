import React from "react";
import working_man from "../../../assets/workingMan.png";

const HeaderPart = () => {
  return (
    <div className="bg-white py-12">
      <div className="container max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end px-4 border-r-4 border-customBlue">
          <img
            src={working_man}
            alt="Shipping services"
            className="rounded-lg shadow-lg"
            style={{ width: "400px", height: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6  pb-2">
            The Heart of Ceylon Ambassador
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed  pb-4">
            At <strong>Ceylon Ambassador,</strong> our greatest strength lies in
            our people. Behind every seamless shipment, innovative solution, and
            successful project is a dedicated team of experts who work
            tirelessly to deliver excellence. Our crew is a diverse group of
            professionals, united by a shared vision to connect businesses and
            people across the globe with precision, care, and innovation.
          </p>
          <div className="border-t-4 border-customBlue pt-4">
            <button className="bg-customBlue text-white px-6 py-2 rounded-full text-lg shadow-lg hover:bg-blue-600">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPart;
