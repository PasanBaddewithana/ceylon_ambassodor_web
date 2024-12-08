import React, { useState } from "react";
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

//sections
import LogisticsPage from "../component/UFS_LogoPart";
import  AeroLogisticsPage from "../component/Aerosection";
import KhemerLogisticsPage from "../component/khemergatesection";
import BrandpulseLogisticsPage from "../component/brandpulsesection";

import HomeVideo from "../../../assets/home/Home.mp4";

function HomePage() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("LogisticsPage");

  // Function to render the correct section based on activeSection state
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
      <Hero video={HomeVideo} /> {/* Pass the video prop */}
      <NavSection setActiveSection={setActiveSection} /> {/* Pass setActiveSection */}
      {renderSection()} {/* Render the active section dynamically */}
      <SecondHomeImageComponent />
      <ServicesComponent />
      <HomeJoinUsComponent />
      <StatsSection />
      <GlobalLogisticsComponent />
      <LatestNewsComponent />
      <LogisticsBanner />
      <HomeGridComponent />
      <ContactComponent />
      <Footer />
    </div>
  );
}

export default HomePage;
