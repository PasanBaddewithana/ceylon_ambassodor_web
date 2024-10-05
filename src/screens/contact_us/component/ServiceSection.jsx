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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-60 lg:gap-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-end h-full space-y-4"
            >
              <div>
                <img src={service.logo} alt={service.logo_text} />
                <div className="justify-center mt-4">
                  <p className="text-gray-300 mt-4 text-sm">
                    {service.description}
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-4 gap-4">
                  {/* Left column: phone number and email */}
                  <div className="col-span-3">
                    <h4 className="font-semibold">Support Center 24/7</h4>
                    <p className="text-2xl font-bold">+94 77 367 5054</p>
                    <p>info@ceylonambassador.com</p>
                  </div>

                  {/* Right column: address */}
                  <div className="col-span-1">
                    <p className="mt-2">
                      No 91/ 1st Floor, Kandy Road, Dalugama, Kelaniya
                    </p>
                  </div>
                </div>
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
