import React from "react";
import CartoonCard from "../CartoonCard";
import plane from "../../../../assets/plane.svg";
import planeEarth from "../../../../assets/planeEarth.svg";
import planeWindow from "../../../../assets/planeWindow.svg";
import handPlane from "../../../../assets/handPlane.svg";
import message from "../../../../assets/message.svg";

const KhmergateThird = () => {
  return (
    <div className="w-full h-[400px] flex flex-row items-center justify-center p-8 gap-20 text-[#015B02]">
      <CartoonCard
        image={plane}
        textcolor="#015B02"
        h="180px"
        alt="plane"
        topic="Inbound Tours"
        content="Immerse yourself in Cambodia's rich culture, historical landmarks, and natural beauty with our expertly guided tours, offering deep cultural and adventure experiences. "
      />
      <CartoonCard
        image={planeEarth}
        textcolor="#015B02"
        h="150px"
        alt="newspaper"
        topic="Outbound Travel Packages"
        content="Explore exciting global destinations with customized travel packages, designed specifically for Cambodian travelers seeking seamless international experiences."
      />
      <CartoonCard
        textcolor="#015B02"
        image={planeWindow}
        h="160px"
        alt="bulb"
        topic="Event Management and MICE"
        content="From coporate meetings to destination weddings, our full-service event management ensures flawless execution and memorable experiences in Cambodia's most stunning locations."
      />
      <CartoonCard
        textcolor="#015B02"
        image={message}
        h="130px"
        alt="speaker"
        topic="Special Interest Tours"
        content="Pursue your passions with specialized tours that focus on culinary delights, photography, spiritual retreats, and more, curated to offer meaningful and personalized journeys."
      />
      <CartoonCard
        textcolor="#015B02"
        image={handPlane}
        h="140px"
        alt="slips"
        topic="Custom Travel Solutions"
        content="Efficient mult-country consolidation and distribution services, leveraging strategic locations."
      />
    </div>
  );
};

export default KhmergateThird;
