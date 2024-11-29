import React from "react";
import DetailCard from "./DetailCard";
import image from "../../../assets/warehouse/transport-logistics-products-2.jpg";
const SeaFreight = () => {
  return (
    <DetailCard
      topicTop="Sea Freight"
      topicBottom="Navigating Global Trade with Confidence"
      description="For businesses with high-volume shipments, UFS’s Sea Freight services provide a cost-effective and scalable solution for transporting goods across oceans. Whether it’s a full container or part of one, we make sure your cargo sails smoothly to its destination."
      subTopic="Our Sea Freight Services Include:"
      subPoint1="FCL & LCL Options:"
      subPointDes1="Full container load (FCL) or less-than-container load (LCL) to match your shipment size and budget."
      subPoint2="Port-to-Port or Door-to-Door:"
      subPointDes2="We offer flexible solutions, whether your shipment requires port-to-port or a full door-to-door delivery."
      subPoint3="Global Carrier Network:"
      subPointDes3="Partnering with the world’s leading ocean carriers, we ensure reliable and timely shipping on major trade routes."
      conclusion="With UFS, your sea freight sails smoothly from origin to destination.
      "
      image={image}
      imagePosition="left"
      buttoncolor="orange"
      textColor="#031c3f"
    />
  );
};

export default SeaFreight;
