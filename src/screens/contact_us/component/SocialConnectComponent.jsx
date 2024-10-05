import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../../assets/Logo.svg";
import ufs_blue_logo from "../../../assets/blue_ufs_logo.svg";
import aerofly_blue_logo from "../../../assets/Aerofly_blue_logo.svg";
import khmergate_blue_logo from "../../../assets/khmergate_blue_logo.svg";
import brandpulse_blue_logo from "../../../assets/brand_pulse_blue_logo.svg";

const brands = [
  { name: "UFS", logo: ufs_blue_logo },
  { name: "Khmergate", logo: aerofly_blue_logo },
  { name: "Aerofly Nation", logo: khmergate_blue_logo },
  { name: "Brandpulse", logo: brandpulse_blue_logo },
];

export default function SocialConnectComponent() {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto font-Montserrat">
      <div className="text-center mb-8">
        <img
          src={logo}
          alt="Ceylon Ambassador Logo"
          className="mx-auto mb-3 h-[100px] w-[300px]"
        />
        <h2 className="text-2xl font-bold text-customBlue mb-2">
          Let's Connect on Social Media
        </h2>
        <p className="text-lg text-customBlue mb-4">
          Stay updated with the latest news, projects, and insights from Ceylon
          Ambassador by following us on our social media channels:
        </p>
        <div className="flex justify-center space-x-4">
          <FaFacebookF className="text-customBlue text-2xl" />
          <FaInstagram className="text-customBlue text-2xl" />
          <FaTwitter className="text-customBlue text-2xl" />
          <FaLinkedinIn className="text-customBlue text-2xl" />
          <FaYoutube className="text-customBlue text-2xl" />
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="flex justify-center items-center flex-wrap gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="text-center flex-shrink-0 w-[200px]"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} Logo`}
                className="mx-auto mb-2 h-[100px] w-[200px]"
              />
              <div className="flex justify-center space-x-2">
                <FaFacebookF className="w-4 h-4 text-customBlue" />
                <FaInstagram className="w-4 h-4 text-customBlue" />
                <FaTwitter className="w-4 h-4 text-customBlue" />
                <FaLinkedinIn className="w-4 h-4 text-customBlue" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-customBlue font-bold mt-6">
        "Connecting opportunities, delivering excellence."
      </p>
    </div>
  );
}
