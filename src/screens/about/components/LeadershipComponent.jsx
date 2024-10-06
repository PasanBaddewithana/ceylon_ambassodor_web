// LeadershipComponent.jsx
import React from "react";
import PersonCard from "./PersonCard";

// import images
import person from "../../../assets/neon_person.jpg"; // Replace with actual image path

const LeadershipComponent = () => {
  return (
    <section className="bg-customBlue text-white py-12">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <img
            src="path_to_logo"
            alt="Logo"
            className="h-12 mb-6 mx-auto lg:mx-0"
          />
          <h2 className="text-4xl font-bold mb-4">Leadership & Expertise</h2>
          <p className="text-lg leading-relaxed">
            Our leadership team brings decades of industry expertise, guiding
            Ceylon Ambassador with a vision that balances innovation with
            sustainability. Each member of our executive team is dedicated to
            the success of our subsidiaries and the satisfaction of our clients.
            Together, we work to build lasting partnerships, foster growth, and
            continuously adapt to the changing needs of global markets.
          </p>
          <img
            src="path_to_ceylon_logo"
            alt="Ceylon Ambassador"
            className="h-16 mt-8 mx-auto lg:mx-0"
          />
        </div>

        {/* Right Cards */}
        <div className="flex flex-col lg:flex-row lg:w-1/2 justify-around items-center space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Card 1 */}
          <PersonCard
            image={person} // Replace with actual image path
            title="Your Global Logistics"
            subtitle="Partner for Seamless"
          />
          {/* Card 2 */}
          <PersonCard
            image={person} // Replace with actual image path
            title="Your Global Logistics"
            subtitle="Partner for Seamless"
          />
        </div>
      </div>
    </section>
  );
};

export default LeadershipComponent;
