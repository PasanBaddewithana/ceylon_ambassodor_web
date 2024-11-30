import React from "react";
import DetailCard from "./DetailCard";
import image from "../../../assets/warehouse/transport-logistics-concept-5.jpg";
const WareHousingAndDistribution = () => {
  return (
    <>
      <DetailCard
        topicTop="Warehousing & Distribution"
        topicBottom="Storage Meets Strategy"
        description="At UFS, we don’t just store goods—we manage them strategically. Our Warehousing and Distribution services provide secure, efficient storage solutions tailored to meet your business’s unique needs. Whether you need temporary storage or a fully integrated distribution network, we have you covered.
        "
        subTopic="Our Warehousing Services Include:"
        subPoint1="Real-Time Inventory Management: "
        subPointDes1="Advanced tracking systems give you full visibility and control over your stock, ensuring efficient inventory management."
        subPoint2="Value-Added Services:"
        subPointDes2="We offer packaging, labeling, and pick-and-pack services to streamline your supply chain and reduce handling time."
        subPoint3="Strategically Located Warehouses: "
        subPointDes3="Our warehouses are positioned near key ports and transportation hubs, ensuring faster delivery times and reduced costs."
        conclusion="With UFS’s Warehousing, your goods are always ready for their next journey."
        image={image}
        imagePosition="left"
        buttoncolor="orange"
        buttonHoverColor="green"
        textColor="#031c3f"
      />
      <div className="px-4 flex items-center justify-center">
        <div className="w-11/12 h-[2px] bg-customBlue"></div>
      </div>
    </>
  );
};

export default WareHousingAndDistribution;
