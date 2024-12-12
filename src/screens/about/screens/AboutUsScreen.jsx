import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import FrontBanner from "../components/FrontBanner";
import VisionScreen from "../components/VisionScreen";
import ValuesSection from "../components/ValueScetion";
import CardsGrid from "../components/CardGrid";
import LeadershipComponent from "../components/LeadershipComponent";
import AirplaneHero from "../components/AirplaneHero";
import ServicesWithImages from "../components/ServiceswithImages";
import GridComponent from "../components/GridComponent";
import Footer from "../../faq/component/Footer";

// Import your video file
import AboutUsVideo from "../../../assets/About Us.mp4";

function AboutUsScreen() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (ms)
      easing: "ease-in-out", // Animation easing
      once: true, // Run animation only once
    });
  }, []);

  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <div className="flex-1 bg-customBlue">
        {/* Hero Section with Video */}
        <div className="w-full h-[550px] overflow-hidden" data-aos="fade-up">
          <video
            className="w-full h-full object-cover"
            src={AboutUsVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div data-aos="fade-in">
          <FrontBanner />
        </div>
      </div>
      <div data-aos="fade-up">
        <VisionScreen />
      </div>
      <div data-aos="fade-right">
        <ValuesSection />
      </div>
      <div data-aos="zoom-in">
        <CardsGrid />
      </div>
      <div data-aos="fade-left">
        <LeadershipComponent />
      </div>
      {/* <div data-aos="flip-up">
        <AirplaneHero />
      </div> */}
      <div className="parallax-spacer-aboutus"></div>
      <div data-aos="fade-up">
        <ServicesWithImages />
      </div>
      <div data-aos="zoom-out">
        <GridComponent />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsScreen;
