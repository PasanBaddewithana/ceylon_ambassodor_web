// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <img src="/logo.png" alt="Ceylon Ambassador" className="h-8" />
            <h1 className="font-bold text-xl">Ceylon Ambassador</h1>
          </div>
          <div>
            <span className="text-sm">+94 77 777 7777</span>
            <span className="ml-4 text-sm">info@ceylonambassador.com</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#home" className="hover:text-yellow-500">
            HOME
          </a>
          <a href="#about" className="hover:text-yellow-500">
            ABOUT
          </a>
          <a href="#companies" className="hover:text-yellow-500">
            COMPANIES
          </a>
          <a href="#office" className="hover:text-yellow-500">
            OFFICE
          </a>
          <a href="#contact" className="hover:text-yellow-500">
            CONTACT
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-xs">Track Your Order</button>
          <button className="p-2 bg-yellow-400 rounded-md md:hidden">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
