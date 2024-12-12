import CartoonCard from "./CartoonCard";
import Plane from "../../../assets/warehouse/Layer 33.svg";
import Ship from "../../../assets/warehouse/Layer 34.svg";
import Truck from "../../../assets/warehouse/Layer 35.svg";
import Train from "../../../assets/warehouse/Layer 36.svg";
import World from "../../../assets/warehouse/Layer 37.svg";

const IconsLayer = () => {
  return (
    <div className="w-full h-[400px] flex flex-row items-center justify-center p-8 gap-20">
      <CartoonCard
        image={Plane}
        h="100px"
        alt="plane"
        topic="Air Freight"
        content="Delivering fast, secure, and reliable air cargo solutions with global reach and real-time tracking."
        data-aos="fade-up" data-aos-duration="1000"
      />
      <CartoonCard
        image={Ship}
        alt="ship"
        topic="Sea Freight"
        h="100px"
        content="Providing cost-effective and flexible ocean freight services for all shipment sizes and types."
        data-aos="fade-up" data-aos-duration="1000"
      />
      <CartoonCard
        image={Truck}
        alt="Truck"
        topic="Inland Freight"
        h="100px"
        content="Offering tailored and secure inland freight solutions, including temperature-controlled and custom handling options."
        data-aos="fade-up" data-aos-duration="1000"
      />
      <CartoonCard
        image={Train}
        alt="Train"
        topic="Warehousing"
        h="100px"
        content="Advanced warehousing solutions with real-time inventory management and value-added services."
        data-aos="fade-up" data-aos-duration="1000"
      />
      <CartoonCard
        image={World}
        h="100px"
        alt="slips"
        topic="Global Consolidation"
        content="Efficient multi-country consolidation and distribution services, leveraging strategic locations."
        data-aos="fade-up" data-aos-duration="1000"
      />
    </div>
  );
};

export default IconsLayer;
