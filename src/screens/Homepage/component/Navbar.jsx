// src/components/Navbar.js
import React from "react";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { FaUserCircle } from "react-icons/fa"; // Using react-icons for icons

const Navbar = () => {
  return (
    <nav className="bg-transparent flex items-center border-b-2 border-[#031c3f] text-[#031c3f]  fixed top-6 w-full z-10 font-kollektif font-semibold">
      <div className="container  mx-auto flex justify-between items-center">
        <div className="w-[90%]  flex justify-between items-center py-2 px-6 border-r-2 border-[#031c3f]">
          {/* Logo */}
          <div className="items-center ml-4">
            <Logo />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a href="#" className=" text-lg hover:text-yellow-500">
              Home
            </a>
            <a href="#" className=" text-lg hover:text-yellow-500">
              About
            </a>
            <a href="#" className=" text-lg hover:text-yellow-500">
              Companies
            </a>
            <a href="#" className=" text-lg hover:text-yellow-500">
              Office
            </a>
            <a href="#" className="text-lg hover:text-yellow-500">
              Contact
            </a>
          </div>
        </div>
        {/* Track Your Order Button */}
        <div className="flex items-center w-[20%] justify-end">
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
