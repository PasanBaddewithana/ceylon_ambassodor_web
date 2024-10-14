// Card.jsx
import React, { useState } from "react";

const Card = ({ image, logo, title, description, details }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-full h-[450px] bg-cover bg-center overflow-hidden shadow-lg"
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Dark overlay on the card image */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Overlay when hovering */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          hover ? "bg-white/80" : "bg-transparent"
        }`}
      ></div>

      {/* Card content (Logo, Title, Description) */}
      <div className="relative z-10 flex flex-col justify-between h-full text-center px-4">
        {hover ? (
          <div className="flex flex-col justify-center h-full">
            <p className="text-lg text-white">{description}</p>
            {details && <p className="text-md mt-2 text-white">{details}</p>}
          </div>
        ) : (
          <>
            {/* Align logo to the bottom and reduce size */}
            <div className="absolute bottom-8 left-5 right-5 flex justify-center">
              <img src={logo} alt={title} className="h-16 w-48" />{" "}
              {/* Reduced size */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
