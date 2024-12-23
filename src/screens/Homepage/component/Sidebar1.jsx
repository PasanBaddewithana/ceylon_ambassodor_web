import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
  const [isOfficeOpen, setIsOfficeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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

  return (
    <div className={`fixed top-0 right-0 h-full bg-[#031c3f] text-white z-20 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:w-1/3 w-full`}>
      <button onClick={toggleSidebar} className="p-4">
        <FaTimes className="text-2xl" />
      </button>
      <nav className="flex flex-col space-y-4 p-4">
        <Link to="/" onClick={toggleSidebar} className="text-lg">Home</Link>
        <Link to="/about" onClick={toggleSidebar} className="text-lg">About</Link>
        
        <div>
          <button className="text-lg flex justify-between items-center w-full" onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}>
            Companies {isCompaniesOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isCompaniesOpen && companiesLinks.map((link, index) => (
            <Link key={index} to={link.href} onClick={toggleSidebar} className="block text-lg ml-4">{link.text}</Link>
          ))}
        </div>
        
        <div>
          <button className="text-lg flex justify-between items-center w-full" onClick={() => setIsOfficeOpen(!isOfficeOpen)}>
            Office {isOfficeOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isOfficeOpen && officeLinks.map((link, index) => (
            <Link key={index} to={link.href} onClick={toggleSidebar} className="block text-lg ml-4">{link.text}</Link>
          ))}
        </div>
        
        <div>
          <button className="text-lg flex justify-between items-center w-full" onClick={() => setIsContactOpen(!isContactOpen)}>
            Contact {isContactOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isContactOpen && contactLinks.map((link, index) => (
            <Link key={index} to={link.href} onClick={toggleSidebar} className="block text-lg ml-4">{link.text}</Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;