import React from "react";

const CartoonCard = ({ image, topic, content, alt, h }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[180px] gap-2 ">
      <img src={image} style={{ height: h }} alt={alt} />
      <p className="text-customBlue font-Montserrat font-bold text-center text-[14px]">
        {topic}
      </p>
      <p className="text-customBlue font-Montserrat text-center text-[8px]">
        {content}
      </p>
    </div>
  );
};

export default CartoonCard;
