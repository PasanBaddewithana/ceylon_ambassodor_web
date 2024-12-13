// LeadershipComponent.jsx
import React from "react";
import PersonCard from "./PersonCard";

// import images
import person from "../../../assets/glow_geometric.png"; // Replace with actual image path
import logo from "../../../assets/white_logo_2.svg"; // Replace with actual image path
import quota from "../../../assets/quata.png"; // Replace with actual image path
import person1 from "../../../assets/Sranga.png";
import person2 from "../../../assets/Jeewan.png";
const LeadershipComponent = () => {
  return (
    <section className="bg-customBlue text-white py-12">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start justify-between mt-12">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mt-24 lg:ml-16 mb-12 lg:mb-0 font-Montserrat">
          <img src={quota} alt="Logo" className="h-12 mb-6 mx-auto lg:mx-0" />
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Leadership & Expertise</h2>
          <p className="text-sm leading-relaxed" data-aos="fade-up" data-aos-duration="1000">
            Our leadership team brings decades of industry expertise, guiding
            Ceylon Ambassador with a vision that balances innovation with
            sustainability. Each member of our executive team is dedicated to
            the success of our subsidiaries and the satisfaction of our clients.
            Together, we work to build lasting partnerships, foster growth, and
            continuously adapt to the changing needs of global markets.
          </p>
          {/* Center the logo */}
          <img
            src={logo}
            alt="Ceylon Ambassador"
            className="h-16 mt-8 mx-auto" // Centered with mx-auto
            
          />
        </div>

        {/* Right Cards */}
        <div className="flex flex-col lg:flex-row lg:w-1/2 justify-around items-center space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Card 1 */}
          <PersonCard
            image={person1} // Replace with actual image path
            title="Suranga Tissera"
            subtitle=" Managing Director"
          />
          {/* Card 2 */}
          <PersonCard
            image={person2} // Replace with actual image path
            title="Jeewan M. Hettigamage"
            subtitle=" Director"
          />
        </div>
      </div>
    </section>
  );
};

export default LeadershipComponent;
