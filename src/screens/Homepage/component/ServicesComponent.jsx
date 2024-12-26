import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
 import IconsLayer from "../../Warehouse/components/IconsLayer"; import KhmergateThird from "../../../screens/Homepage/component/Khmergate/KhmergateThird";
 import AeroThirdPart from "../../../screens/Homepage/component/AeroThirdPart";
 import ThirdPart from "../../../screens/Homepage/component/ThirdPart";
 import CartoonCard from "./CartoonCard";
 import Plane from "../../../assets/warehouse/Layer 33.svg";
import Ship from "../../../assets/warehouse/Layer 34.svg";
import Truck from "../../../assets/warehouse/Layer 35.svg";
import Train from "../../../assets/warehouse/Layer 36.svg";
import World from "../../../assets/warehouse/Layer 37.svg";

import plane from "../../../assets/plane.svg";
import planeEarth from "../../../assets/planeEarth.svg";
import planeWindow from "../../../assets/planeWindow.svg";
import handPlane from "../../../assets/handPlane.svg";
import message from "../../../assets/message.svg";

import lorry from "../../../assets/Khmergate/logo/lorry.svg";
import pass from "../../../assets/Khmergate/logo/pass.svg";
import ballon from "../../../assets/Khmergate/logo/balloon.svg";
import camera from "../../../assets/Khmergate/logo/camera.svg";
import bag from "../../../assets/Khmergate/logo/bag.svg";

import slips from "../../../assets/slips.png";
import robot from "../../../assets/robot.png";
import speaker from "../../../assets/speaker.png";
import newspaper from "../../../assets/newspaper.png";
import bulb from "../../../assets/bulb.png";

const ServicesComponent = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 888px)" });
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollSpeed = isMobile ? 1 : 0.5;
    let position = 0;
    let animationFrameId;

    const scrollContent = () => {
      position -= scrollSpeed;
      
      const dimension = isMobile 
        ? container.scrollHeight / 2 
        : container.scrollWidth / 2;

      // Reset position when reaching halfway
      if (Math.abs(position) >= dimension) {
        position = 0;
      }

      container.style.transform = isMobile
        ? `translateY(${position}px)`
        : `translateX(${position}px)`;

      animationFrameId = requestAnimationFrame(scrollContent);
    };

    scrollContent();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile]);

  const CardsRow = () => (
    <div className={`flex ${isMobile ? 'flex-col gap-8' : 'flex-row items-center gap-8'}`}>
      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-flow-col'} gap-8 p-8`}>
        <CartoonCard
          image={Plane}
          h="100px"
          alt="plane"
          topic="Air Freight"
          content="Delivering fast, secure, and reliable air cargo solutions with global reach and real-time tracking."
        />
        <CartoonCard
          image={Ship}
          alt="ship"
          topic="Sea Freight"
          h="100px"
          content="Providing cost-effective and flexible ocean freight services for all shipment sizes and types."
        />
        <CartoonCard
          image={Truck}
          alt="Truck"
          topic="Inland Freight"
          h="100px"
          content="Offering tailored and secure inland freight solutions, including temperature-controlled and custom handling options."
        />
         
      <CartoonCard
        image={Train}
        alt="Train"
        topic="Warehousing"
        h="100px"
        content="Advanced warehousing solutions with real-time inventory management and value-added services."
       
      />
      <CartoonCard
        image={World}
        h="100px"
        alt="slips"
        topic="Global Consolidation"
        content="Efficient multi-country consolidation and distribution services, leveraging strategic locations."
        
      />
    
    <CartoonCard
        image={handPlane}
        h="100px"
        alt="slips"
        topic="Air Charter Solutions"
        content="We specialise in providing tailored 
air charter services designed to meet 
your unique travel and cargo needs."
      />

      <CartoonCard
        image={plane}
        h="100px"
        alt="plane"
        topic="Cargo Capacity Management"
        content="Maximize your revenue with Aerofly Aviation's optimized cargo solutions, ensuring every flight operates at full capacity."
      />
      <CartoonCard
        image={planeEarth}
        h="100px"
        alt="newspaper"
        topic="General Sales and Services Agent (GSSA)"
        content="Drive sales and expand your reach with our comprehensive GSSA services, offering local expertise and end-to-end support in global markets."
      />
      <CartoonCard
        image={planeWindow}
        h="100px"
        alt="bulb"
        topic="Airline Representation"
        content="Establish and grow your presence in new regions with Aerofly Aviation's expert airline representation services, managing sales, marketing , and operations on your behalf."
      />
      <CartoonCard
        image={message}
        h="100px"
        alt="speaker"
        topic="Cutomer Service Solutions"
        content="Provide world-class customer support with our 24/7 service solutions, ensuring seamless communication and satisfaction throughout the client journey."
      />

<CartoonCard
        image={pass}
        textcolor="#015B02"
        h="100px"
        alt="newspaper"
        topic="Air Ticketing"
        content="Explore exciting global destinations with customized travel packages, designed specifically for Cambodian travelers seeking seamless international experiences."
      />
      <CartoonCard
        image={lorry}
        textcolor="#015B02"
        h="100px"
        alt="plane"
        topic="Inbound Tours"
        content="Immerse yourself in Cambodia's rich culture, historical landmarks, and natural beauty with our expertly guided tours, offering deep cultural and adventure experiences. "
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
      <CartoonCard
        image={robot}
        h="100px"
        alt="robot"
        topic="Brand Strategy"
        content="We help define your brand's positioning and create a cohesive identity that resonates with your audience,from logo design to brand storytelling."
      />
      <CartoonCard
        image={newspaper}
        h="100px"
        alt="newspaper"
        topic="Digital Marketing"
        content="Our digital marketing solutions increase your brand's visibility through SEO,SEM,social media campaigns, and targeted email marketing to engage and grow your audience."
      />
      <CartoonCard
        image={bulb}
        h="100px"
        alt="bulb"
        topic="Creative Design"
        content="We design compelling visuals, from websites to packaging, that bring your brand to life and ensure a consisten, memorable customer experience."
      />
      <CartoonCard
        image={speaker}
        h="100px"
        alt="speaker"
        topic="Content Marketing"
        content="Our content marketing services create valuable, relevant conent that establishes your brand as a thought leader and fosters strong connections with your audience"
      />
      <CartoonCard
        image={slips}
        h="100px"
        alt="slips"
        topic="Integrated Marketing Campaigns"
        content="We develop and execute multichannel marketing campaigns that amplify your brand's message and drive measurable results across both digital and traditional platforms"
      />
      </div>
    </div>
  );

  return (
    <div className="bg-white py-1 font-Montserrat">
      <div 
        className="relative overflow-hidden" 
        style={{ 
          height: isMobile ? '100vh' : '400px',
          width: '100%'
        }}
      >
        <div 
          ref={containerRef}
          className="absolute"
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            willChange: 'transform',
            width: isMobile ? '100%' : 'auto',
            height: isMobile ? 'auto' : '100%'
          }}
        >
          <CardsRow />
          <CardsRow /> {/* Duplicate for seamless loop */}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;