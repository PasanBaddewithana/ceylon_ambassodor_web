// CardsGrid.jsx
import React from "react";
import Card from "./CardComponent";

// import images
import ufsImage from "../../../assets/card_images/UFS_card_image.jpg";
import aeroflyImage from "../../../assets/card_images/aerofly_card_iamge.jpg"; // Corrected the typo in 'aerofly_card_iamge'
import khmersImage from "../../../assets/card_images/khermgate_card_image.jpg"; // Assuming this path is correct
import brandpulseImage from "../../../assets/card_images/brand_pulse_card_image.jpg"; // Assuming this path is correct

//import logos
import ufs_logo from "../../../assets/ufs_logo.svg";
import aerofly_logo from "../../../assets/aerofly_logo.svg";
import khmers_logo from "../../../assets/khmergate.png";
import brandpulse_logo from "../../../assets/brandpulse_logo.svg";

const cardsData = [
  {
    image: ufsImage, // Actual image import for UFS
    logo: ufs_logo, // Actual logo path for UFS
    title: "UFS",
    description: "Connecting Globe",
  },
  {
    image: aeroflyImage, // Actual image import for Aerofly Aviation
    logo: aerofly_logo, // Actual logo path for Aerofly Aviation
    title: "Aerofly Aviation",
    description: "Seamless aviation services",
  },
  {
    image: khmersImage, // Actual image import for Khmers Gate
    logo: khmers_logo, // Actual logo path for Khmers Gate
    title: "Khmers Gate",
    description: "Curated travel experiences",
  },
  {
    image: brandpulseImage, // Actual image import for BrandPulse
    logo: brandpulse_logo, // Actual logo path for BrandPulse
    title: "BrandPulse",
    description: "Creative media production",
  },
];
const CardsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 my-3 mx-10">
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
