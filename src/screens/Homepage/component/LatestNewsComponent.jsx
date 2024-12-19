import React from "react";

import blog1_img from "../../../assets/blog/blog1.jpg";
import blog2_img from "../../../assets/blog/blog2.jpg";
import blog3_img from "../../../assets/blog/blog3.jpg";

const LatestNewsComponent = () => {
  // Directly loading the blog posts data here
  const newsData = [
    {
      date: "August 9, 2024",
      title: "Exploring Ceylon Ambassador's Global Reach and Impact",
      description:
        "Ceylon Ambassador operates across multiple continents, with a strong presence in Asia, Europe, North America, and the Middle East. This extensive network allows the company to seamlessly manage logistics...",
      imageUrl: blog1_img,
    },
    {
      date: "August 9, 2024",
          title: "Exploring Ceylon Ambassador's Global Reach and Impact",
          description:
            "Ceylon Ambassador has established itself as a leader in the global market, offering premium freight and logistics services...",
          imageUrl: blog2_img,
    },
    {
      date: "August 9, 2024",
          title: "Exploring Ceylon Ambassador's Global Reach and Impact",
          description:
            "Ceylon Ambassador has established itself as a leader in the global market, offering premium freight and logistics services...",
          imageUrl: blog3_img,
    },
  ];

  console.log("Loaded newsData:", newsData);

  if (!newsData || newsData.length === 0) {
    return <p className="text-center text-gray-600">No news available at the moment.</p>;
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-customBlue mb-10 font-MontserratSemiBold">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {newsData.map((news, index) => (
            <div key={`${news.title}-${index}`} className="flex flex-col">
              {/* News Image */}
              <div
                className="h-64 mb-4 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${news?.imageUrl || ""})`,
                }}
              ></div>

              {/* Date and Divider */}
              <div className="flex items-center justify-center lg:items-start mb-2">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-customBlue font-MontserratSemiBold">
                    {news?.date?.split(" ")[1] || "01"} {/* Extract day */}
                  </div>
                  <div className="text-sm text-customBlue font-Montserrat">
                    {news?.date?.split(" ")[0] || "Jan"} {/* Extract month */}
                  </div>
                </div>
                <div className="border-l-4 border-customBlue ml-4 h-full"></div>

                <div className="ml-4 font-Montserrat">
                  <h3 className="text-lg font-semibold text-customBlue mb-2">
                    {news?.title || "Untitled News"}
                  </h3>

                  {/* News Description */}
                  <p className="text-sm text-customBlue mb-4 text-justify line-clamp-3">
                    {news?.description || "No description available."}
                  </p>

                  {/* View More Button */}
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex justify-center items-center w-10 h-10 bg-[#c3a05f] rounded-full transition-transform duration-300 hover:scale-110">
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
                      <div className="text-customBlue font-kollektif">
                        <p className="font-medium">View more</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsComponent;
