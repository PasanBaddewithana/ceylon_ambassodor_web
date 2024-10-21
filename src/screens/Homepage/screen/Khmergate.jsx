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
import mainImage from "../../../assets/mainimage.jpg";
import aerofly from "../../../assets/aeroflylogo.svg";
import uniformedPilot from "../../../assets/uniformedPilot.jpg";
import AeroThirdPart from "../component/AeroThirdPart";
import AeroflyFifth from "../component/AeroflyFifth";
import AeroSeventh from "../component/AeroSeventh";
import AeroSecond from "../component/AeroSecond";
import KhmergateSecond from "../component/Khmergate/KhmergateSecond";
import KhmergateThird from "../component/Khmergate/KhmergateThird";
import KhmergateFifth from "../component/Khmergate/KhmergateFifth";

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
        midbranding={aerofly}
        first="CARGO CAPACITY MANAGEMENT"
        second="GENERAL SALES & SERVICES AGENT"
        third="AIRLINE REPRESENTATION"
        fourth="CUSTOM SERVICE SOLUTIONS"
      />
      <KhmergateSecond />
      <KhmergateThird />
      <FourthPart fourthImage={uniformedPilot} imageHeight={800} />
      <KhmergateFifth />
      <SixthSection
        brandImage={aerofly}
        brandName="Aerofly Aviation?"
        description="At Aerofly Aviation, we offer more than just aviation services we provide solutions that help your airline thrive in an ever-changing industry. Here's why airlines trust us to handle their most critical operations:"
        subtopic1="Expert Cargo Management:"
        subdes1=" We ensure that every inch of cargo space is maximized, providing tailored solutions that increase your profitability while maintaining safety and compliance."
        subtopic2="Global Representation:"
        subdes2="
 With a presence in key markets around the world, Aerofly Aviation ensures your brand reaches new heights, even in regions where you may not have a direct presence."
        subtopic3="Strategic Partnerships:"
        subdes3=" Our deep industry connections allow us to build partnerships that open new revenue streams and enhance your operational efficiency."
        subtopic4="Customer-Centric Approach: "
        subdes4=" We prioritize your clients' satisfaction with proactive communication, 24/7 support, and seamless service throughout the customer journey."
        subtopic5="Data-Driven Insights: "
        subdes5="Using advanced analytics, we provide you with the data and insights needed to optimize your operations and stay competitive in the fast-paced aviation industry."
      />
      <AeroSeventh />
      <LastSection
        lastImage={aerofly}
        lastwords="Contact us today to learn how Aerofly can become your trusted partner in aviation excellence."
      />
      <Footer />
    </div>
  );
}

export default Khmergate;
