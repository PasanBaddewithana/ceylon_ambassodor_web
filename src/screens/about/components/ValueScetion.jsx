import React from "react";
import {
  FaHandshake,
  FaAward,
  FaLightbulb,
  FaGlobeAmericas,
  FaUsers,
} from "react-icons/fa";

//Import images *----

const ValuesSection = () => {
  return (
    <div className="bg-[#002147] text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Our Values</h2>
      <div className="max-w-screen-2xl ml-5 mr-5 flex flex-wrap justify-between">
        <div className="flex flex-col font-MontserratMedium items-center w-full md:w-1/5 mb-6">
          <FaHandshake className="text-5xl mb-4" />
          <p className="mt-2 mb-3 text-xs w-full">
            We conduct business with the highest ethical standards, always doing
            what is right for our clients, partners.
          </p>
          <h3 className="text-xl font-bold">Integrity</h3>
        </div>
        <div className="flex flex-col font-MontserratMedium items-center w-full md:w-1/5 mb-6">
          <FaAward className="text-5xl mb-4" />
          <p className="mt-2 mb-3 text-xs w-full">
            We are driven by a relentless pursuit of quality in every project,
            ensuring that our services are second to none.
          </p>
          <h3 className="text-xl font-bold">Excellence</h3>
        </div>
        <div className="flex flex-col font-MontserratMedium items-center w-full md:w-1/5 mb-6">
          <FaLightbulb className="text-5xl mb-4" />
          <p className="mt-2 mb-3 text-xs w-full">
            We thrive on creativity and forward-thinking, constantly seeking new
            ways to enhance and revolutionize our services.
          </p>
          <h3 className="text-xl font-bold">Innovation</h3>
        </div>
        <div className="flex flex-col font-MontserratMedium items-center w-full md:w-1/5 mb-6">
          <FaGlobeAmericas className="text-5xl mb-4" />
          <p className="mt-2 mb-3 text-xs w-full">
            We are committed to responsible business practices that protect the
            environment and contribute positively to society.
          </p>
          <h3 className="text-xl font-bold">Sustainability</h3>
        </div>
        <div className="flex flex-col font-MontserratMedium items-center w-full md:w-1/5 mb-6">
          <FaUsers className="text-5xl mb-4" />
          <p className="mt-2 mb-3 text-xs w-full">
            Our clients are at the core of everything we do, and we strive to
            build long-lasting relationships by exceeding their expectations.
          </p>
          <h3 className="text-xl font-bold">Customer-Centricity</h3>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
