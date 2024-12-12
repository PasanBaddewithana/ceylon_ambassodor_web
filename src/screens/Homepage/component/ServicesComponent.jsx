import React from "react";

// Import your components
import IconsLayer from "../../Warehouse/components/IconsLayer";
import KhmergateThird from '../../../screens/Homepage/component/Khmergate/KhmergateThird';
import AeroThirdPart from '../../../screens/Homepage/component/AeroThirdPart';
import ThirdPart from '../../../screens/Homepage/component/ThirdPart';

const ServicesComponent = () => {
  return (
    <div className="bg-white py-12 font-Montserrat overflow-hidden">
      <div className="train-container flex space-x-8 animate-train-home">
        <IconsLayer />
        <KhmergateThird />
        <AeroThirdPart />
        <ThirdPart />
       
      </div>
    </div>
  );
};

export default ServicesComponent;
