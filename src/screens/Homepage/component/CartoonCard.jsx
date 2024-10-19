import React from "react";

const CartoonCard = ({ image, topic, content, alt, h }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[200px] gap-2 ">
      <img src={image} style={{ height: h }} alt={alt} />
      <p className="text-black font-bold text-center text-[14px]">{topic}</p>
      <p className="text-black text-center text-[14px]">{content}</p>
    </div>
  );
};

export default CartoonCard;
