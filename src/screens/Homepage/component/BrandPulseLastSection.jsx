import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Sample images (replace these with your actual image imports)
import image1 from "../../../assets/brandpulse_about/BP-1.png";
import image2 from "../../../assets/brandpulse_about/BP-2.png";
import image3 from "../../../assets/brandpulse_about/BP-3.png";
import image4 from "../../../assets/brandpulse_about/BP-4.png";
import image5 from "../../../assets/brandpulse_about/BP-5.png";
import image6 from "../../../assets/brandpulse_about/BP-6.png";


const LastSection = ({ lastwords, lastImage }) => {
  const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
   
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Main Image */}
      <img src={lastImage} className="w-[480px] p-14" />

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

      {/* Scrolling Train Section */}
      <div className="w-full overflow-hidden relative h-[150px] border-[#181728] border-[3px]">
        <div className="flex animate-train whitespace-nowrap">
          {imageArray.concat(imageArray).map((image, index) => (
            <div
              key={index}
              className="flex-none w-[150px] h-[150px] flex items-center justify-center"
            >
              <img src={image} alt={`Icon ${index + 1}`} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastSection;
