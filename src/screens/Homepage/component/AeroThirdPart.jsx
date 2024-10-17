import React from "react";
import CartoonCard from "./CartoonCard";
import plane from "../../../assets/plane.svg";
import planeEarth from "../../../assets/planeEarth.svg";
import planeWindow from "../../../assets/planeWindow.svg";
import handPlane from "../../../assets/handPlane.svg";
import message from "../../../assets/message.svg";

const AeroThirdPart = () => {
  return (
    <div className="w-full h-[400px] flex flex-row items-center justify-center p-8 gap-20">
      <CartoonCard
        image={plane}
        h="180px"
        alt="plane"
        topic="Cargo Capacity Management"
        content="Maximize your revenue with Aerofly Aviation's optimized cargo solutions, ensuring every flight operates at full capacity."
      />
      <CartoonCard
        image={planeEarth}
        h="150px"
        alt="newspaper"
        topic="General Sales and Services Agent (GSSA)"
        content="Drive sales and expand your reach with our comprehensive GSSA services, offering local expertise and end-to-end support in global markets."
      />
      <CartoonCard
        image={planeWindow}
        h="160px"
        alt="bulb"
        topic="Airline Representation"
        content="Establish and grow your presence in new regions with Aerofly Aviation's expert airline representation services, managing sales, marketing , and operations on your behalf."
      />
      <CartoonCard
        image={message}
        h="130px"
        alt="speaker"
        topic="Cutomer Service Solutions"
        content="Provide world-class customer support with our 24/7 service solutions, ensuring seamless communication and satisfaction throughout the client journey."
      />
      <CartoonCard
        image={handPlane}
        h="140px"
        alt="slips"
        topic="Strategic Partnership Development"
        content="Unlock new growth opportunities and streamline operations with Aerofly Aviation's tailored partnership strategies, designed to enhance collaboration and profitability"
      />
    </div>
  );
};

export default AeroThirdPart;
