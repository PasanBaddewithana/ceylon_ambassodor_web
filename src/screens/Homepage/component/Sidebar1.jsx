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
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
        style={{ zIndex: 100 }}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full bg-[#031c3f] text-white transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:w-1/3 w-full`}
        style={{ zIndex: 101 }}
      >
        {/* Close button */}
        <button 
          onClick={toggleSidebar} 
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full"
        >
          <FaTimes className="text-2xl" />
        </button>

        <nav className="flex flex-col space-y-4 p-4 mt-16">
          <Link to="/" onClick={toggleSidebar} className="text-lg hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link to="/about" onClick={toggleSidebar} className="text-lg hover:text-gray-300 transition-colors">
            About
          </Link>
          
          <div>
            <button 
              className="text-lg flex justify-between items-center w-full hover:text-gray-300 transition-colors" 
              onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}
            >
              Companies {isCompaniesOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div className={`mt-2 space-y-2 transition-all duration-200 ${isCompaniesOpen ? 'block' : 'hidden'}`}>
              {companiesLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.href} 
                  onClick={toggleSidebar} 
                  className="block text-lg ml-4 hover:text-gray-300 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <button 
              className="text-lg flex justify-between items-center w-full hover:text-gray-300 transition-colors" 
              onClick={() => setIsOfficeOpen(!isOfficeOpen)}
            >
              Office {isOfficeOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div className={`mt-2 space-y-2 transition-all duration-200 ${isOfficeOpen ? 'block' : 'hidden'}`}>
              {officeLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.href} 
                  onClick={toggleSidebar} 
                  className="block text-lg ml-4 hover:text-gray-300 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <button 
              className="text-lg flex justify-between items-center w-full hover:text-gray-300 transition-colors" 
              onClick={() => setIsContactOpen(!isContactOpen)}
            >
              Contact {isContactOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div className={`mt-2 space-y-2 transition-all duration-200 ${isContactOpen ? 'block' : 'hidden'}`}>
              {contactLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.href} 
                  onClick={toggleSidebar} 
                  className="block text-lg ml-4 hover:text-gray-300 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;