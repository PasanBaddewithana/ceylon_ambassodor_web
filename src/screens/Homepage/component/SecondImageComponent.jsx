import React from "react";

import quote_img from "../../../assets/quata.png";

const SecondHomeImageComponent = () => {
  return (
    <div className="parallax-spacer-home">
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center h-full bg-black bg-opacity-10 text-white p-8 " >
        <div className="max-w-xl ml-20 text-left">
          {/* Quote or Logo */}
          <div className="font-bold mb-4 lg:text-left">
            <img src={quote_img} alt="Quote Icon" className="h-12 w-12" />
          </div>
          <div className="lg:ml-2">
            {/* Main Heading */}
            <h1
              
              className="text-xl lg:text-4xl font-bold mb-6 font-MontserratMedium"
              data-aos="fade-up" data-aos-duration="1000"
            >
              Ceylon Ambassador: Pioneering Global Connections
            </h1>

            {/* Description */}
            <p
              className="text-sm lg:text-sm mb-6 font-Montserrat"
              data-aos="fade-up" data-aos-duration="2000"
              
            >
              Welcome to <strong>Ceylon Ambassador,</strong> where innovation meets
              excellence to create a world of seamless possibilities. As the
              mother brand behind industry leaders in logistics, travel,
              aviation, and branding, we are dedicated to empowering businesses
              and individuals to thrive in a globally connected marketplace. Our
              mission is simple: to bridge distances, break boundaries, and
              deliver unmatched value through our network of specialized brands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHomeImageComponent;
