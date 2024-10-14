import React from "react";

// Placeholder for the icons, replace these with your actual image paths or icons
import airFreightIcon from "../../../assets/home/plane_lg.png";
import seaFreightIcon from "../../../assets/home/ship_logo.png";
import inlandFreightIcon from "../../../assets/home/lorryLogo.png";
import warehousingIcon from "../../../assets/home/warehousing.png";
import globalConsolidationIcon from "../../../assets/home/global_logo.png";

const ServicesComponent = () => {
  const services = [
    {
      icon: airFreightIcon,
      title: "Air Freight",
      description:
        "Delivering fast, secure, and reliable air cargo solutions with global reach and real-time tracking.",
    },
    {
      icon: seaFreightIcon,
      title: "Sea Freight",
      description:
        "Providing cost-effective and flexible ocean freight services for all shipment sizes and types.",
    },
    {
      icon: inlandFreightIcon,
      title: "Inland Freight",
      description:
        "Offering tailored and secure inland freight solutions, including temperature-controlled and custom handling options.",
    },
    {
      icon: warehousingIcon,
      title: "Warehousing",
      description:
        "Advanced warehousing solutions with real-time inventory management and value-added services.",
    },
    {
      icon: globalConsolidationIcon,
      title: "Global Consolidation",
      description:
        "Efficient multi-country consolidation and distribution services, leveraging strategic locations.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              {/* Service Icon */}
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className="w-16 h-16 mx-auto mb-4"
              />
              {/* Service Title */}
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              {/* Service Description */}
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
