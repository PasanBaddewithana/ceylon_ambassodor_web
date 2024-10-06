// Card.jsx
import React, { useState } from "react";

const Card = ({ image, logo, title, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-full h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Overlay when hovering */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          hover ? "bg-white/80" : "bg-transparent"
        }`}
      ></div>

      {/* Card content (Logo, Title, Description) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img src={logo} alt={title} className="h-20 mb-4" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {hover && <p className="text-lg">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
