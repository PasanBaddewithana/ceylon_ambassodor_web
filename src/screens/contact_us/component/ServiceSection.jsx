import React from "react";
import ufs_logo from "../../../assets/ufs_logo.svg";
import aerofly_logo from "../../../assets/aerofly_logo.svg";
import khmergate_logo from "../../../assets/khmergate.png";
import brandpulse_logo from "../../../assets/brandpulse_logo.svg";

const ServicesSection = () => {
  const services = [
    {
      logo: ufs_logo,
      logo_text: "UFS",
      title: "Logistics and Supply Chain Management",
      description:
        "Through United Freight Solutions (UFS), we manage air, sea, and inland freight, as well as warehousing and global consolidation, across major trade routes in Asia, Europe, and the Americas.",
    },
    {
      logo: aerofly_logo,
      logo_text: "Aerofly Aviation",
      title: "Aviation Services",
      description:
        "Aerofly Aviation operates globally, offering expert cargo management, airline representation, and customer service solutions that help airlines optimize operations worldwide.",
    },
    {
      logo: khmergate_logo,
      logo_text: "KhmerGate",
      title: "Travel and Tourism",
      description:
        "KhmerGate is your gateway to both Southeast Asia and global travel experiences, offering inbound and outbound tours and event management services that cater to an international audience.",
    },
    {
      logo: brandpulse_logo,
      logo_text: "BrandPulse",
      title: "Branding and Marketing",
      description:
        "BrandPulse combines strategic insight with creative execution to deliver impactful branding and marketing solutions in Sri Lanka, Cambodia, and across the globe.",
    },
  ];

  return (
    <div className="bg-[#031c3f] text-white py-12 px-4 sm:px-6 lg:px-8 font-Montserrat">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start space-y-4">
              <div className="">
                <img
                  src={service.logo}
                  alt={service.logo_text}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <div className="mt-6">
                <h4 className="font-semibold">Support Center 24/7</h4>
                <p className="text-2xl font-bold">+94 77 367 5054</p>
                <p>info@ceylonambassador.com</p>
                <p className="mt-2">
                  No 91/ 1st Floor, Kandy Road, Dalugama, Kelaniya
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 italic">
            "Your vision, our expertise – together, we build tomorrow."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
