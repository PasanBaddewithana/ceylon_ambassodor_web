// src/components/DropdownMenu.js
import React from "react";

const ContactDropDown = ({ toggleDropdown }) => {
  return (
    <div
      className="absolute bg-[#031c3f] text-white top-full mt-2 py-2 px-4 rounded shadow-lg"
      onClick={toggleDropdown}
    >
      <a href="#" className="block px-4 py-2 hover:bg-yellow-500">
        Contact Us
      </a>
      <a href="#" className="block px-4 py-2 hover:bg-yellow-500">
        FAQ's
      </a>
      <a href="#" className="block px-4 py-2 hover:bg-yellow-500">
        Book a Freight
      </a>
    </div>
  );
};

export default ContactDropDown;
