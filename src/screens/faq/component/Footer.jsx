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
    <footer className="bg-[#031c3f] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Quote */}
        <p className="text-center text-lg mb-8 font-light">
          "Great brands are built on strong partnerships, and we’re here to be
          yours."
        </p>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-8">
          {/* Logo Section */}
          <div className="flex justify-center mb-6 md:mb-0 text-center mt-3">
            <img
              src={white_logo}
              alt="Ceylon Ambassador"
              className="h-[120px] w-[250px]"
            />{" "}
            {/* Reduced logo size */}
          </div>

          {/* Footer Links - Divided into sections */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <h3 className="font-semibold mb-3 text-sm">Our Divisions</h3>
              <ul className="space-y-1 text-xs">
                <li>
                  <a href="/about" className="hover:text-gray-400">About Us</a>
                </li>
                <li>
                  <a href="/meet-crew" className="hover:text-gray-400">Our Team</a>
                </li>
                <li>
                  <a href="/our-clients" className="hover:text-gray-400">Our Clients</a>
                </li>
                <li>
                  <a href="/meet-crew" className="hover:text-gray-400">Meet The Crew</a>
                </li>
                <li>
                  <a href="/avilablepositions" className="hover:text-gray-400">Available Positions</a>
                </li>
                <li>
                  <a href="/job-application" className="hover:text-gray-400">Job Application</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm">Company Service</h3>
              <ul className="space-y-1 text-xs">
                <li>
                  <a href="/" className="hover:text-gray-400">Our Services</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-gray-400">What We Do</a>
                </li>
                <li>
                  <a href="/book-frieghts" className="hover:text-gray-400">Request a Freight</a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400">Track & Trace</a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400">Air Freight</a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400">Rail Freight</a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400">Maritime Transport</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm">Contact Us</h3>
              <ul className="space-y-1 text-xs">
                <li>
                  <a href="/contact-us" className="hover:text-gray-400">Find Us Here</a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400">Get In Touch</a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-gray-400">FAQ Page</a>
                </li>
                <li>
                  <a href="/global-network" className="hover:text-gray-400">Global Network</a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400">Support 24/7</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm">Latest News</h3>
              <ul className="space-y-1 text-xs">
                <li>
                  <a href="/" className="hover:text-gray-400">Expert Tips</a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400">A Sustainable Future</a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400">Fresh Start</a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400">Clean Spaces</a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400">Tips & Strategies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center mb-8">
          <p className="flex-row text-center w-full text-xs mb-4">
            &copy; 2024 Ceylon Ambassador, All Rights Reserved
            <br />
            &copy; Developed By <a href="https://www.gravitycolombo.com/" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">Gravity Colombo</a>
          </p>
         

          <div className="flex justify-center space-x-4">
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
