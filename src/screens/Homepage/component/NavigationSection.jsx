import React from "react";

const NavSection = ({ setActiveSection }) => {
  return (
    <section className="w-[90%] sm:w-[85%] mx-auto mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 text-center py-4 bg-white font-bold font-kollektif">
      {[
        { name: "UNITED FREIGHT SOLUTIONS", value: "LogisticsPage" },
        { name: "AEROFLY AVIATION", value: "AeroLogisticsPage" },
        { name: "KHMERGATE", value: "KhemerLogisticsPage" },
        { name: "BRANDPULSE", value: "BrandpulseLogisticsPage" },
      ].map((item, index) => (
        <div
          key={index}
          className="relative group cursor-pointer border-b-2 border-[#031c3f] pb-2 sm:pb-[10px]"
          onClick={() => setActiveSection(item.value)}
        >
          <span className="text-[#031c3f] font-Kollektif font-bold group-hover:text-yellow-500 text-sm sm:text-base">
            {item.name}
          </span>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2px] w-0 h-[3px] bg-[#031c3f] group-hover:w-[80%] group-hover:bg-[#c3a05f] transition-all duration-300"></div>
        </div>
      ))}
    </section>
  );
};

export default NavSection;
