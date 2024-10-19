import React from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Joel Yamaha",
    role: "Developer",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image source
  },
  {
    name: "Mary Simens",
    role: "Manager",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image source
  },
  {
    name: "Harley Russle",
    role: "Co Founder",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image source
  },
  {
    name: "Jenna Olsen",
    role: "Web Designer",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image source
  },
];

const MeetThePros = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-3xl font-extrabold mb-8 lg:ml-1 text-left font-MontserratMedium">
          Meet the pros
        </h2>
        <div className="flex justify-between gap-12">
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
    </div>
  );
};

export default MeetThePros;
