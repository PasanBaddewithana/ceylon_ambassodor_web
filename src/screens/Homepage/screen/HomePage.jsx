import React from "react";

import Hero from "../component/HeroSection";
import NavSection from "../component/NavigationSection";
import TopHeader from "../component/TopHeader";
import Navbar from "../component/Navbar";
import PlanImage from "../../../assets/editPlaneImage.jpg";
import CargoService from "../../../assets/cargo-service-image.jpg";
import OfficeImage from "../../../assets/office-supplies-sheets-notes.jpg";
import courierImage from "../../../assets/courier.jpg";
import RoboImage from "../../../assets/roboimage.jpg";
import LogisticsPage from "../component/UFS_LogoPart";
import SecondHomeImageComponent from "../component/SecondImageComponent";
import ServicesComponent from "../component/ServicesComponent";
import HomeJoinUsComponent from "../component/HomeJoinUsComponent";
import StatsSection from "../component/StateSection";
import GlobalLogisticsComponent from "../component/GlobalLogisticComponent";
import LatestNewsComponent from "../component/LatestNewsComponent";
import LogisticsBanner from "../component/LogisticBanner";
import HomeGridComponent from "../component/HomeGrid";

function HomePage() {
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
      <Hero images={images} />
      <NavSection />
      <LogisticsPage />
      <SecondHomeImageComponent />
      <ServicesComponent />
      <HomeJoinUsComponent />
      <StatsSection />
      <GlobalLogisticsComponent />
      <LatestNewsComponent />
      <LogisticsBanner />
      <HomeGridComponent />
    </div>
  );
}

export default HomePage;
