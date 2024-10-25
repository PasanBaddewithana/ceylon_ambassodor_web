import React from "react";
import CartoonCard from "../CartoonCard";
import lorry from "../../../../assets/Khmergate/logo/lorry.svg";
import pass from "../../../../assets/Khmergate/logo/pass.svg";
import ballon from "../../../../assets/Khmergate/logo/balloon.svg";
import camera from "../../../../assets/Khmergate/logo/camera.svg";
import bag from "../../../../assets/Khmergate/logo/bag.svg";

const KhmergateThird = () => {
  return (
    <div className="w-full h-[400px] flex flex-row items-center justify-center p-8 gap-20 text-[#015B02]">
      <CartoonCard
        image={lorry}
        textcolor="#015B02"
        h="100px"
        alt="plane"
        topic="Inbound Tours"
        content="Immerse yourself in Cambodia's rich culture, historical landmarks, and natural beauty with our expertly guided tours, offering deep cultural and adventure experiences. "
      />
      <CartoonCard
        image={pass}
        textcolor="#015B02"
        h="100px"
        alt="newspaper"
        topic="Outbound Travel Packages"
        content="Explore exciting global destinations with customized travel packages, designed specifically for Cambodian travelers seeking seamless international experiences."
      />
      <CartoonCard
        textcolor="#015B02"
        image={camera}
        h="100px"
        alt="bulb"
        topic="Event Management and MICE"
        content="From coporate meetings to destination weddings, our full-service event management ensures flawless execution and memorable experiences in Cambodia's most stunning locations."
      />
      <CartoonCard
        textcolor="#015B02"
        image={ballon}
        h="100px"
        alt="speaker"
        topic="Special Interest Tours"
        content="Pursue your passions with specialized tours that focus on culinary delights, photography, spiritual retreats, and more, curated to offer meaningful and personalized journeys."
      />
      <CartoonCard
        textcolor="#015B02"
        image={bag}
        h="100px"
        alt="slips"
        topic="Custom Travel Solutions"
        content="Efficient mult-country consolidation and distribution services, leveraging strategic locations."
      />
    </div>
  );
};

export default KhmergateThird;
