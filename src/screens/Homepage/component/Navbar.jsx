import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as TrackOrder } from "../../../assets/track_order.svg";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import big_logo from "../../../assets/bigLogo.svg";

const Navbar = ({ changeColor = false }) => {
  const navigate = useNavigate();

  const [isContactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [isOfficeDropdownOpen, setOfficeDropdownOpen] = useState(false);
  const [isCompaniesDropdownOpen, setCompaniesDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // New state for sidebar

  const contactDropdownRef = useRef(null);
  const officeDropdownRef = useRef(null);
  const companiesDropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  const toggleContactDropdown = () => {
    setContactDropdownOpen(!isContactDropdownOpen);
  };

  const toggleOfficeDropdown = () => {
    setOfficeDropdownOpen(!isOfficeDropdownOpen);
  };

  const toggleCompaniesDropdown = () => {
    setCompaniesDropdownOpen(!isCompaniesDropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (
      contactDropdownRef.current &&
      !contactDropdownRef.current.contains(event.target)
    ) {
      setContactDropdownOpen(false);
    }
    if (
      officeDropdownRef.current &&
      !officeDropdownRef.current.contains(event.target)
    ) {
      setOfficeDropdownOpen(false);
    }
    if (
      companiesDropdownRef.current &&
      !companiesDropdownRef.current.contains(event.target)
    ) {
      setCompaniesDropdownOpen(false);
    }
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (
      isContactDropdownOpen ||
      isOfficeDropdownOpen ||
      isCompaniesDropdownOpen ||
      isSidebarOpen
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    isContactDropdownOpen,
    isOfficeDropdownOpen,
    isCompaniesDropdownOpen,
    isSidebarOpen,
  ]);

  const contactLinks = [
    { href: "/contact-us", text: "Contact Us" },
    { href: "/faq", text: "FAQ's" },
    { href: "/book-frieghts", text: "Book a Freight" },
  ];

  const officeLinks = [
    { href: "/global-network", text: "Global Network" },
    { href: "/our-clients", text: "Our clients" },
    { href: "/meet-crew", text: "Meet the crew" },
    { href: "/avilable-positions", text: "Available positions" },
    { href: "/blog", text: "Blog" },
  ];

  const companiesLinks = [

    { href: "/ufs", text: "United Freight Solutions" },

    { href: "/khmergate", text: "Khmergate" },

    { href: "/aerofly", text: "AEROFLY Aviation" },
    { href: "/brand-pulse", text: "Brandpulse" },
  ];

  return (
    <>
      <nav
        className={`bg-transparent mx-auto flex items-center border-b-2 ${
          changeColor ? "border-white" : "border-[#031c3f]"
        }
        ${changeColor ? "text-white" : "text-[#031c3f]"}
         absolute top-6 w-full z-10 font-kollektif font-bold text-sm`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div
            className={`w-[90%] flex justify-between items-center py-2 px-6 border-r-2 ${
              changeColor ? "border-white" : "border-[#031c3f]"
            }`}
          >
            {/* Logo */}
            <div className="items-center ml-4">
              <Logo />
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-14">
              <Link to="/" className="relative group text-base">
                Home
                <span className="absolute top-[-8px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
              </Link>
              <Link to="/about" className="relative group text-base ">
                About
                <span className="absolute top-[-8px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
              </Link>

              {/* Companies Dropdown */}
              <div className="relative group" ref={companiesDropdownRef}>
                <a
                  href="#"
                  className="relative group text-base "
                  onMouseEnter={toggleCompaniesDropdown}
                >
                  Companies
                  <span className="absolute top-[-11px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
                </a>

                {isCompaniesDropdownOpen && (
                  <DropdownMenu
                    links={companiesLinks}
                    toggleDropdown={toggleCompaniesDropdown}
                  />
                )}
              </div>

              {/* Office Dropdown */}
              <div className="relative group" ref={officeDropdownRef}>
                <a
                  href="#"
                  className="relative group text-base"
                  onMouseEnter={toggleOfficeDropdown}
                >
                  Office
                  <span className="absolute top-[-11px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
                </a>

                {isOfficeDropdownOpen && (
                  <DropdownMenu
                    links={officeLinks}
                    toggleDropdown={toggleOfficeDropdown}
                  />
                )}
              </div>

              {/* Contact Dropdown */}
              <div className="relative group" ref={contactDropdownRef}>
                <a
                  href="#"
                  className="relative group text-base "
                  onMouseEnter={toggleContactDropdown}
                >
                  Contact
                  <span className="absolute top-[-11px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
                </a>

                {isContactDropdownOpen && (
                  <DropdownMenu
                    links={contactLinks}
                    toggleDropdown={toggleContactDropdown}
                  />
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
                <span
                  className={`${
                    changeColor ? "text-white" : "text-[#031c3f]"
                  } font-bold`}
                >
                  Track Your Order
                </span>
              </div>

              {/* Hamburger Menu */}
              <div className="bg-[#031c3f] p-[6px]" onClick={toggleSidebar}>
                <FaBars className="text-white text-3xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-full md:w-2/5 h-full bg-[#031c3f] bg-opacity-90 text-white font-Montserrat transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } z-20 flex flex-col`}
      >
        {/* Close Icon */}
        <div className="relative p-4 mb-24">
          <FaTimes
            className="absolute top-4 right-4 text-3xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* Content Wrapper for vertical centering */}
        <div className="flex-grow flex items-center justify-center px-4 lg:ml-10">
          <div className="text-center w-full max-w-3xl">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src={big_logo} alt="Logo" className="w-80 h-auto" />
            </div>

            {/* Grid Layout for Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 text-left  mt-20">
              {/* Contact Info (Left) */}
              <div>
                <p className="text-sm">Support Center 24/7</p>
                <p className=" text-3xl font-bold mb-4 lg:mb-10">
                  +94 77 367 5054
                </p>
                <p className="text-sm">Support Center 24/7</p>
                <p className="mt-1">info@ceylonambassador.com</p>
              </div>

              {/* Address Info (Right) */}
              <div className="justify-self-end mr-4 lg:mr-12">
                <h2 className="text-sm text-left">Support Center 24/7</h2>
                <p className="mt-4 text-md text-left font-bold">
                  No 91/1st Floor,
                  <br />
                  Kandy Road,
                  <br />
                  Daluagama,
                  <br />
                  Kelaniya
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-10">
              <button
                className="bg-white text-customBlue font-kollektif px-8 py-3 text-lg font-semibold"
                onClick={() => navigate("/book-frieghts")} // Navigate to "/"
              >
                + Request a Freight
              </button>
            </div>

            {/* Footer Quote */}
            <div className="w-full text-center px-4 mt-4">
              <p className="text-xs text-gray-400">
                "Great brands are built on strong partnerships, and we're here
                to be yours."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
