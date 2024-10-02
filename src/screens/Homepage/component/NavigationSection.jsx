// src/components/NavSection.js
import React from "react";

const NavSection = () => {
  return (
    <section className="grid grid-cols-4 text-center py-4 bg-white">
      <div className="hover:text-yellow-500 cursor-pointer">
        UNITED FREIGHT SOLUTIONS
      </div>
      <div className="hover:text-yellow-500 cursor-pointer">KHMERGATE</div>
      <div className="hover:text-yellow-500 cursor-pointer">
        AEROFLY AVIATION
      </div>
      <div className="hover:text-yellow-500 cursor-pointer">BRANDPULSE</div>
    </section>
  );
};

export default NavSection;
