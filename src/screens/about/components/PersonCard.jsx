// Card.jsx
import React from "react";

const PersonCard = ({ image, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center mx-5 space-y-4 font-Montserrat ">
      {/* Image */}
      <img src={image} alt={title} className="w-[300px] h-[300px] object-cover" />

      {/* Title and Subtitle */}
      <div className="space-y-0">
        <h3 className="text-white font text-lg font-bold">{title}</h3>
        <p className="text-white  text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default PersonCard;
