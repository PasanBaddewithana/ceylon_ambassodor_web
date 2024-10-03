import React from "react";
import Slider from "react-slick"; // Import Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-theme styles

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
  };

  return (
    <section className="relative">
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
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
