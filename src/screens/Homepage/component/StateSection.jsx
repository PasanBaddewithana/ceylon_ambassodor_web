import React from "react";

const StatsSection = () => {
  const stats = [
    { label: "Delivered Packages", value: "1000+" },
    { label: "KM Per Year", value: "1000+" },
    { label: "Tones of Goods", value: "1000+" },
    { label: "Satisfied Clients", value: "1000+" },
  ];

  return (
    <div className="bg-customBlue py-12 font-MontserratMedium ">
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Vertical Line */}
            <div className="h-16 border-l-2 border-white"></div>
            {/* Stat Block */}
            <div className="text-center text-white">
              <p className="text-sm">{stat.label}</p>
              <p className="text-5xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
