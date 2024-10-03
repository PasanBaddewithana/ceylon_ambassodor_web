// src/components/DropdownMenu.js
import React from "react";

const DropdownMenu = ({ links, toggleDropdown }) => {
  return (
    <div
      className="absolute bg-[#031c3f] text-white mt-2 py-2 px-4 rounded shadow-lg"
      onClick={toggleDropdown}
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="block px-2 py-2 border-b border-transparent hover:border-white transition-all duration-300"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default DropdownMenu;
