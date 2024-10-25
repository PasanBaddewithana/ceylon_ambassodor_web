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
  imagePosition = "left",
  buttoncolor,
  buttonHoverColor,
}) => {
  return (
    <>
      <div className="flex flex-row items-center justify-center px-[110px] py-[70px] gap-10">
        {imagePosition === "left" ? (
          <>
            <div className="w-1/2 h-[500px] flex flex-col items-center justify-center">
              <img src={image} alt="detail" className="" />
            </div>
            <div className="flex flex-col items-start w-1/2 p-10">
              <p className="font-bold text-[30px]">{topicTop}</p>
              <p className="font-bold text-[30px] mb-5">{topicBottom}</p>
              <p className="text-[13px] p-1">{description}</p>
              <p className="font-bold text-[13px] p-1">{subTopic}</p>
              <p className="text-[13px] p-1">
                <span className="font-bold">{subPoint1}</span> {subPointDes1}
              </p>
              <p className="text-[13px] p-1">
                <span className="font-bold">{subPoint2}</span> {subPointDes2}
              </p>
              <p className="text-[13px] p-1">
                <span className="font-bold">{subPoint3}</span> {subPointDes3}
              </p>
              <p className="text-[13px] p-1">{conclusion}</p>
              <button
                style={{ backgroundColor: buttoncolor }}
                className="px-4 py-2 text-white mt-5 transition duration-300"
                onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = buttoncolor)}
              >
                + Send Message
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-end w-1/2 p-10">
              <p className="font-bold text-[25px]">{topicTop}</p>
              <p className="font-bold text-[25px] mb-5">{topicBottom}</p>
              <p className="text-[13px] p-1">{description}</p>
              <p className="font-bold text-[13px] p-1">{subTopic}</p>
              <p className="text-[13px] p-1">
                <span className="font-bold">{subPoint1}</span> {subPointDes1}
              </p>
              <p className="text-[13px] p-1">
                <span className="font-bold">{subPoint2}</span> {subPointDes2}
              </p>
              <p className="text-[13px] p-1">
                <span className="font-bold">{subPoint3}</span> {subPointDes3}
              </p>
              <p className="text-[13px] p-1">{conclusion}</p>
              <button
                style={{ backgroundColor: buttoncolor }}
                className="px-4 py-2 text-white mt-5 transition duration-300"
                onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = buttoncolor)}
              >
                + Send Message
              </button>
            </div>
            <div className="w-1/2 h-[500px] flex flex-col items-center justify-center">
              <img src={image} alt="detail" className="" />
            </div>
          </>
        )}
      </div>
      <div className="px-4">
        <div className="w-full h-px bg-gray-900"></div>
      </div>
    </>
  );
};

export default DetailCard;
