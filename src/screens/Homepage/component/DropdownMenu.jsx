import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ links, toggleDropdown }) => {
  return (
    <div
      className="absolute bg-[#031c3f] text-white mt-2 py-2 px-4 rounded shadow-lg"
      onClick={toggleDropdown}
      style={{ minWidth: "150px" }}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          className="block px-2 py-2 border-b border-transparent hover:border-white transition-all duration-300 whitespace-nowrap uppercase"
          style={{ whiteSpace: "nowrap" }}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
