import React from "react";

const LatestNewsComponent = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-customBlue mb-10">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News Card 1 */}
          <div className="flex flex-col">
            {/* Placeholder for News Image */}
            <div className="bg-gray-300 h-64 mb-4"></div>

            {/* Date and Divider */}
            <div className="flex items-center mb-2">
              <div className="text-4xl font-bold text-customBlue">09</div>
              <div className="ml-2">
                <div className="text-sm text-customBlue">Aug</div>
              </div>
              <div className="border-l-2 border-customBlue ml-4 h-full"></div>
            </div>

            {/* News Title */}
            <h3 className="text-lg font-semibold text-customBlue mb-2">
              Your Global Logistics <br /> Partner for Seamless
            </h3>

            {/* News Description */}
            <p className="text-sm text-customBlue mb-4">
              UFS is a leader in logistics and supply chain management, offering
              a full suite of services including air, sea, and inland freight,
            </p>

            {/* View More Button */}
            <div className="flex items-center">
              <a
                href="#"
                className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 cursor-pointer"
              >
                {/* Circle with Plus Icon */}
                <div className="flex justify-center items-center w-10 h-10 bg-orange-300 rounded-full transition-transform duration-300 hover:scale-110">
                  <svg
                    className="w-5 h-5 text-customBlue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div className="text-customBlue">
                  <p className="font-medium">View more</p>
                  <p>about our services</p>
                </div>
              </a>
            </div>
          </div>

          {/* Repeat the above structure for additional news cards */}
          <div className="flex flex-col">
            <div className="bg-gray-300 h-64 mb-4"></div>
            <div className="flex items-center mb-2">
              <div className="text-4xl font-bold text-customBlue">09</div>
              <div className="ml-2">
                <div className="text-sm text-customBlue">Aug</div>
              </div>
              <div className="border-l-2 border-customBlue ml-4 h-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-customBlue mb-2">
              Your Global Logistics <br /> Partner for Seamless
            </h3>
            <p className="text-sm text-customBlue mb-4">
              UFS is a leader in logistics and supply chain management, offering
              a full suite of services including air, sea, and inland freight,
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-center items-center w-10 h-10 bg-orange-300 rounded-full transition-transform duration-300 hover:scale-110">
                  <svg
                    className="w-5 h-5 text-customBlue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div className="text-customBlue">
                  <p className="font-medium">View more</p>
                  <p>about our services</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-gray-300 h-64 mb-4"></div>
            <div className="flex items-center mb-2">
              <div className="text-4xl font-bold text-customBlue">09</div>
              <div className="ml-2">
                <div className="text-sm text-customBlue">Aug</div>
              </div>
              <div className="border-l-2 border-customBlue ml-4 h-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-customBlue mb-2">
              Your Global Logistics <br /> Partner for Seamless
            </h3>
            <p className="text-sm text-customBlue mb-4">
              UFS is a leader in logistics and supply chain management, offering
              a full suite of services including air, sea, and inland freight,
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-center items-center w-10 h-10 bg-orange-300 rounded-full transition-transform duration-300 hover:scale-110">
                  <svg
                    className="w-5 h-5 text-customBlue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div className="text-customBlue">
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

export default LatestNewsComponent;
