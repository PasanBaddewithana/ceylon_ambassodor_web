// src/components/TopHeader.js
import React from "react";
import { FaPhone, FaEnvelope, FaGlobe, FaTrain } from "react-icons/fa"; // Using react-icons for icons
import { ReactComponent as Phone } from "../../../assets/telephone.svg";
import { ReactComponent as Mail } from "../../../assets/mail.svg";
import { ReactComponent as Support } from "../../../assets/support.svg";
import { ReactComponent as TrackTrace } from "../../../assets/track_trace.svg";
const TopHeader = () => {
  return (
    <div className="bg-[#031c3f] text-white text-[12px] font-kollektif">
      <div className="container bg-[#031c3f]  flex justify-between items-center py-1 px-10">
        {/* Left Section - Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone />
            <span>+94 77 777 7777</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail />
            <span>info@ceylonambassador.com</span>
          </div>
        </div>

        {/* Right Section - Support Links */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Support />
            <span>Support 24/7</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrackTrace />
            <span>Track and Trace</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
