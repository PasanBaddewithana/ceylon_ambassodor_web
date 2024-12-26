import React from "react";

const CartoonCard2 = ({
  image,
  topic,
  content,
  alt,
  h = "150px",
  textcolor = "black",
}) => {
  const textColorClass = `text-${textcolor}`;

  return (
    <div className="relative flex flex-col items-center justify-between w-[250px] h-[350px] bg-white  p-2">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={alt}
          className="object-contain w-full"
          style={{ maxHeight: h }}
        />
      </div>
      <div className="absolute top-[160px] flex flex-col items-center justify-center w-full">
        <p
          className={`mt-1 mb-1 font-bold font-MontserratSemiBold text-center text-[16px] ${textColorClass} min-h-[30px] w-[700px]`}
        >
          {topic}
        </p>
        <p
          className={`mt-1 text-center font-Montserrat text-xs ${textColorClass} min-h-[50px]`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default CartoonCard2;