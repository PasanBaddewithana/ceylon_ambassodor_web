import React from "react";
import tall_building from "../../../assets/home/tall_building.jpg";
import company_logo from "../../../assets/white_logo_2.svg";


const HomeJoinUsComponent = () => {
  return (
    <div className="relative flex justify-center items-center mt-12 py-8 font-Montserrat ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Left Section: Text (40% width) */}
        <div className="lg:w-2/5 text-center lg:text-left space-y-4 border-customBlue border-r-2">
          <h1 className="text-4xl font-bold text-customBlue leading-tight" data-aos="fade-up" data-aos-duration="1000">
            Join Us
          </h1>
          <h1 className="text-4xl font-bold text-customBlue leading-tight" data-aos="fade-up" data-aos-duration="1500">
            on Our Journey
          </h1>
          <p className="text-customBlue max-w-md lg:max-w-sm" data-aos="fade-up" data-aos-duration="2000">
            We invite you to explore our services and discover how Ceylon
            Ambassador can be your partner in growth. Together, let's connect
            opportunities and create lasting value.
          </p>

          {/* View More Section */}
          <div
            className="flex items-center space-x-4 py-4 border-t-2 border-customBlue"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {/* Clickable area with hover effect */}
            <a 
  href="/Ceylon_Ambassador_Company_Profile.pdf"
  download="Ceylon Ambassador Company Profile.pdf" 
  className="flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 cursor-pointer" 
>
              {/* Circle with Plus Icon */}
              <div className="flex justify-center items-center w-12 h-12 bg-[#c3a05f] rounded-full transition-transform duration-300 hover:scale-110">
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

        {/* Right Section: Image (60% width) */}
        <div className="flex-1 lg:w-3/5 lg:flex-shrink-0 relative">
          {/* Image */}
          <img
            src={tall_building}
            alt="Ceylon Ambassador Building"
            className="rounded-sm shadow-lg w-full"
          />

          {/* Overlay layer */}
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

          {/* Logo overlay - centered at the top */}
          <img
            src={company_logo}
            alt="Company Logo"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-72 h-auto z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeJoinUsComponent;
