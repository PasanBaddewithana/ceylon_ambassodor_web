import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";

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

  // React Responsive queries
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

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
      
      <Navbar />
      <Hero video={HomeVideo} /> {/* Hero Section */}
      <NavSection setActiveSection={setActiveSection} /> {/* Navigation */}

      {isMobile && (
        <div data-aos="fade-up">{renderSection()}</div> /* Render for Mobile */
      )}

      {isTablet && (
        <div data-aos="fade-left">{renderSection()}</div> /* Render for Tablet */
      )}

      {isDesktop && (
        <div data-aos="zoom-in">{renderSection()}</div> /* Render for Desktop */
      )}

      {/* Other Components */}
      <SecondHomeImageComponent   />
      <div data-aos="fade-left" className="mt-1">
        <ServicesComponent />
      </div>
      <div data-aos="zoom-in">
        <HomeJoinUsComponent isMobile={isMobile} isTablet={isTablet} />
      </div>
      <div data-aos="flip-up">
        <StatsSection isMobile={isMobile} isTablet={isTablet} />
      </div>
      <GlobalLogisticsComponent isMobile={isMobile} isTablet={isTablet} />
      <div data-aos="fade-in">
        <LatestNewsComponent isMobile={isMobile} isTablet={isTablet} />
      </div>
      <LogisticsBanner isMobile={isMobile} isTablet={isTablet} />
      <div data-aos="fade-up">
        <HomeGridComponent isMobile={isMobile} isTablet={isTablet} />
      </div>
      <div data-aos="zoom-out">
        <ContactComponent isMobile={isMobile} isTablet={isTablet} />
      </div>
      <Footer isMobile={isMobile} isTablet={isTablet} />
    </div>
  );
}

export default HomePage;
