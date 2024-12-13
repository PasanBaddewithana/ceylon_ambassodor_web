import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    { label: "Delivered Shipments", value: 2156 },
    { label: "Globally Connected Agents", value: 362 },
    { label: "Tones of Goods", value: 6236 },
    { label: "Satisfied Clients", value: 71 },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-customBlue py-12 font-MontserratMedium"
    >
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Vertical Line */}
            <div className="h-16 border-l-2 border-white"></div>
            {/* Stat Block */}
            <div className="text-center text-white">
              <p className="text-sm">{stat.label}</p>
              <p className="text-5xl font-bold">
                {isVisible ? <CountUp end={stat.value} duration={2} /> : "0"}+
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
