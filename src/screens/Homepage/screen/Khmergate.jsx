import React from "react";
import TopHeader from "../component/TopHeader";
import Navbar from "../component/Navbar";
import PlanImage from "../../../assets/editPlaneImage.jpg";
import CargoService from "../../../assets/cargo-service-image.jpg";
import OfficeImage from "../../../assets/office-supplies-sheets-notes.jpg";
import courierImage from "../../../assets/courier.jpg";
import RoboImage from "../../../assets/roboimage.jpg";

import FirstSection from "../component/FirstSection";

import FourthPart from "../component/FourthPart";

import SixthSection from "../component/SixthSection";

import LastSection from "../component/LastSection";
import Footer from "../../../../src/screens/faq/component/Footer";
import mainImage from "../../..//assets/Khmergate/asian_girl_image.jpg";
import khmergate_logo from "../../../assets/Khmergate/khermgate_green_logo.svg";
import plane_man from "../../../assets/Khmergate/airplane-man-transportation-aircraft.jpg";
import AeroThirdPart from "../component/AeroThirdPart";
import AeroflyFifth from "../component/AeroflyFifth";
import AeroSeventh from "../component/AeroSeventh";
import AeroSecond from "../component/AeroSecond";
import KhmergateSecond from "../component/Khmergate/KhmergateSecond";
import KhmergateThird from "../component/Khmergate/KhmergateThird";
import KhmergateFifth from "../component/Khmergate/KhmergateFifth";
import KhmergateSeventh from "../component/Khmergate/KhmergateSeventh";
import KhmergateLastSection from "../component/Khmergate/KhmergateLastSection";

function Khmergate() {
  const images = [
    PlanImage,
    CargoService,
    OfficeImage,
    courierImage,
    RoboImage,
  ];
  return (
    <div>
      <TopHeader />
      <Navbar />
      <FirstSection
        image={mainImage}
        branding={khmergate_logo}
        midbranding={khmergate_logo}
        first="INBOUND TOURS"
        second="OUTBOUND TOURS"
        third="EVENT SERVICES"
        fourth="SPECIAL INTEREST TOURS"
      />
      <KhmergateSecond />
      <KhmergateThird />
      <FourthPart fourthImage={plane_man} imageHeight={800} />
      <KhmergateFifth />
      <SixthSection
        brandImage={khmergate_logo}
        brandName="Travel with Khmergate?"
        description="Choosing KhmerGate means choosing a company committed to making your journey unforgettable. Here's why travelers trust us with their most cherished adventures:"
        subtopic1="Authentic Experiences:"
        subdes1="Our local guides provide unique insights and take you beyond the typical tourist routes to discover the heart of Cambodia and beyond."
        subtopic2="Personalized Service:"
        subdes2="From tailored itineraries to personal support throughout your trip, every experience is customized to meet your needs and preferences"
        subtopic3="Sustainable Tourism:"
        subdes3=" We believe in responsible travel, supporting local communities, and ensuring that our tours have a positive impact on the environment and people of Cambodia."
        subtopic4="Seamless Planning: "
        subdes4="Our experienced team handles all the details, from logistics to accommodations, so you can focus on creating memories."
        subtopic5="Expert Knowledge: "
        subdes5="With years of experience in the travel industry, we are your trusted partner in delivering the best travel solutions, both in Cambodia and globally."
      />
      <KhmergateSeventh />
      <KhmergateLastSection
        lastImage={khmergate_logo}
        lastwords="Contact us today to begin your next adventure, and let us show you the world through KhmerGate."
      />
      <Footer />
    </div>
  );
}

export default Khmergate;
