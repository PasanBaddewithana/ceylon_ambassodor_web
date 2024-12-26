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
      <div className="container bg-[#031c3f] flex flex-col md:flex-row justify-between items-center py-2 px-4 md:px-10">
        {/* Left Section - Contact Info */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-2 md:mb-0">
          <div className="flex items-center space-x-1">
            <Phone />
            <span className="text-[10px] sm:text-[12px]">+94 77 367 5054</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail />
            <span className="text-[10px] sm:text-[12px]">
              info@ceylonambassador.com
            </span>
          </div>
        </div>

        {/* Right Section - Support Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          {/* Support 24/7 with navigation to /contact-us */}
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => navigate("/contact-us")}
          >
            <Support />
            <span className="text-[10px] sm:text-[12px]">Support 24/7</span>
          </div>
          {/* Track and Trace with navigation to /book */}
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => navigate("/book-frieghts")}
          >
            <TrackTrace />
            <span className="text-[10px] sm:text-[12px]">Track and Trace</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
