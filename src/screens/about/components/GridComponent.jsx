import React from "react";

// Import images
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

import imageK1 from "../../../assets/khmergate_about/K-1.png";
import imageK2 from "../../../assets/khmergate_about/K-2.png";
import imageK3 from "../../../assets/khmergate_about/K-3.png";
import imageK4 from "../../../assets/khmergate_about/K-4.png";
import imageK5 from "../../../assets/khmergate_about/K-5.png";
import imageK6 from "../../../assets/khmergate_about/K-6.png";
import imageK7 from "../../../assets/khmergate_about/K-7.png";

import imageA1 from "../../../assets/aerofly_about/AA-1.png";
import imageA2 from "../../../assets/aerofly_about/AA-2.png";
import imageA3 from "../../../assets/aerofly_about/AA-3.png";
import imageA4 from "../../../assets/aerofly_about/AA-4.png";
import imageA5 from "../../../assets/aerofly_about/AA-5.png";
import imageA6 from "../../../assets/aerofly_about/AA-6.png";
import imageA7 from "../../../assets/aerofly_about/AA-7.png";
import imageA8 from "../../../assets/aerofly_about/AA-8.png";
import imageA9 from "../../../assets/aerofly_about/AA-9.png";
import imageA10 from "../../../assets/aerofly_about/AA-10.png";

import image1 from "../../../assets/brandpulse_about/BP-1.png";
import image2 from "../../../assets/brandpulse_about/BP-2.png";
import image3 from "../../../assets/brandpulse_about/BP-3.png";
import image4 from "../../../assets/brandpulse_about/BP-4.png";
import image5 from "../../../assets/brandpulse_about/BP-5.png";
import image6 from "../../../assets/brandpulse_about/BP-6.png";

const GridComponent = () => {
  const row1Images = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, imageA8, imageA9, imageA10, image1, image2, image3, image4, image5, image6 ];
  const row2Images = [icon9, icon11, icon12, imageK1, imageK2, imageK3, imageK4, imageK5, imageK6, imageK7,imageA1, imageA2, imageA3, imageA4, imageA5, imageA6, imageA7 ];

  return (
    <div className="relative w-full overflow-hidden mt-8">
      {/* First row */}
      <div className="flex animate-train-left">
        {row1Images.map((image, index) => (
          <div key={index} className="w-32 h-32 p-2 ">
            <img src={image} alt={`Row 1 Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      {/* Second row */}
      <div className="flex animate-train-right mt-4">
        {row2Images.map((image, index) => (
          <div key={index} className="w-32 h-32 p-2 ">
            <img src={image} alt={`Row 2 Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
