import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "animate.css";

const DropdownMenu = ({ links, toggleDropdown }) => {
  // State to track hover state of each link
  const [isAnimated, setIsAnimated] = useState(
    new Array(links.length).fill(false)
  );

  // Handlers to toggle animation on hover for a specific link
  const handleMouseEnter = (index) => {
    const updatedAnimation = [...isAnimated];
    updatedAnimation[index] = true;
    setIsAnimated(updatedAnimation);
  };

  const handleMouseLeave = (index) => {
    const updatedAnimation = [...isAnimated];
    updatedAnimation[index] = false;
    setIsAnimated(updatedAnimation);
  };

  return (
    <div
      className="absolute bg-[#031c3f] text-white mt-2 py-2 px-4 rounded shadow-lg"
      onMouseLeave={toggleDropdown}
      style={{ minWidth: "150px" }}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          className="group px-2 py-2 border-b border-transparent hover:border-white transition-all duration-300 whitespace-nowrap uppercase flex items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          <div
            className="flex items-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Conditionally render the '+' icon with rotation and increased size */}
            {isAnimated[index] && (
              <span className={`mr-2 animate__animated animate__rotateIn `}>
                <FontAwesomeIcon icon={faPlus} className="text-lg font-bold" />
              </span>
            )}
            {link.text}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
