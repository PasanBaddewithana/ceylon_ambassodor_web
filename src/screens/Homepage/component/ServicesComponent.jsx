import React, { useEffect, useRef } from "react";
// Import your components
import IconsLayer from "../../Warehouse/components/IconsLayer";
import KhmergateThird from '../../../screens/Homepage/component/Khmergate/KhmergateThird';
import AeroThirdPart from '../../../screens/Homepage/component/AeroThirdPart';
import ThirdPart from '../../../screens/Homepage/component/ThirdPart';

const ServicesComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollSpeed = 1; // Adjust speed
    let position = 0;

    const scrollContent = () => {
      position -= scrollSpeed;
      if (Math.abs(position) >= container.scrollWidth / 2) {
        position = 0; // Reset position to create an endless loop
      }
      container.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(scrollContent);
    };

    scrollContent();
  }, []);

  return (
    <div className="bg-white py-12 font-Montserrat overflow-hidden">
      <div className="train-container" ref={containerRef}>
        <div className="train-content flex">
          <IconsLayer />
          <AeroThirdPart />
          <KhmergateThird />
          <ThirdPart />
          {/* Duplicate content for seamless effect */}
          <IconsLayer />
          <AeroThirdPart />
          <KhmergateThird />
          <ThirdPart />
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;