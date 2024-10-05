import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import white_logo from "../../../assets/white_logo.svg";

const Footer = () => {
  return (
    <footer className="container bg-[#031c3f] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Quote */}
        <p className="text-center text-lg mb-8 font-light">
          "Great brands are built on strong partnerships, and we’re here to be
          yours."
        </p>

        <hr className="border-t border-white mx-10 mb-8" />

        {/* Footer Content */}
        <div className="flex flex-wrap justify-between mb-8">
          {/* Logo Section */}
          <div className="flex justify-center md:w-1/4 mb-6 md:mb-0 text-center mt-3 md:text-left">
            <img
              src={white_logo}
              alt="Ceylon Ambassador"
              className="h-[120px] w-[250px]"
            />{" "}
            {/* Reduced logo size */}
          </div>

          {/* Footer Links - Divided into sections */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Reduced gap between columns */}
            <div>
              <h3 className="font-semibold mb-3 text-sm">Our Divisions</h3>
              {/* Reduced font size */}
              <ul className="space-y-1 text-xs">
                {/* Reduced space between items and text size */}
                <li>About Us</li>
                <li>Our Team</li>
                <li>Our Clients</li>
                <li>Meet The Crew</li>
                <li>Available Positions</li>
                <li>Job Application</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm">Company Service</h3>
              {/* Reduced font size */}
              <ul className="space-y-1 text-xs">
                {" "}
                {/* Reduced space between items and text size */}
                <li>Our Services</li>
                <li>What We Do</li>
                <li>Request a Freight</li>
                <li>Track & Trace</li>
                <li>Air Freight</li>
                <li>Rail Freight</li>
                <li>Maritime Transport</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm">Contact Us</h3>
              {/* Reduced font size */}
              <ul className="space-y-1 text-xs">
                {" "}
                {/* Reduced space between items and text size */}
                <li>Find Us Here</li>
                <li>Get In Touch</li>
                <li>FAQ Page</li>
                <li>Global Network</li>
                <li>Support 24/7</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm">Latest News</h3>{" "}
              {/* Reduced font size */}
              <ul className="space-y-1 text-xs">
                {" "}
                {/* Reduced space between items and text size */}
                <li>Expert Tips</li>
                <li>A Sustainable Future</li>
                <li>Fresh Start</li>
                <li>Clean Spaces</li>
                <li>Tips & Strategies</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-t border-white mx-10 mb-8" />

        {/* Social Media Icons */}
        <div className="flex justify-between items-center ml-8 mr-8">
          <p className="text-center w-full text-xs">
            {" "}
            {/* Reduced font size */}
            &copy; 2024 Ceylon Ambassador, All Rights Reserved
          </p>

          <div className="flex justify-end space-x-4">
            <a href="#" className="hover:text-gray-400" aria-label="Facebook">
              <FaFacebookF size={20} /> {/* Slightly reduced icon size */}
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="Instagram">
              <FaInstagram size={20} /> {/* Slightly reduced icon size */}
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
              <FaLinkedinIn size={20} /> {/* Slightly reduced icon size */}
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="YouTube">
              <FaYoutube size={20} /> {/* Slightly reduced icon size */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
