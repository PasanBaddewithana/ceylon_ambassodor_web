import React from "react";
import Slider from "react-infinite-logo-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Import your additional images
import icon1 from "../../../assets/ufs_about/UFS-2.png";
import icon2 from "../../../assets/ufs_about/UFS-3.png";
import icon3 from "../../../assets/ufs_about/UFS-4.png";
import icon4 from "../../../assets/ufs_about/UFS-5.png";
import icon5 from "../../../assets/ufs_about/UFS-6.png";
import icon6 from "../../../assets/ufs_about/UFS-7.png";
import icon7 from "../../../assets/ufs_about/UFS-8.png";
import icon8 from "../../../assets/ufs_about/UFS-9.png";
import icon9 from "../../../assets/ufs_about/UFS-10.png";
import icon11 from "../../../assets/ufs_about/UFS-12.png";
import icon12 from "../../../assets/ufs_about/UFS-13.png";

const LastSection = ({ lastwords, lastImage }) => {
  const imageArray = [
    icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon11, icon12,
  ]; // Add your images here

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Display the main image */}
      <img src={lastImage} alt="Main Visual" className="w-[480px] p-14" />

      {/* Last Words */}
      <p className="pb-6 text-[#181728] text-[13px] font-[500]">{lastwords}</p>

      {/* Social Media Icons */}
      <div className="flex space-x-4 pb-10">
        <FontAwesomeIcon icon={faFacebookF} className="text-[#181728]" />
        <FontAwesomeIcon icon={faInstagram} className="text-[#181728]" />
        <FontAwesomeIcon icon={faXTwitter} className="text-[#181728]" />
        <FontAwesomeIcon icon={faLinkedinIn} className="text-[#181728]" />
        <FontAwesomeIcon icon={faYoutube} className="text-[#181728]" />
      </div>

      {/* Train-like Scrolling Section */}
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

export default LastSection;
