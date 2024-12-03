import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as TrackOrder } from "../../../assets/track_order.svg";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

const Navbar = ({ changeColor = false }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const navigationLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/companies", text: "Companies" },
    { href: "/office", text: "Office" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <>
      <nav
        className={`bg-transparent mx-auto flex items-center border-b-2 ${
          changeColor ? "border-white" : "border-[#031c3f]"
        } ${changeColor ? "text-white" : "text-[#031c3f]"} absolute top-6 w-full z-10 font-kollektif font-bold text-sm`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="relative group text-base"
              >
                {link.text}
                <span className="absolute top-[-8px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Track Your Order Button */}
          <div className="hidden md:flex items-center space-x-4">
            <TrackOrder />
            <span
              className={`font-bold ${
                changeColor ? "text-white" : "text-[#031c3f]"
              }`}
            >
              Track Your Order
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-full md:w-2/5 h-full bg-[#031c3f] bg-opacity-90 text-white font-Montserrat transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } z-20 flex flex-col`}
      >
        {/* Close Icon */}
        <div className="relative p-4">
          <FaTimes
            className="absolute top-4 right-4 text-3xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col items-center space-y-6 mt-10">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-xl text-white"
              onClick={toggleSidebar}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Track Your Order */}
        <div className="mt-auto mb-10 flex flex-col items-center">
          <TrackOrder />
          <span className="text-lg font-bold">Track Your Order</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
