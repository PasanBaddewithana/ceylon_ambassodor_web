import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../component/HeroSection";
import TopHeader from "../component/TopHeader";
import Navbar from "../component/Navbar";
import NavSection from "../component/NavigationSection";
import SecondHomeImageComponent from "../component/SecondImageComponent";
import ServicesComponent from "../component/ServicesComponent";
import HomeJoinUsComponent from "../component/HomeJoinUsComponent";
import StatsSection from "../component/StateSection";
import GlobalLogisticsComponent from "../component/GlobalLogisticComponent";
import LatestNewsComponent from "../component/LatestNewsComponent";
import LogisticsBanner from "../component/LogisticBanner";
import HomeGridComponent from "../component/HomeGrid";
import ContactComponent from "../component/ContactComponent";
import Footer from "../../faq/component/Footer";

// Sections
import LogisticsPage from "../component/UFS_LogoPart";
import AeroLogisticsPage from "../component/Aerosection";
import KhemerLogisticsPage from "../component/khemergatesection";
import BrandpulseLogisticsPage from "../component/brandpulsesection";

import HomeVideo from "../../../assets/home/Home.mp4";

function HomePage() {
  const [activeSection, setActiveSection] = useState("LogisticsPage");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (ms)
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "LogisticsPage":
        return <LogisticsPage />;
      case "KhemerLogisticsPage":
        return <KhemerLogisticsPage />;
      case "AeroLogisticsPage":
        return <AeroLogisticsPage />;
      case "BrandpulseLogisticsPage":
        return <BrandpulseLogisticsPage />;
      default:
        return <LogisticsPage />;
    }
  };

  return (
    <div>
      <TopHeader />
      <Navbar />
      <Hero video={HomeVideo} /> {/* Hero Section */}
      <NavSection setActiveSection={setActiveSection} /> {/* Navigation */}
      <div data-aos="fade-up">{renderSection()}</div> {/*Animated Section*/}
      <div data-aos="fade-right">
        <SecondHomeImageComponent />
      </div>
      <div data-aos="fade-left">
        <ServicesComponent />
      </div>
      <div data-aos="zoom-in">
        <HomeJoinUsComponent />
      </div>
      <div data-aos="flip-up">
        <StatsSection />
      </div>
      <div data-aos="fade-up">
        <GlobalLogisticsComponent />
      </div>
      <div data-aos="fade-in">
        <LatestNewsComponent />
      </div>
      <div data-aos="fade-down">
        <LogisticsBanner />
      </div>
      <div data-aos="fade-up">
        <HomeGridComponent />
      </div>
      <div data-aos="zoom-out">
        <ContactComponent />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
