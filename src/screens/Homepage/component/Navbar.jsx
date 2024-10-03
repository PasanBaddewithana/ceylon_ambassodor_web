// src/components/Navbar.js
import React from "react";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { FaUserCircle } from "react-icons/fa"; // Using react-icons for icons

const Navbar = () => {
  return (
    <nav className="bg-transparent flex items-center border-b-2 border-[#031c3f] fixed top-4 w-full z-10">
      <div className="container  mx-auto flex justify-between items-center  px-4">
        <div className="w-[80%] mx-auto flex justify-between items-center ">
          {/* Logo */}
          <div className="items-center">
            <Logo />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a href="#" className="text-white text-lg hover:text-yellow-500">
              Home
            </a>
            <a href="#" className="text-white text-lg hover:text-yellow-500">
              About
            </a>
            <a href="#" className="text-white text-lg hover:text-yellow-500">
              Companies
            </a>
            <a href="#" className="text-white text-lg hover:text-yellow-500">
              Office
            </a>
            <a href="#" className="text-white text-lg hover:text-yellow-500">
              Contact
            </a>
          </div>
        </div>
        {/* Track Your Order Button */}
        <div className="flex items-center w-[20%] justify-end">
          <a
            href="#"
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Track Your Order
          </a>
          <FaUserCircle className="text-white text-2xl ml-4" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
