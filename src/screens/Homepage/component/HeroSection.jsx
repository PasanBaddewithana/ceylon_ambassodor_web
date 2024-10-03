import React from "react";
import Slider from "react-slick"; // Import Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-theme styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for arrows

const Hero = ({ images }) => {
  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop the slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    nextArrow: <CustomNextArrow />, // Custom next arrow
    prevArrow: <CustomPrevArrow />, // Custom previous arrow
  };

  return (
    <section className="relative overflow-hidden">
      <div className="w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Airplane ${index + 1}`}
                className="w-full h-[570px] object-cover" // Keep object-cover to fill the space
              />
              {/* White overlay with opacity */}
              <div className="absolute inset-0 bg-white opacity-10"></div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// Custom Next Arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[80%] right-5 transform -translate-y-1/2 z-10 cursor-pointer  rounded-full p-2 shadow"
      onClick={onClick}
    >
      <FaChevronRight className="text-[#031c3f] text-xl" />
    </div>
  );
};

// Custom Prev Arrow
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[80%] left-5 transform -translate-y-1/2 z-10 cursor-pointer  rounded-full p-2 shadow"
      onClick={onClick}
    >
      <FaChevronLeft className="text-[#031c3f] text-xl" />
    </div>
  );
};

export default Hero;
