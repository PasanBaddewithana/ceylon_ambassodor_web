import React from "react";

const CartoonCard = ({
  image,
  topic,
  content,
  alt,
  h,
  textcolor = "black",
}) => {
  // Create a utility class for text color
  const textColorClass = `text-${textcolor}`;

  return (
    <div className="flex flex-col items-center justify-center w-[200px] gap-2">
      <img src={image} style={{ height: h }} alt={alt} />
      <p
        className={`mt-4 font-bold font-MontserratSemiBold text-center text-[16px] ${textColorClass}`}
      >
        {topic}
      </p>
      <p className={`text-center font-Montserrat text-xs ${textColorClass}`}>
        {content}
      </p>
    </div>
  );
};

export default CartoonCard;
