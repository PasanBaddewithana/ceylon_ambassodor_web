import React from "react";
import DetailCard from "./DetailCard";
import image from "../../../assets/warehouse/transport-logistics-products-2.jpg";
const GlobalConsollidation = () => {
  return (
    <DetailCard
      topicTop="Global Consolidation"
      topicBottom="Efficiency in Motion"
      description="At United Freight Solutions, we understand that logistics can be complex, especially when you're managing shipments from multiple sources. That’s why we offer Global Consolidation services that simplify the process, bringing together shipments from different suppliers into one efficient delivery. Our goal is to reduce costs, streamline your supply chain, and ensure your cargo reaches its destination quickly and reliably."
      subTopic="Our Global Consolidation Services Include:"
      subPoint1="Multi-Country Consolidation:  "
      subPointDes1="We combine shipments from multiple countries into a single streamlined delivery, cutting down on shipping costs and ensuring efficient movement across borders."
      subPoint2="Buyer’s Consolidation:"
      subPointDes2="Tailored for businesses managing shipments for multiple buyers, we consolidate goods into one delivery, reducing handling times and optimizing your supply chain for cost-effectiveness."
      subPoint3="Cross-Docking Services: "
      subPointDes3="Our quick cross-docking process moves consolidated goods from one transport mode to another, minimizing time in transit and getting your products to market faster."
      conclusion="Whatever your logistics needs, UFS’s Global Consolidation services offer a smarter, more cost-effective way to move goods across the globe, ensuring efficiency and reliability every step of the way."
      image={image}
      imagePosition="Right"
      buttoncolor="orange"
      textColor="#031c3f"
    />
  );
};

export default GlobalConsollidation;
