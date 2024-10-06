import React from "react";

// Import your icons or use a library like Font Awesome or React Icons
import {
  FaHandshake,
  FaAward,
  FaLightbulb,
  FaGlobeAmericas,
  FaUsers,
} from "react-icons/fa";

const ValuesSection = () => {
  return (
    <div className="bg-customBlue text-white py-16 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">Our Values</h2>
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaHandshake className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Integrity</h3>
          <p className="mt-2">
            We conduct business with the highest ethical standards, always doing
            what is right for our clients, partners, and communities.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaAward className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Excellence</h3>
          <p className="mt-2">
            We are driven by a relentless pursuit of quality in every project,
            ensuring that our services are second to none.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaLightbulb className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Innovation</h3>
          <p className="mt-2">
            We thrive on creativity and forward-thinking, constantly seeking new
            ways to enhance and revolutionize our services.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaGlobeAmericas className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Sustainability</h3>
          <p className="mt-2">
            We are committed to responsible business practices that protect the
            environment and contribute positively to society.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaUsers className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Customer-Centricity</h3>
          <p className="mt-2">
            Our clients are at the core of everything we do, and we strive to
            build long-lasting relationships by exceeding their expectations.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          THE CEYLON AMBASSADOR EXPERIENCE
        </h2>
        <p className="max-w-prose mx-auto">
          What makes us unique is not just our breadth of expertise, but our
          passion for what we do. From our dedicated team of industry experts to
          our cutting-edge technology and global reach, Ceylon Ambassador is
          your trusted partner in achieving greatness. We don’t just offer
          services; we offer a journey—one of growth, innovation, and success.
        </p>
      </div>
    </div>
  );
};

export default ValuesSection;
