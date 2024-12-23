import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as TrackOrder } from "../../../assets/track_order.svg";
import DropdownMenu from "./DropdownMenu";
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

  const dropdownWithDelay = (
    ref,
    isOpen,
    setOpen,
    timeoutRef,
    links,
    buttonText
  ) => (
    <div
      className="relative group"
      ref={ref}
      onMouseEnter={() => {
        clearTimeoutRef(timeoutRef);
        setOpen(true);
      }}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => setOpen(false), 100); // 300ms delay
      }}
    >
      <button className="relative group text-base">{buttonText}</button>
      {isOpen && <DropdownMenu links={links} />}
    </div>
  );

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

  const menuItems = [
    { type: 'link', href: '/', text: 'Home' },
    { type: 'link', href: '/about', text: 'About' },
    { 
      type: 'dropdown',
      text: 'Companies',
      dropdownLinks: companiesLinks
    },
    {
      type: 'dropdown',
      text: 'Office',
      dropdownLinks: officeLinks
    },
    {
      type: 'dropdown',
      text: 'Contact',
      dropdownLinks: contactLinks
    }
  ];

  return (
    <>
      <nav
        className={`bg-transparent mx-auto flex items-center border-b-2 ${
          changeColor ? "border-white" : "border-[#031c3f]"
        } ${changeColor ? "text-white" : "text-[#031c3f]"} 
         absolute top-6 w-full z-10 font-kollektif font-bold text-sm`}
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
              {dropdownWithDelay(
                companiesDropdownRef,
                isCompaniesDropdownOpen,
                setCompaniesDropdownOpen,
                companiesTimeoutRef,
                companiesLinks,
                "Companies"
              )}

              {/* Office Dropdown */}
              {dropdownWithDelay(
                officeDropdownRef,
                isOfficeDropdownOpen,
                setOfficeDropdownOpen,
                officeTimeoutRef,
                officeLinks,
                "Office"
              )}

              {/* Contact Dropdown */}
              {dropdownWithDelay(
                contactDropdownRef,
                isContactDropdownOpen,
                setContactDropdownOpen,
                contactTimeoutRef,
                contactLinks,
                "Contact"
              )}
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

      {/* Sidebar for Mobile View */}
      <DropdownMenu 
      isOpen={isSidebarOpen}
      onClose={() => setSidebarOpen(false)}
      menuItems={menuItems}
    />
    </>
  );
};

export default Navbar;
