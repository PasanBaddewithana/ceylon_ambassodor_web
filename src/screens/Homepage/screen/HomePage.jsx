import React from "react";
import Header from "../component/HomeHeader";
import Hero from "../component/HeroSection";
import NavSection from "../component/NavigationSection";
import TopHeader from "../component/TopHeader";
import Navbar from "../component/Navbar";

function HomePage() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Hero />
    </div>
  );
}

export default HomePage;
