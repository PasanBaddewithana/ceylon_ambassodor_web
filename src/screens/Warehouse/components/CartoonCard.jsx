import React from "react";

const CartoonCard = ({
  image,
  topic,
  content,
  alt,
  h = "150px",
  textcolor = "blue",
}) => {
  const textColorClass = `text-${textcolor}`;

  return (
    <div className="flex flex-col items-center justify-between w-[200px] h-[300px] gap-2">
      <img
        src={image}
        alt={alt}
        className="object-contain w-full"
        style={{ maxHeight: h }}
      />
      <p
        className={`mt-4 font-bold font-MontserratSemiBold text-center text-[16px] ${textColorClass} min-h-[40px]`}
      >
        {topic}
      </p>
      <p
        className={`text-center font-Montserrat text-xs ${textColorClass} min-h-[60px] line-clamp-3`}
      >
        {content}
      </p>
    </div>
  );
};

export default CartoonCard;
