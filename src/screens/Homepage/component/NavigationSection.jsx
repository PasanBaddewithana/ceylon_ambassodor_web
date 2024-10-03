import React from "react";

const NavSection = () => {
  return (
    <section className="w-[85%] mx-auto mt-6 grid grid-cols-4 text-center  py-4 bg-white font-bold font-kollektif">
      <div className="relative group cursor-pointer border-b-2 border-[#031c3f] pb-[10px]">
        <span className="text-[#031c3f] font-Kollektif font-bold group-hover:text-yellow-500">
          UNITED FREIGHT SOLUTIONS
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2px] w-0 h-[3px] bg-[#031c3f] group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
      <div className="relative group cursor-pointer border-b-2 border-[#031c3f] pb-[10px]">
        <span className="text-[#031c3f] font-bold group-hover:text-yellow-500">
          KHMERGATE
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2px] w-0 h-[3px] bg-[#031c3f] group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
      <div className="relative group cursor-pointer border-b-2 border-[#031c3f] pb-[10px]">
        <span className="text-[#031c3f] font-bold group-hover:text-yellow-500">
          AEROFLY AVIATION
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2px] w-0 h-[3px] bg-[#031c3f] group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
      <div className="relative group cursor-pointer border-b-2 border-[#031c3f] pb-[10px]">
        <span className="text-[#031c3f] font-bold group-hover:text-yellow-500">
          BRANDPULSE
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2px] w-0 h-[3px] bg-[#031c3f] group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
      </div>
    </section>
  );
};

export default NavSection;
