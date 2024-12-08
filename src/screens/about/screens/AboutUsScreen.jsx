import React from "react";
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
  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <div className="flex-1 bg-customBlue">
        {/* Replace Hero with a video element */}
        <div className="w-full h-[550px] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src={AboutUsVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <FrontBanner />
      </div>
      <VisionScreen />
      <ValuesSection />
      <CardsGrid />
      <LeadershipComponent />
      <AirplaneHero />
      <ServicesWithImages />
      <GridComponent />
      <Footer />
    </div>
  );
}

export default AboutUsScreen;
