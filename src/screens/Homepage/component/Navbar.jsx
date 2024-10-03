// src/components/Navbar.js
import React, { useState } from "react";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { FaUserCircle } from "react-icons/fa";
import { FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { ReactComponent as TrackOrder } from "../../../assets/track_order.svg";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-transparent mx-auto flex items-center border-b-2 border-[#031c3f] text-[#031c3f]  fixed top-6 w-full z-10 font-kollektif font-bold text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-[90%] flex justify-between items-center py-2 px-6 border-r-2 border-[#031c3f]">
          {/* Logo */}
          <div className="items-center ml-4">
            <Logo />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-14">
            <a href="#" className="relative group text-base">
              Home
              <span className="absolute top-[-4px] left-0 w-0 h-[2px] bg-[#c3a05f]  transition-all duration-300 group-hover:w-[120%]"></span>
            </a>
            <a
              href="#"
              className="relative group text-base hover:text-yellow-500"
            >
              About
              <span className="absolute top-[-4px] left-0 w-0 h-[2px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
            </a>
            <a
              href="#"
              className="relative group text-base hover:text-yellow-500"
            >
              Companies
              <span className="absolute top-[-4px] left-0 w-0 h-[2px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
            </a>
            <a
              href="#"
              className="relative group text-base hover:text-yellow-500"
            >
              Office
              <span className="absolute top-[-4px] left-0 w-0 h-[2px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
            </a>

            {/* Contact with Dropdown */}
            <div className="relative group">
              <a
                href="#"
                className="relative group text-base hover:text-yellow-500"
                onClick={toggleDropdown}
              >
                Contact
                <span className="absolute top-[-4px] left-0 w-0 h-[2px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
              </a>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute bg-[#031c3f] text-white top-full mt-2 py-2 px-4 rounded shadow-lg"
                  onClick={toggleDropdown}
                >
                  <a href="#" className="block px-4 py-2 hover:bg-yellow-500">
                    Contact Us
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-yellow-500">
                    FAQ's
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-yellow-500">
                    Book a Freight
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Track Your Order Button */}
        <div className="items-center w-[20%]">
          <div className="flex items-center bg-transparent justify-between">
            {/* Track Your Order Section */}
            <div className="flex items-center justify-center">
              <TrackOrder />
              <span className="text-[#031c3f] font-bold">Track Your Order</span>
            </div>

            {/* Hamburger Menu */}
            <div className="bg-[#031c3f] p-[6px]">
              <FaBars className="text-white text-3xl" /> {/* Hamburger icon */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
