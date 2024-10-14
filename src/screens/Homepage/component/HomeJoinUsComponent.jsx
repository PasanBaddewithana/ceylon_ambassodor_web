import React from "react";

const HomeJoinUsComponent = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 px-4">
        {/* Left Section: Text */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <h1 className="text-4xl font-bold text-customBlue">
            Join Us on Our Journey
          </h1>
          <p className="text-gray-600">
            We invite you to explore our services and discover how Ceylon
            Ambassador can be your partner in growth. Together, let's connect
            opportunities and create lasting value.
          </p>

          {/* View More Section */}
          <div className="flex items-center space-x-4 py-4 border-t-2 border-customBlue">
            {/* Circle with Plus Icon */}
            <a
              href="#"
              className="flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 cursor-pointer"
            >
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
              <div className="text-gray-800">
                <p className="font-medium">View more</p>
                <p>about our services</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1">
          <img
            src="https://example.com/image-url.jpg"
            alt="Ceylon Ambassador Building"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeJoinUsComponent;
