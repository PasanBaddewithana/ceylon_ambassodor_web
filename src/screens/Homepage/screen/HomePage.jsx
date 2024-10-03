import React from "react";
import Header from "../component/HomeHeader";
import Hero from "../component/HeroSection";
import NavSection from "../component/NavigationSection";
import TopHeader from "../component/TopHeader";
import Navbar from "../component/Navbar";
import PlanImage from "../../../assets/editPlaneImage.png";
import CargoService from "../../../assets/cargo-service-image.svg";

function HomePage() {
  const images = [PlanImage, CargoService];
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
