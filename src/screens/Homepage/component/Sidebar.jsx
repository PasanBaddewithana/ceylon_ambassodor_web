import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#031c3f] text-white p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close button inside the sidebar */}
        <button
          className="text-2xl absolute top-4 right-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          X
        </button>

        {/* Sidebar Menu */}
        <ul className="mt-8 space-y-4">
          <li>
            <a href="#office" className="block text-lg hover:text-gray-300">
              Office
            </a>
          </li>
          <li>
            <a href="#contact" className="block text-lg hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <a
              href="#track-order"
              className="block text-lg hover:text-gray-300"
            >
              Track Your Order
            </a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div
        className={`${isOpen ? "ml-64" : "ml-0"} transition-all duration-300`}
      >
        <div className="p-4">
          <h1 className="text-2xl">Main Content Area</h1>
          {/* Rest of your main content */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
