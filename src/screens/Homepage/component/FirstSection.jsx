import React from "react";
import Slider from "react-slick"; // Import Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-theme styles
import BrandNavSection from "./BrandPulseNavigationSection";

const FirstSection = ({
  videos,
  first,
  second,
  third,
  fourth,
  branding,
}) => {
  // Slider settings for the video carousel
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through videos
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one video at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
  };

  return (
    <section className="relative overflow-hidden">
      {/* Video Carousel */}
      <div className="w-full relative">
        <Slider {...settings}>
          {videos.map((videoSrc, index) => (
            <div key={index} className="relative">
              <video
                src={videoSrc}
                className="w-full h-[550px] object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Branding over the video */}
              <img
                src={branding}
                alt="Brand Logo"
                className="absolute top-1/2 right-[0%] transform -translate-x-1/4 -translate-y-1/2 w-[500px]"
              />
            </div>
          ))}
        </Slider>
        {/* Navigation Section */}
        <div className="absolute bottom-0 w-screen">
          <BrandNavSection
            first={first}
            second={second}
            third={third}
            fourth={fourth}
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
