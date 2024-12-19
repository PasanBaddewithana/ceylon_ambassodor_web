import React from "react";

const ImageTag = ({ image, alt }) => {
  return (
    <div className="w-60 h-50 p-0">
      <img src={image} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
};

export default ImageTag;
