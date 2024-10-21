import React from "react";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import HeroImage from "../components/HeroImage";
import OurClientMidPart from "../components/OurClientMidPart";
import Footer from "../../faq/component/Footer";

function OurClientScreen() {
  return (
    <div className="bg-white">
      <TopHeader />
      <Navbar />
      <div className="bg-white">
        <div>
          <HeroImage />
        </div>
        <OurClientMidPart />
      </div>
      <Footer />
    </div>
  );
}

export default OurClientScreen;
