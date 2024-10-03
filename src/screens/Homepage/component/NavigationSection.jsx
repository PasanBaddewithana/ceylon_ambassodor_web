import React from "react";

const NavSection = () => {
  return (
    <section className="w-[85%] mx-auto mt-10 grid grid-cols-4 text-center py-4 bg-white ">
      <div className="relative group cursor-pointer">
        <span className="text-[#031c3f] font-bold group-hover:text-yellow-500">
          UNITED FREIGHT SOLUTIONS
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-[2px] bg-[#031c3f] group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
      <div className="relative group cursor-pointer">
        <span className="text-[#031c3f] font-bold group-hover:text-yellow-500">
          KHMERGATE
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-[2px] bg-[#031c3f] group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
      <div className="relative group cursor-pointer">
        <span className="text-[#031c3f] font-bold group-hover:text-yellow-500">
          AEROFLY AVIATION
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-[2px] bg-[#031c3f] group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
      <div className="relative group cursor-pointer">
        <span className="text-[#031c3f] font-bold group-hover:text-yellow-500">
          BRANDPULSE
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-[2px] bg-[#031c3f] group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
    </section>
  );
};

export default NavSection;
