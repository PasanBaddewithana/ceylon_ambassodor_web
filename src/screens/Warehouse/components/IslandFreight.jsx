import React from "react";
import DetailCard from "./DetailCard";
import image from "../../../assets/warehouse/transport-logistics-products-2.jpg";
const IslansFreight = () => {
  return (
    <DetailCard
      topicTop="Inland Freight"
      topicBottom="Seamless Solutions from Port to Door"
      description="Transporting goods over land is a crucial part of the supply chain, and UFS’s Inland Freight services guarantee that your shipments make the final leg of their journey smoothly and securely. Whether it’s across cities or countries, we provide reliable ground transportation for all types of cargo."
      subTopic="Our Inland Freight Services Include:"
      subPoint1="LTL & FTL Solutions: "
      subPointDes1="Less-than-truckload (LTL) for smaller shipments or full-truckload (FTL) for larger loads, ensuring efficiency at every scale."
      subPoint2="Specialized Transport: "
      subPointDes2="We handle specialized cargo, including temperature-controlled, hazardous, and oversized goods, with safety and precision."
      subPoint3="Optimized Routing: "
      subPointDes3="Using cutting-edge technology, we plan the fastest, most cost-effective routes, ensuring your cargo arrives on time."
      conclusion="From port to your customer’s door, UFS ensures your inland logistics run like clockwork."
      image={image}
      imagePosition="Right"
      buttoncolor="orange"
      textColor="#031c3f"
    />
  );
};

export default IslansFreight;
