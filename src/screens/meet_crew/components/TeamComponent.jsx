import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import team1 from "../../../assets/Kushan.png";
import team2 from "../../../assets/Makara.png";
import team3 from "../../../assets/Apeksha.png";

// Corrected teamMembers array with actual image imports
const teamMembers = [
  { name: "Kushan Senabandu", role: "Head Of Business", img: team1 },
  { name: "Makara Heng", role: "Business Manager", img: team2 },
  { name: "Apeksha Somarathne", role: "Head of Finance", img: team3 },
];

const TeamComponent = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Meet the Pros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-Montserrat">
        {teamMembers.map((member, index) => (
          <Link
            key={index}
            to={`/profile/${member.name.replace(/\s+/g, "-").toLowerCase()}`} // Dynamic URL slug
            className="flex items-center space-x-4" // Flexbox to align items horizontally
          >
            {/* Image Section */}
            <img
              src={member.img}
              alt={member.name}
              className="w-36 h-36 rounded-full object-cover"
            />

            {/* Text Section */}
            <div className="text-left">
              <p className="text-sm text-gray-500">{member.role}</p>
              <h3 className="text-lg font-medium">{member.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamComponent;
