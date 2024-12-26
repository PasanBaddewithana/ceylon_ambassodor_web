import React from "react";
import backgroundImage from "../../../assets/home/3_image_home.jpg";
import quote_img from "../../../assets/quata.png";

const GlobalLogisticsComponent = () => {
  return (
    <div className="parallax-spacer-homeglobe bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Text Content Section */}
      <div className="relative z-10 h-full w-full flex flex-col lg:flex-row items-center justify-center lg:justify-end p-6 lg:pr-20 text-white">
        <div className="w-full lg:w-2/5 space-y-6 lg:mb-24">
          {/* Quote Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={quote_img}
              alt="Quote Icon"
              className="h-12 w-12 lg:h-14 lg:w-14"
            />
          </div>

          <div className="mt-4">
            {/* Title */}
            <h1
              className="text-2xl lg:text-4xl font-bold font-MontserratMedium text-center lg:text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Why Choose Ceylon Ambassador?
            </h1>

            {/* Description */}
            <div className="mt-4 space-y-4">
              <p
                className="text-sm lg:text-base leading-snug text-center lg:text-left font-Montserrat"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <strong>● Global Reach:</strong> Our services span continents,
                ensuring your needs are met wherever you are.
              </p>

              <p
                className="text-sm lg:text-base leading-snug text-center lg:text-left font-Montserrat"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <strong>● Tailored Solutions:</strong> We offer personalized
                services designed to align with your unique goals.
              </p>

              <p
                className="text-sm lg:text-base leading-snug text-center lg:text-left font-Montserrat"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <strong>● Innovation-Driven:</strong> Powered by technology, we
                provide cutting-edge solutions across industries.
              </p>

              <p
                className="text-sm lg:text-base leading-snug text-center lg:text-left font-Montserrat"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <strong>● Commitment to Sustainability:</strong> We prioritize
                eco-friendly practices to create a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLogisticsComponent;
