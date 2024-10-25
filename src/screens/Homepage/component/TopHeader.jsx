// src/components/TopHeader.js
import React from "react";
import { ReactComponent as Phone } from "../../../assets/telephone.svg";
import { ReactComponent as Mail } from "../../../assets/mail.svg";
import { ReactComponent as Support } from "../../../assets/support.svg";
import { ReactComponent as TrackTrace } from "../../../assets/track_trace.svg";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook

const TopHeader = () => {
  const navigate = useNavigate(); // Initializing useNavigate

  return (
    <div className="bg-[#031c3f] text-white text-[12px] font-kollektif">
      <div className="container bg-[#031c3f] flex justify-between items-center py-1 px-10">
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
          {/* Support 24/7 with navigation to /contact-us */}
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => navigate("/contact-us")}
          >
            <Support />
            <span>Support 24/7</span>
          </div>
          {/* Track and Trace with navigation to /book */}
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => navigate("/book-frieghts")}
          >
            <TrackTrace />
            <span>Track and Trace</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
