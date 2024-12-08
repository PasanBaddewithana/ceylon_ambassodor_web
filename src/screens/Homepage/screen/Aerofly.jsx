import React from "react";
import TopHeader from "../component/TopHeader";
import Navbar from "../component/Navbar";
import FirstSection from "../component/FirstSection";
import FourthPart from "../component/FourthPart";
import SixthSection from "../component/SixthSection";
import LastSection from "../component/LastSection";
import Footer from "../../../../src/screens/faq/component/Footer";

import AeroSecond from "../component/AeroSecond";
import AeroThirdPart from "../component/AeroThirdPart";
import AeroflyFifth from "../component/AeroflyFifth";
import AeroFlySixthSection from "../component/AeroflySixthSection";
import AeroSeventh from "../component/AeroSeventh";

import aerofly from "../../../assets/aeroflylogo.svg";

// Video assets
import Video1 from "../../../assets/Aerofly/Airline Representation.mp4";
import Video2 from "../../../assets/Aerofly/CARGO CAPACITY MANAGEMENT.mp4";
import Video3 from "../../../assets/Aerofly/Custom Service Solutions.mp4";
import Video4 from "../../../assets/Aerofly/GENERAL SALES & SERVICES AGENT.mp4";

function Aerofly() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <FirstSection
        videos={[Video1, Video2, Video3, Video4]} // Array of video sources
        branding={aerofly}
        first="CARGO CAPACITY MANAGEMENT"
        second="GENERAL SALES & SERVICES AGENT"
        third="AIRLINE REPRESENTATION"
        fourth="CUSTOM SERVICE SOLUTIONS"
      />
      <AeroSecond />
      <AeroThirdPart />
      <FourthPart imageHeight={800} />
      <AeroflyFifth />
      <AeroFlySixthSection
        brandImage={aerofly}
        brandName="Aerofly Aviation"
        description="At Aerofly Aviation, we offer more than just aviation services—we provide solutions that help your airline thrive in an ever-changing industry."
        subtopic1="Expert Cargo Management:"
        subdes1="We ensure that every inch of cargo space is maximized, providing tailored solutions that increase your profitability while maintaining safety and compliance."
        subtopic2="Global Representation:"
        subdes2="With a presence in key markets around the world, Aerofly Aviation ensures your brand reaches new heights, even in regions where you may not have a direct presence."
        subtopic3="Strategic Partnerships:"
        subdes3="Our deep industry connections allow us to build partnerships that open new revenue streams and enhance your operational efficiency."
        subtopic4="Customer-Centric Approach:"
        subdes4="We prioritize your clients' satisfaction with proactive communication, 24/7 support, and seamless service throughout the customer journey."
        subtopic5="Data-Driven Insights:"
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

export default Aerofly;
