// CardsGrid.jsx
import React from "react";
import Card from "./Card";

// Sample data for the cards
const cardsData = [
  {
    image: "path_to_ufs_image", // Replace with the actual image path
    logo: "path_to_ufs_logo", // Replace with the actual logo path
    title: "UFS",
    description: "Connecting Globe",
  },
  {
    image: "path_to_aerofly_image",
    logo: "path_to_aerofly_logo",
    title: "Aerofly Aviation",
    description: "Seamless aviation services",
  },
  {
    image: "path_to_khmers_image",
    logo: "path_to_khmers_logo",
    title: "Khmers Gate",
    description: "Curated travel experiences",
  },
  {
    image: "path_to_brandpulse_image",
    logo: "path_to_brandpulse_logo",
    title: "BrandPulse",
    description: "Creative media production",
  },
];

const CardsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          logo={card.logo}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
