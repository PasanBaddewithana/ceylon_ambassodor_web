// src/components/DropdownMenu.js
import React from "react";

const ContactDropDown = ({ toggleDropdown }) => {
  return (
    <div
      className="absolute bg-[#031c3f] top-full text-white  mt-2 py-2 px-4 rounded shadow-lg font-kollektif  font-bold text-sm"
      onClick={toggleDropdown}
    >
      <a
        href="#"
        className="block px-2 py-2 hover:border-b hover:border-white transition-all duration-300"
      >
        Contact Us
      </a>
      <a
        href="#"
        className="block px-2 py-2 hover:border-b hover:border-white transition-all duration-300"
      >
        FAQ's
      </a>
      <a
        href="#"
        className="block px-2 py-2 hover:border-b hover:border-white transition-all duration-300"
      >
        Book a Freight
      </a>
    </div>
  );
};

export default ContactDropDown;
