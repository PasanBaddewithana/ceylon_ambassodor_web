// Card.jsx
import React from "react";

const PersonCard = ({ image, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-cover rounded-full"
      />

      {/* Title and Subtitle */}
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-white text-sm">{subtitle}</p>
    </div>
  );
};

export default PersonCard;
