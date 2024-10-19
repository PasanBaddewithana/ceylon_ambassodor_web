import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { FaBars } from "react-icons/fa";
import { ReactComponent as TrackOrder } from "../../../assets/track_order.svg";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isContactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [isOfficeDropdownOpen, setOfficeDropdownOpen] = useState(false);
  const [isCompaniesDropdownOpen, setCompaniesDropdownOpen] = useState(false);

  const contactDropdownRef = useRef(null);
  const officeDropdownRef = useRef(null);
  const companiesDropdownRef = useRef(null);

  const toggleContactDropdown = () => {
    setContactDropdownOpen(!isContactDropdownOpen);
  };

  const toggleOfficeDropdown = () => {
    setOfficeDropdownOpen(!isOfficeDropdownOpen);
  };

  const toggleCompaniesDropdown = () => {
    setCompaniesDropdownOpen(!isCompaniesDropdownOpen);
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
  };

  useEffect(() => {
    if (
      isContactDropdownOpen ||
      isOfficeDropdownOpen ||
      isCompaniesDropdownOpen
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isContactDropdownOpen, isOfficeDropdownOpen, isCompaniesDropdownOpen]);

  const contactLinks = [
    { href: "/contact-us", text: "Contact Us" },
    { href: "/faq", text: "FAQ's" },
    { href: "#", text: "Book a Freight" },
  ];

  const officeLinks = [
    { href: "/global-network", text: "Global Network" },
    { href: "/our-clients", text: "Our clients" },
    { href: "/meet-crew", text: "Meet the crew" },
    { href: "/avilable-positions", text: "Available positions" },
    { href: "/blog", text: "Blog" },
  ];

  const companiesLinks = [
    { href: "#", text: "United Freight Solutions" },
    { href: "#", text: "Khmergate" },
    { href: "/aerofly", text: "AEROFLY Aviation" },
    { href: "/brand-pulse", text: "Brandpulse" },
  ];

  return (
    <nav className="bg-transparent mx-auto flex items-center border-b-2 border-[#031c3f] text-[#031c3f] absolute  top-6 w-full z-10 font-kollektif font-bold text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-[90%] flex justify-between items-center py-2 px-6 border-r-2 border-[#031c3f]">
          {/* Logo */}
          <div className="items-center ml-4">
            <Logo />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-14">
            <Link to="/" className="relative group text-base">
              Home
              <span className="absolute top-[-4px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
            </Link>
            <Link to="/about" className="relative group text-base ">
              About
              <span className="absolute top-[-4px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
            </Link>

            {/* Companies Dropdown */}
            <div className="relative group" ref={companiesDropdownRef}>
              <a
                href="#"
                className="relative group text-base "
                onClick={toggleCompaniesDropdown}
              >
                Companies
                <span className="absolute top-[-4px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
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
                onClick={toggleOfficeDropdown}
              >
                Office
                <span className="absolute top-[-4px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
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
                onClick={toggleContactDropdown}
              >
                Contact
                <span className="absolute top-[-4px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-[120%]"></span>
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
              <span className="text-[#031c3f] font-bold">Track Your Order</span>
            </div>

            {/* Hamburger Menu */}
            <div className="bg-[#031c3f] p-[6px]">
              <FaBars className="text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
