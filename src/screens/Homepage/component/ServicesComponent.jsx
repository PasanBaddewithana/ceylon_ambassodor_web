import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
// Import your components
import IconsLayer from "../../Warehouse/components/IconsLayer";
import KhmergateThird from "../../../screens/Homepage/component/Khmergate/KhmergateThird";
import AeroThirdPart from "../../../screens/Homepage/component/AeroThirdPart";
import ThirdPart from "../../../screens/Homepage/component/ThirdPart";

const ServicesComponent = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 888px)" });
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isMobile) {
      const container = containerRef.current;
      let scrollSpeed = 0.25; // Adjust speed
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
    }
  }, [isMobile]);

  return (
    <div className="bg-white py-12 font-Montserrat overflow-hidden">
      {isMobile ? (
        // Show only on mobile
        <div className="train-container" ref={containerRef}>
          <div className="train-content flex">
          <IconsLayer />
        
        </div>
        </div>
      ) : (
        // Show only on larger screens
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
      )}
    </div>
  );
};

export default ServicesComponent;
