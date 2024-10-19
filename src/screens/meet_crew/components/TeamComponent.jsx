import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const teamMembers = [
  { name: "Joel Yamaha", role: "Developer", img: "path_to_joel_image" },
  { name: "Mary Simens", role: "Manager", img: "path_to_mary_image" },
  { name: "Harley Russle", role: "Co Founder", img: "path_to_harley_image" },
  { name: "Nick Turner", role: "Developer", img: "path_to_nick_image" },
  { name: "Anna Nikson", role: "Manager", img: "path_to_anna_image" },
  { name: "Lana Kook", role: "Co Founder", img: "path_to_lana_image" },
  { name: "Jenna Olsen", role: "Web Designer", img: "path_to_jenna_image" },
  { name: "Rachel Gray", role: "Web Designer", img: "path_to_rachel_image" },
];

const TeamComponent = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Meet the pros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 font-Montserrat">
        {teamMembers.map((member, index) => (
          <Link
            key={index}
            to={`/profile/${member.name}`} // Navigate to the dynamic profile page
            className="flex items-center space-x-4" // Flexbox to align items horizontally
          >
            {/* Image Section */}
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover"
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
