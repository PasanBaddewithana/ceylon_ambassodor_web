import CartoonCard from "./CartoonCard1";
import Plane from "../../../assets/warehouse/Layer 33.svg";
import Ship from "../../../assets/warehouse/Layer 34.svg";
import Truck from "../../../assets/warehouse/Layer 35.svg";
import Train from "../../../assets/warehouse/Layer 36.svg";
import World from "../../../assets/warehouse/Layer 37.svg";

const IconsLayer = () => {
  return (
    <div className="w-full h-300 flex flex-wrap md:flex-row flex-col items-center justify-center p-4 gap-1 md:gap-4">
      <CartoonCard
        image={Plane}
        h="100px"
        alt="plane"
        topic="Air Freight"
        content="Delivering fast, secure, and reliable air cargo solutions with global reach and real-time tracking."
      />
      <CartoonCard
        image={Ship}
        h="100px"
        alt="ship"
        topic="Sea Freight"
        content="Providing cost-effective and flexible ocean freight services for all shipment sizes and types."
      />
      <CartoonCard
        image={Truck}
        h="100px"
        alt="Truck"
        topic="Inland Freight"
        content="Offering tailored and secure inland freight solutions, including temperature-controlled and custom handling options."
      />
      <CartoonCard
        image={Train}
        h="100px"
        alt="Train"
        topic="Warehousing"
        content="Advanced warehousing solutions with real-time inventory management and value-added services."
      />
      <CartoonCard
        image={World}
        h="100px"
        alt="slips"
        topic="Global Consolidation"
        content="Efficient multi-country consolidation and distribution services, leveraging strategic locations."
      />
    </div>
  );
};

export default IconsLayer;
