import React from "react";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import map from "../../../assets/map.png";
import GlobalNetworkIntroduction from "../components/GlobalIntroduction";
import SectionComponent from "../components/SectionComponent";
import world_logo from "../../../assets/world_logo_back.svg";
import world_logo_white from "../../../assets/world_logo_white.svg";

function GlobalNetworkScreen() {
  const countryDetails_Middle_East = [
    {
      name: "United Arab Emirates (UAE)",
      description:
        "The UAE is a significant market for United Freight Solutions, where we provide end-to-end logistics solutions, including air and sea freight services, warehousing, and distribution. Our extensive partnerships in the UAE allow us to connect businesses to both regional and global markets.",
      services: ["Logistics", "Freight", "Warehousing", " Global Distribution"],
      industries: ["Manufacturing", "Retail", "E-commerce", "Construction"],
    },
    {
      name: "Saudi Arabia",
      description:
        "Saudi Arabia is a growing market for Aeroflly Aviation, where we deliver advanced cargo management, capacity optimization, and airline representation services. Our operations help airlines and cargo carriers maximize efficiency and revenue in this vital aviation hub.",
      services: ["Aviation", "Cargo Management", "Airline Representation"],
      industries: ["Aviation", "Cargo", "Freight"],
    },
    // Add more countries here
  ];

  const countryDetails_Europe = [
    {
      name: "United Kingdom (UK)",
      description:
        "BrandPulse offers world-class branding, digital marketing, and creative solutions to businesses looking to enhance their market presence. United Freight Solutions also operates in the UK, offering efficient logistics and freight services, connecting Europe with the rest of the world.",
      services: ["Branding", "Digital Marketing", "Freight"],
      industries: ["Retail", "E-commerce", "Manufacturing", "Technology"],
    },
    {
      name: "Germany",
      description:
        "Germany serves as a key logistics hub for United Freight Solutions, offering integrated logistics solutions, including inland and international freight, warehousing, and supply chain optimization. Our logistics operations in Germany ensure that businesses can navigate the complexities of European trade routes with ease.",
      services: ["Logistics", "Freight", "Supply Chain Management"],
      industries: ["Manufacturing", "Automotive", "E-commerce"],
    },
  ];

  const countryDetails_North_America = [
    {
      name: "United States",
      description:
        "The United States is a crucial market for all of our services. United Freight Solutions provides comprehensive logistics solutions, including air and sea freight, warehousing, and supply chain management, while Aerofly Aviation delivers state-of-the-art aviation services. BrandPulse also offers branding and marketing strategies that help businesses thrive in a competitive market.",
      services: ["Logistics", "Aviation", "Branding", "Digital Marketing"],
      industries: ["Technology", "Retail", "Manufacturing", "E-commerce"],
    },
    {
      name: "Canada",
      description:
        "In Canada, United Freight Solutions supports businesses with efficient logistics services, connecting them to markets across the globe. Aerofly Aviation also plays a key role in Canada's aviation sector, offering tailored solutions to airlines for cargo management and capacity optimization.",
      services: ["Logistics", "Freight", "Aviation", "Cargo Management"],
      industries: ["Retail", "E-commerce", "Aerospace"],
    },
  ];

  const countryDetails_Africa = [
    {
      name: "South Africa",
      description:
        "South Africa is an emerging market for United Freight Solutions, offering logistics and freight management services to support businesses in their expansion across Africa and beyond. We also provide aviation services, helping airlines optimize their operations within the region.",
      services: ["Logistics", "Freight Management", "Aviation"],
      industries: ["Manufacturing", "Mining", "E-commerce"],
    },
    {
      name: "Germany",
      description:
        "Germany serves as a key logistics hub for United Freight Solutions, offering integrated logistics solutions, including inland and international freight, warehousing, and supply chain optimization. Our logistics operations in Germany ensure that businesses can navigate the complexities of European trade routes with ease.",
      services: ["Logistics", "Freight", "Supply Chain Management"],
      industries: ["Manufacturing", "Automotive", "E-commerce"],
    },
  ];

  const countryDetails_Oceania = [
    {
      name: "Australia",
      description:
        "Australia is a strategic region for KhmerGate's outbound travel services and BrandPulse's branding solutions. Additionally, United Freight Solutions operates a robust logistics network in Australia, connecting local businesses to the global market through our efficient freight and warehousing services.",
      services: ["Travel and Tourism", "Branding", "Logistics", "Freight"],
      industries: ["Retail", "E-commerce", "Manufacturing"],
    },
    {
      name: "Canada",
      description:
        "In Canada, United Freight Solutions supports businesses with efficient logistics services, connecting them to markets across the globe. Aerofly Aviation also plays a key role in Canada's aviation sector, offering tailored solutions to airlines for cargo management and capacity optimization.",
      services: ["Logistics", "Freight", "Aviation", "Cargo Management"],
      industries: ["Retail", "E-commerce", "Aerospace"],
    },
  ];

  const sectionDetails = [
    {
      backgroundColor: "#031c3f",
      textColor: "#f0f0f0",
      title: "Middle East",
      logo: world_logo_white,
      countryDetails: countryDetails_Middle_East,
    },
    {
      backgroundColor: "#f0f0f0",
      textColor: "#031c3f",
      title: "Europe",
      logo: world_logo,
      countryDetails: countryDetails_Europe,
    },
    {
      backgroundColor: "#031c3f",
      textColor: "#f0f0f0",
      title: "North America",
      logo: world_logo_white,
      countryDetails: countryDetails_North_America,
    },
    {
      backgroundColor: "#f0f0f0",
      textColor: "#031c3f",
      title: "Africa",
      logo: world_logo,
      countryDetails: countryDetails_Africa,
    },
    {
      backgroundColor: "#031c3f",
      textColor: "#f0f0f0",
      title: "Oceania",
      logo: world_logo_white,
      countryDetails: countryDetails_Oceania,
    },
  ];

  // Icon for the section (e.g., globe icon)
  const globeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.93 5.9c.07.16.11.34.11.53 0 .83-.67 1.5-1.5 1.5-.19 0-.37-.04-.53-.11l-2.17-.87V8.5c0-.55-.45-1-1-1s-1 .45-1 1v.79L7.68 9.5c-.16.07-.34.11-.53.11-.83 0-1.5-.67-1.5-1.5 0-.19.04-.37.11-.53L8 5.6V4c0-.55.45-1 1-1s1 .45 1 1v1.6l1.93.83 1.93-.83V4c0-.55.45-1 1-1s1 .45 1 1v1.6l1.68 2.9z"/>
</svg>
`;

  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <div className="bg-gray-200 overflow-hidden">
        {/* Image placed below the Navbar with a specific height and full width */}
        <img
          src={map}
          className="mt-12 w-full h-[650px] object-cover" // Adjust the height as needed
          alt="Map"
        />
      </div>
      <GlobalNetworkIntroduction />
      {sectionDetails.map((section, index) => (
        <SectionComponent key={index} {...section} />
      ))}
    </div>
  );
}

export default GlobalNetworkScreen;
