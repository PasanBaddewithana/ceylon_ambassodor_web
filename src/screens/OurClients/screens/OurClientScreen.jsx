import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import HeroImage from "../components/HeroImage";
import OurClientMidPart from "../components/OurClientMidPart";
import Footer from "../../faq/component/Footer";

function OurClientScreen() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out", // Smooth transition
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div className="bg-white">
     
      <Navbar />
      <div className="bg-white">
        <div data-aos="fade-down">
          <HeroImage />
        </div>
        <div data-aos="fade-up">
          <OurClientMidPart />
        </div>
      </div>
      <div data-aos="fade-in">
        <Footer />
      </div>
    </div>
  );
}

export default OurClientScreen;
