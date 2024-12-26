import React from "react";
import { Link } from "react-router-dom";

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
  buttoncolor = "#c3a05f", // Default button color
  buttonHoverColor = "#333", // Default hover color
  textColor = "black", // Default text color is black
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-2 md:px-16 lg:px-[110px] py-10 md:py-14 lg:py-[70px] gap-0.5 md:gap-1 font-Montserrat text-customBlue">
      {imagePosition === "left" ? (
        <>
          <div className="w-full lg:w-1/2 h-auto md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col items-center justify-center pl-50">
  <img
    src={image}
    alt=""
    className="w-full max-w-sm lg:max-w-full h-full object-cover "
  />
</div>
          <div className="flex flex-col items-start w-full lg:w-1/2 p-4 md:p-8 lg:p-10">
            <p
              className="font-bold text-xl md:text-2xl lg:text-[30px] font-MontserratMedium"
              data-aos="fade-up" data-aos-duration="1000"
              
              style={{ color: textColor }}
            >
              {topicTop}
            </p>
            <p
              className="font-bold text-lg md:text-xl lg:text-[27px] mb-4 md:mb-5"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="1500"
            >
              {topicBottom}
            </p>
            <p
              className="text-sm md:text-base lg:text-[13px] p-1"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="2000"
            >
              {description}
            </p>
            <div className="text-left">
              <p
                className="font-bold text-sm md:text-base lg:text-[13px] p-1"
                style={{ color: textColor }}
                data-aos="fade-up" data-aos-duration="2500"
              >
                {subTopic}
              </p>
            </div>
            <p
              className="text-sm md:text-base lg:text-[13px] p-1"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="3000"
            >
              <span className="font-bold">{subPoint1}</span> {subPointDes1}
            </p>
            <p
              className="text-sm md:text-base lg:text-[13px] p-1"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="3000"
            >
              <span className="font-bold">{subPoint2}</span> {subPointDes2}
            </p>
            <p
              className="text-sm md:text-base lg:text-[13px] p-1"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="3000"
            >
              <span className="font-bold">{subPoint3}</span> {subPointDes3}
            </p>
            <p
              className="text-sm md:text-base lg:text-[13px] p-1"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="3000"
            >
              {conclusion}
            </p>
            <a href="/contact-us" className="block">
  <button
    className="px-4 py-2 text-white mt-5 transition duration-300"
    data-aos="fade-up" data-aos-duration="1000"
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
</a>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-full lg:w-1/2 p-4 md:p-8 lg:p-10">
            <p
              className="font-bold text-xl md:text-2xl lg:text-[30px] font-MontserratMedium"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="1000"
            >
              {topicTop}
            </p>
            <p
              className="font-bold text-lg md:text-xl lg:text-[27px] mb-4 md:mb-5"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="1500"
            >
              {topicBottom}
            </p>
            <p
              className="text-sm md:text-base lg:text-[13px] p-1"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="2000"
            >
              {description}
            </p>
            <div className="text-left">
              <p
                className="font-bold text-sm md:text-base lg:text-[13px] p-1"
                style={{ color: textColor }}
                data-aos="fade-up" data-aos-duration="2500"
              >
                {subTopic}
              </p>
            </div>
            <p
              className="text-sm md:text-base lg:text-[13px] p-1"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="3000"
            >
              <span className="font-bold">{subPoint1}</span> {subPointDes1}
            </p>
            <p
              className="text-sm md:text-base lg:text-[13px] p-1"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="3000"
            >
              <span className="font-bold">{subPoint2}</span> {subPointDes2}
            </p>
            <p
              className="text-sm md:text-base lg:text-[13px] p-1"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="3000"
            >
              <span className="font-bold">{subPoint3}</span> {subPointDes3}
            </p>
            <p
              className="text-sm md:text-base lg:text-[13px] p-1"
              style={{ color: textColor }}
              data-aos="fade-up" data-aos-duration="3000"
            >
              {conclusion}
            </p>
            <a href="/contact-us" className="block">
  <button
    className="px-4 py-2 text-white mt-5 transition duration-300"
    data-aos="fade-up" data-aos-duration="1000"
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
</a>
          </div>
          <div className="w-full lg:w-1/2 h-auto md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col items-center justify-center pr-50">
            <img
              src={image}
              alt=""
              className="w-full max-w-sm lg:max-w-full h-full object-cover "
            />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailCard;
