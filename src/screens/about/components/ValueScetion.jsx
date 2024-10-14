import React from "react";
// Import images
//Import images *----
import excellence from "../../../assets/Excellence.svg";
import customer from "../../../assets/customer.svg";
import innovation from "../../../assets/innovation.svg";
import integrity from "../../../assets/Intregrity.svg";
import sustainability from "../../../assets/sustainability.svg";

const ValuesSection = () => {
  return (
    <div className="bg-[#002147] text-white py-12">
      <h2 className="text-center text-4xl font-bold mb-20 font-MontserratMedium">
        Our Values
      </h2>
      <div className="max-w-screen-2xl ml-5 mr-5 flex flex-wrap justify-between">
        <div className="flex flex-col font-MontserratMedium w-full md:w-1/5 mb-6">
          <img
            src={integrity}
            alt="Integrity"
            className="self-center w-20 h-20 mb-4"
          />
          <p className="mt-2 mb-3 text-xs w-full">
            We conduct business with the highest ethical standards, always doing
            what is right for our clients, partners.
          </p>
          <h3 className="text-2xl font-bold">Integrity</h3>
        </div>
        <div className="flex flex-col font-MontserratMedium  w-full md:w-1/5 mb-6">
          <img
            src={excellence}
            alt="Excellence"
            className="self-center w-20 h-20 mb-4"
          />
          <p className="mt-2 mb-3 text-xs w-full">
            We are driven by a relentless pursuit of quality in every project,
            ensuring that our services are second to none.
          </p>
          <h3 className="text-2xl font-bold">Excellence</h3>
        </div>
        <div className="flex flex-col font-MontserratMedium  w-full md:w-1/5 mb-6">
          <img
            src={innovation}
            alt="Innovation"
            className="self-center w-20 h-20 mb-4"
          />
          <p className="mt-2 mb-3 text-xs w-full">
            We thrive on creativity and forward-thinking, constantly seeking new
            ways to enhance and revolutionize our services.
          </p>
          <h3 className="text-2xl font-bold">Innovation</h3>
        </div>
        <div className="flex flex-col font-MontserratMedium  w-full md:w-1/5 mb-6">
          <img
            src={sustainability}
            alt="Sustainability"
            className="self-center w-20 h-20 mb-4"
          />
          <p className="mt-2 mb-3 text-xs w-full">
            We are committed to responsible business practices that protect the
            environment and contribute positively to society.
          </p>
          <h3 className="text-2xl font-bold">Sustainability</h3>
        </div>
        <div className="flex flex-col font-MontserratMedium  w-full md:w-1/5 mb-6">
          <img
            src={customer}
            alt="Customer-Centricity"
            className="self-center w-20 h-20 mb-4"
          />
          <p className="mb-3 mt-2 text-xs w-full">
            Our clients are at the core of everything we do, and we strive to
            build long-lasting relationships by exceeding their expectations.
          </p>
          <h3 className="text-2xl font-bold">Customer-Centricity</h3>
        </div>
      </div>
      <div className="mt-20 text-center">
        <div className="bg-gray-100 p-2 shadow-md align-middle items-center justify-center ">
          <h2 className="text-customBlue text-2xl text-center font-Montserrat">
            THE CEYLON AMBASSADOR EXPERIENCE
          </h2>
        </div>

        <p className="max-w-screen-md text-sm mt-10  mx-auto">
          What makes us unique is not just our breadth of expertise, but our
          passion for what we do. From our dedicated team of industry experts to
          our cutting-edge technology and global reach, Ceylon Ambassador is
          your trusted partner in achieving greatness. We don’t just offer
          services; we offer a journey—one of growth, innovation, and success.
        </p>
      </div>
    </div>
  );
};

export default ValuesSection;
