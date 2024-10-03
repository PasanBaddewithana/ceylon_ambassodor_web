import React from "react";

import Hero from "../component/HeroSection";
import NavSection from "../component/NavigationSection";
import TopHeader from "../component/TopHeader";
import Navbar from "../component/Navbar";
import PlanImage from "../../../assets/editPlaneImage.png";
import CargoService from "../../../assets/cargo-service-image.svg";
import OfficeImage from "../../../assets/office-supplies-sheets-notes.svg";
import courierImage from "../../../assets/courier.svg";
import RoboImage from "../../../assets/roboimage.svg";

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
    </div>
  );
}

export default HomePage;
