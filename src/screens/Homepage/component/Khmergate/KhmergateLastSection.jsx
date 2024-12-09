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
      <div className="w-full overflow-hidden relative h-[150px] border-[#015B02] border-[3px]">
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

export default KhmergateLastSection;
