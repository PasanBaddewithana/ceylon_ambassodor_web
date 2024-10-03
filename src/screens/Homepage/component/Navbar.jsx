// src/components/Navbar.js
import React from "react";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { FaUserCircle } from "react-icons/fa"; // Using react-icons for icons
import { FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { ReactComponent as TrackOrder } from "../../../assets/track_order.svg";
const Navbar = () => {
  return (
    <nav className="bg-transparent mx-auto flex items-center border-b-2 border-[#031c3f] text-[#031c3f]  fixed top-6 w-full z-10 font-kollektif font-bold text-sm">
      <div className="container  mx-auto flex justify-between items-center">
        <div className="w-[90%]  flex justify-between items-center py-2 px-6 border-r-2 border-[#031c3f]">
          {/* Logo */}
          <div className="items-center ml-4">
            <Logo />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-12">
            <a href="#" className=" text-sm hover:text-yellow-500">
              Home
            </a>
            <a href="#" className=" text-sm hover:text-yellow-500">
              About
            </a>
            <a href="#" className=" text-sm hover:text-yellow-500">
              Companies
            </a>
            <a href="#" className=" text-sm hover:text-yellow-500">
              Office
            </a>
            <a href="#" className="text-sm hover:text-yellow-500">
              Contact
            </a>
          </div>
        </div>
        {/* Track Your Order Button */}
        <div className="items-center w-[20%]">
          <div className="flex items-center bg-transparent  justify-between ">
            {/* Track Your Order Section */}
            <div className="flex items-center justify-center">
              <TrackOrder />
              <span className="text-[#031c3f]  font-bold">
                Track Your Order
              </span>{" "}
              {/* Text */}
            </div>

            {/* Hamburger Menu */}
            <div className="bg-[#d4b178] p-[6px]">
              <FaBars className="text-[#031c3f] text-3xl" />{" "}
              {/* Hamburger icon */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
