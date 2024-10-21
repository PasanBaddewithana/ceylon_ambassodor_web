import React from "react";
import DetailCard from "../DetailCard";
import girl from "../../../../assets/Khmergate/traveler-watching-sunset-ancient-temple-complex.jpg";
import strategic from "../../../../assets/strategic.jpg";
import sales from "../../../../assets/sales.jpg";
import focused from "../../../../assets/focused.jpg";
import airline from "../../../../assets/airline.jpg";

import KhmergateFifthHeader from "./KhmergateFifthHeader";

const KhmergateFifth = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <KhmergateFifthHeader />
      <DetailCard
        image={girl}
        topicTop="Discover Cambodia"
        topicBottom=" with Our Inbound Tours   "
        description="Cambodia is a land of ancient wonders, vibrant traditions, and awe-inspiring landscapes. With KhmerGate's Inbound Tours, you can dive deep into the country's heritage while enjoying tailored experiences that cater to every traveler. "
        subTopic="Our Inbound Tour Offerings: "
        subPoint1="Cultural Immersion: "
        subPointDes1="Discover the heart and soul of Cambodia through guided visits to historical temples, local villages, and traditional workshops, offering you a true taste of Cambodian life. "
        subPoint2="Adventure and Eco-Tourism: "
        subPointDes2="Hike through pristine jungles, explore remote islands, or engage in eco-friendly tours that highlight Cambodia's stunning natural environment and commitment to sustainability. "
        subPoint3="Historic Landmarks: "
        subPointDes3="

Walk through history as you explore the legendary Angkor Wat, the bustling streets of Phnom Penh, and the many hidden treasures spread across the country."
        conclusion="Whether you're an adventurer, a history buff, or simply curious about Cambodian culture, our inbound tours are designed to offer authentic, immersive experiences. "
        imagePosition="right"
        buttonHoverColor="#927b49"
        buttoncolor="#C7A764"
        textColor="#015B02"
      />
      <div className="h-[2px] w-3/4 bg-black"></div>
      <DetailCard
        image={sales}
        topicTop="Explore the World with"
        topicBottom=" Our Outbound Travel Packages "
        description="At KhmerGate. we don't just showcase Cambodia—we also take Cambodian travelers to global destinations. Our outbound travel packages are designed to make international travel simple, stress-free, and unforgettable. Whether you dream of wandering through Europe's grand cities or experiencing the natural wonders of Asia, our team crafts personalized itineraries that are as seamless as they are exciting. "
        subTopic="Our Outbound Travel Packages Include: "
        subPoint1="Exotic Destinations: "
        subPointDes1="
Explore vibrant cities, tranquil countryside, or breathtaking coastlines with tours that cater to both solo travelers and groups. "
        subPoint2="Tailored Itineraries:"
        subPointDes2=" Every trip is customized to suit your preferences, from selecting the best accommodations to planning excursions that match your interests. "
        subPoint3="Seamless Planning: "
        subPointDes3="
From flights and hotels to visas and travel insurance, we handle all the logistics so you can focus on enjoying your journey. "
        conclusion="With KhmerGate, traveling abroad has never been easier. Wherever your heart desires to go, we're here to take you there. "
        imagePosition="left"
        buttonHoverColor="#927b49"
        buttoncolor="#C7A764"
        textColor="#015B02"
      />
      <div className="h-[2px] w-3/4 bg-black"></div>
      <DetailCard
        image={airline}
        topicTop=""
        topicBottom=""
        description=""
        subTopic=""
        subPoint1=""
        subPointDes1=""
        subPoint2=""
        subPointDes2=""
        subPoint3=""
        subPointDes3=""
        conclusion=""
        imagePosition="right"
        buttonHoverColor="#927b49"
        buttoncolor="#C7A764"
        textColor="#015B02"
      />
      <div className="h-[2px] w-3/4 bg-black"></div>
      <DetailCard
        image={focused}
        topicTop=""
        topicBottom=""
        description=""
        subTopic=""
        subPoint1=""
        subPointDes1=""
        subPoint2=""
        subPointDes2=""
        subPoint3=""
        subPointDes3=""
        conclusion=""
        imagePosition="left"
        buttonHoverColor="#927b49"
        buttoncolor="#C7A764"
        textColor="#015B02"
      />
      <div className="h-[2px] w-3/4 bg-black"></div>
      <DetailCard
        image={strategic}
        topicTop=""
        topicBottom=""
        description=""
        subTopic=""
        subPoint1=""
        subPointDes1=""
        subPoint2=""
        subPointDes2=""
        subPoint3=""
        subPointDes3=""
        conclusion=""
        imagePosition="right"
        buttonHoverColor="#927b49"
        buttoncolor="#C7A764"
        textColor="#015B02"
      />
      <div className="h-[2px] w-3/4 bg-black"></div>
    </div>
  );
};

export default KhmergateFifth;
