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
import BrandNavSection from "../component/BrandPulseNavigationSection";
import SecondPart from "../component/SecondPart";
import FirstSection from "../component/FirstSection";
import ThirdPart from "../component/ThirdPart";
import FourthPart from "../component/FourthPart";
import FifthSection from "../component/FifthSection";
import SixthSection from "../component/SixthSection";
import SeventhSection from "../component/SeventhSection";
import LastSection from "../component/LastSection";
import Footer from "../../../../src/screens/faq/component/Footer";
import heroImage from "../../../assets/hero_image.png";
import brandColored from "../../../assets/brand_pulse_ml_color.svg";
import tableMeeting from "../../../assets/table_meeting.png";

function BrandPulse() {
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
      <FirstSection
        branding={brandColored}
        image={heroImage}
        first="BRAND STRATEGY"
        second="DIGITAL MARKETING"
        third="CREATIVE DESIGN"
        fourth="CONTENT MARKETING"
      />
      <SecondPart />
      <ThirdPart />
      <FourthPart fourthImage={tableMeeting} />
      <FifthSection />
      <SixthSection
        brandName="BrandPulse?"
        description="Choosing BrandPulse means working with a team that's passionate about
          crafting brands that resonate and inspire. Here's why businesses trust
          us with their branding and marketing needs:"
        subtopic1="Creative Expertise:"
        subdes1="At BrandPulse, we bring creativity to every project,
          ensuring that your brand is visually stunning and strategically
          aligned with your goals."
        subtopic2="Tailored Solutions: "
        subdes2="We understand that every brand is unique, which is why we
          offer customized solutions designed to meet your specific business
          objectives and challenges."
        subtopic3="Data-Driven Strategy:"
        subdes3="We leverage data and analytics to inform every decision,
          ensuring that your marketing campaigns are optimized for success and
          delivering measurable results."
        subtopic4="Seamless Collaboration:"
        subdes4=" We work closely with your team throughout the entire
          process, ensuring that every aspect of your brand is aligned with your
          vision and consistently executed."
        subtopic5="Long-Lasting Impact:"
        subdes5="Our goal is to create brands that stand the test of time,
          leaving a lasting impression on your audience and driving long-term
          business growth."
        brandImage={brandColored}
      />
      <SeventhSection />
      <LastSection
        lastImage={brandColored}
        lastwords="Contact us today to start building your brand's future with BrandPulse"
      />
      <Footer />
    </div>
  );
}

export default BrandPulse;
