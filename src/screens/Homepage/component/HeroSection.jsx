import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = ({ images, video }) => {
  if (video) {
    return (
      <section className="relative overflow-hidden flex-wrap mb-0">
        <div className="w-full">
          <video
            className="w-full h-[550px] object-cover"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section className="relative overflow-hidden flex-wrap mb-0">
      <div className="w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Airplane ${index + 1}`}
                className="w-full h-[550px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

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
