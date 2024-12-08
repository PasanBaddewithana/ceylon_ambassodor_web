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
            Connecting Ideas. Moving Dreams. Delivering Excellence.
          </h1>
          <p className="mt-8 text-sm text-customBlue font-Montserrat">
            At <strong>Ceylon Ambassador,</strong> we believe in the power of connection. Whether
            it’s moving goods, enabling travel, fueling aviation growth, or
            shaping brands, we are here to bring your vision to life. Let us
            partner with you to redefine what’s possible.
          </p>
          <br />
          <h3 className="text-1xl font-bold text-customBlue font-MontserratMedium">  Ceylon Ambassador: At the heart of global progress.</h3>
        </div>
      </div>
    </div>
  );
};

export default LogisticsBanner;
