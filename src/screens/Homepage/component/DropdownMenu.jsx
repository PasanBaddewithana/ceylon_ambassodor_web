import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose, menuItems }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-10 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 w-full md:w-2/5 h-full bg-[#031c3f] text-white transform transition-transform duration-300 ease-in-out z-20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-white"
        >
          <FaTimes />
        </button>
        
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item, index) => (
            <div key={index} className="w-full px-8 text-center">
              {item.type === 'link' ? (
                <button
                  onClick={() => handleNavigation(item.href)}
                  className="text-xl font-bold w-full hover:text-[#c3a05f] transition-colors"
                >
                  {item.text}
                </button>
              ) : (
                <details className="w-full group justify-items-center">
                  <summary className="text-xl font-bold cursor-pointer hover:text-[#c3a05f] transition-colors">
                    {item.text}
                  </summary>
                  <div className="mt-4 ml-4 space-y-3 ">
                    {item.dropdownLinks?.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavigation(link.href)}
                        className="block w-full text-left hover:text-[#c3a05f] transition-colors"
                      >
                        {link.text}
                      </button>
                    ))}
                  </div>
                </details>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;