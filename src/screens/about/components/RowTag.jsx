import React from "react";
import ImageTag from "./ImageTag"; // Import the ImageTag component

const RowTag = ({ images, animationClass }) => {
  return (
    <div className={`flex ${animationClass}`}>
      {images.map((image, index) => (
        <ImageTag key={index} image={image} alt={`Row Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default RowTag;
