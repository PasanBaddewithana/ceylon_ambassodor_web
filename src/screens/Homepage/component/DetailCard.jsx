import React from "react";

const DetailCard = ({
  image,
  topicTop,
  topicBottom,
  description,
  subTopic,
  subPoint1,
  subPointDes1,
  subPoint2,
  subPointDes2,
  subPoint3,
  subPointDes3,
  conclusion,

  imagePosition = "left", // Default position is 'left'
  buttoncolor = "#000", // Default button color
  buttonHoverColor = "#333", // Default hover color
  textColor = "black", // Default text color is black

}) => {
  return (
    <div className="flex flex-row items-center justify-center px-[110px] py-[70px] gap-10 font-Montserrat text-customBlue">
      {imagePosition === "left" ? (
        <>
          <div className="w-1/2 h-auto flex flex-col items-center justify-center">
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col items-start w-1/2 p-10">
            <p
              className="font-bold text-[30px] font-MontserratMedium"
              style={{ color: textColor }}
            >
              {topicTop}
            </p>
            <p
              className="font-bold text-[30px] mb-5"
              style={{ color: textColor }}
            >
              {topicBottom}
            </p>
            <p className="text-[13px] p-1" style={{ color: textColor }}>
              {description}
            </p>
            <div className="text-left">
              <p
                className="font-bold text-[13px] p-1"
                style={{ color: textColor }}
              >
                {subTopic}
              </p>
            </div>
            <p className="text-[13px] p-1" style={{ color: textColor }}>
              <span className="font-bold">{subPoint1}</span> {subPointDes1}
            </p>
            <p className="text-[13px] p-1" style={{ color: textColor }}>
              <span className="font-bold">{subPoint2}</span> {subPointDes2}
            </p>
            <p className="text-[13px] p-1" style={{ color: textColor }}>
              <span className="font-bold">{subPoint3}</span> {subPointDes3}
            </p>
            <p className="text-[13px] p-1" style={{ color: textColor }}>
              {conclusion}
            </p>
            <button
              className="px-4 py-2 text-white mt-5 transition duration-300"
              style={{
                backgroundColor: buttoncolor,
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = buttonHoverColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = buttoncolor)
              }
            >
              + Send Message
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-1/2 p-10">
            <p
              className="font-bold text-[30px] font-MontserratMedium"
              style={{ color: textColor }}
            >
              {topicTop}
            </p>
            <p
              className="font-bold text-[30px] mb-5"
              style={{ color: textColor }}
            >
              {topicBottom}
            </p>
            <p className="text-[13px] p-1" style={{ color: textColor }}>
              {description}
            </p>
            <div className="text-left">
              <p
                className="font-bold text-[13px] p-1"
                style={{ color: textColor }}
              >
                {subTopic}
              </p>
            </div>
            <p className="text-[13px] p-1" style={{ color: textColor }}>
              <span className="font-bold">{subPoint1}</span> {subPointDes1}
            </p>
            <p className="text-[13px] p-1" style={{ color: textColor }}>
              <span className="font-bold">{subPoint2}</span> {subPointDes2}
            </p>
            <p className="text-[13px] p-1" style={{ color: textColor }}>
              <span className="font-bold">{subPoint3}</span> {subPointDes3}
            </p>
            <p className="text-[13px] p-1" style={{ color: textColor }}>
              {conclusion}
            </p>
            <button
              className="px-4 py-2 text-white mt-5 transition duration-300 self-end"
              style={{
                backgroundColor: buttoncolor,
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = buttonHoverColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = buttoncolor)
              }
            >
              + Send Message
            </button>
          </div>
          <div className="w-1/2 h-auto flex flex-col items-center justify-center">
            <img src={image} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailCard;
