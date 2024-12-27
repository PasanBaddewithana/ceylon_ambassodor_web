import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Slider from "react-infinite-logo-slider";

// Sample images (replace these with your actual image imports)
import image1 from "../../../../assets/khmergate_about/K-1.png";
import image2 from "../../../../assets/khmergate_about/K-2.png";
import image3 from "../../../../assets/khmergate_about/K-3.png";
import image4 from "../../../../assets/khmergate_about/K-4.png";
import image5 from "../../../../assets/khmergate_about/K-5.png";
import image6 from "../../../../assets/khmergate_about/K-6.png";
import image7 from "../../../../assets/khmergate_about/K-7.png";


const KhmergateLastSection = ({ lastwords, lastImage }) => {
  const imageArray = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Main Image */}
      <img src={lastImage} className="w-[480px] p-14" />

      {/* Last Words */}
      <p className="pb-6 text-[#015B02] text-[13px] font-[500]">{lastwords}</p>

      {/* Social Media Icons */}
      <div className="flex space-x-4 pb-10">
        <FontAwesomeIcon icon={faFacebookF} className="text-[#015B02]" />
        <FontAwesomeIcon icon={faInstagram} className="text-[#015B02]" />
        <FontAwesomeIcon icon={faXTwitter} className="text-[#015B02]" />
        <FontAwesomeIcon icon={faLinkedinIn} className="text-[#015B02]" />
        <FontAwesomeIcon icon={faYoutube} className="text-[#015B02]" />
      </div>

      {/* Scrolling Train Section */}
      <div className="last-section-container">
      <Slider
        width="10%"
        duration={200}
        pauseOnHover={false}
        blurBorders={false}
        blurBorderColor="#fff"
        toRight={false}
      >
        {imageArray.map((image, index) => (
          <Slider.Slide key={index} className="flex justify-center items-center">
            <img 
              src={image} 
              alt={`logo-${index}`}
              className="w-32 h-32 object-contain mx-1"  // Adjust the size as needed
            />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default KhmergateLastSection;
