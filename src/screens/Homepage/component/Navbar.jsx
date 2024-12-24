import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar1";
import { ReactComponent as TrackOrder } from "../../../assets/track_order.svg";
import { Link } from "react-router-dom";

const Navbar = ({ changeColor = false }) => {
  const [isContactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [isOfficeDropdownOpen, setOfficeDropdownOpen] = useState(false);
  const [isCompaniesDropdownOpen, setCompaniesDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const contactDropdownRef = useRef(null);
  const officeDropdownRef = useRef(null);
  const companiesDropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  const contactTimeoutRef = useRef(null);
  const officeTimeoutRef = useRef(null);
  const companiesTimeoutRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const clearTimeoutRef = (ref) => {
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };

  const handleClickOutside = (event) => {
    if (
      contactDropdownRef.current &&
      !contactDropdownRef.current.contains(event.target)
    ) {
      clearTimeoutRef(contactTimeoutRef);
      setContactDropdownOpen(false);
    }
    if (
      officeDropdownRef.current &&
      !officeDropdownRef.current.contains(event.target)
    ) {
      clearTimeoutRef(officeTimeoutRef);
      setOfficeDropdownOpen(false);
    }
    if (
      companiesDropdownRef.current &&
      !companiesDropdownRef.current.contains(event.target)
    ) {
      clearTimeoutRef(companiesTimeoutRef);
      setCompaniesDropdownOpen(false);
    }
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const contactLinks = [
    { href: "/contact-us", text: "Contact Us" },
    { href: "/faq", text: "FAQ's" },
    { href: "/book-frieghts", text: "Book a Freight" },
  ];

  const officeLinks = [
    { href: "/global-network", text: "Global Network" },
    { href: "/our-clients", text: "Our Clients" },
    { href: "/meet-crew", text: "Meet the Crew" },
    { href: "/available-positions", text: "Available Positions" },
    { href: "/blog", text: "Blog" },
  ];

  const companiesLinks = [
    { href: "/ufs", text: "United Freight Solutions" },
    { href: "/aerofly", text: "AEROFLY Aviation" },
    { href: "/khmergate", text: "Khmergate" },
    { href: "/brand-pulse", text: "Brandpulse" },
  ];

  const renderDropdown = (isOpen, links) => (
    isOpen && (
      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {link.text}
          </Link>
        ))}
      </div>
    )
  );

  return (
    <>
      <nav
        className={`bg-transparent mx-auto flex items-center border-b-2 ${
          changeColor ? "border-white" : "border-[#031c3f]"
        } ${changeColor ? "text-white" : "text-[#031c3f]"} 
         absolute top-6 w-full z-10 font-kollektif font-bold text-sm h-16`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-[90%] flex justify-between items-center py-2 px-6 ">   
            {/* border-r-2 */}
            {/* Logo */}
            <Logo className="ml-4" />

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-10">
              <Link to="/" className="relative group text-base">
                Home
                <span className="absolute top-[-8px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/about" className="relative group text-base">
                About
                <span className="absolute top-[-8px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Companies Dropdown */}
              <div
                className="relative group"
                ref={companiesDropdownRef}
                onMouseEnter={() => {
                  clearTimeoutRef(companiesTimeoutRef);
                  setCompaniesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  companiesTimeoutRef.current = setTimeout(() => setCompaniesDropdownOpen(false), 100);
                }}
              >
                <button className="relative group text-base">Companies</button>
                {renderDropdown(isCompaniesDropdownOpen, companiesLinks)}
              </div>

              {/* Office Dropdown */}
              <div
                className="relative group"
                ref={officeDropdownRef}
                onMouseEnter={() => {
                  clearTimeoutRef(officeTimeoutRef);
                  setOfficeDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  officeTimeoutRef.current = setTimeout(() => setOfficeDropdownOpen(false), 100);
                }}
              >
                <button className="relative group text-base">Office</button>
                {renderDropdown(isOfficeDropdownOpen, officeLinks)}
              </div>

              {/* Contact Dropdown */}
              <div
                className="relative group"
                ref={contactDropdownRef}
                onMouseEnter={() => {
                  clearTimeoutRef(contactTimeoutRef);
                  setContactDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  contactTimeoutRef.current = setTimeout(() => setContactDropdownOpen(false), 100);
                }}
              >
                <button className="relative group text-base">Contact</button>
                {renderDropdown(isContactDropdownOpen, contactLinks)}
              </div>
            </div>
          </div>

          {/* Hamburger Menu - Always Visible */}
          <div className="flex items-center space-x-4">
            <TrackOrder className="hidden md:block" />
            <button
              className="bg-[#031c3f] p-2 text-white rounded"
              onClick={toggleSidebar}
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen}  toggleSidebar={toggleSidebar}/>
    </>
  );
};

export default Navbar;
