import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../component/HeroSection";
import NavSection from "../component/NavigationSection";
import TopHeader from "../component/TopHeader";
import Navbar from "../component/Navbar";
import BrandNavSection from "../component/BrandPulseNavigationSection";
import SecondPart from "../component/SecondPart";
import FirstSection from "../component/FirstSection";
import ThirdPart from "../component/ThirdPart1";
import FourthPart from "../component/FourthPart";
import FifthSection from "../component/FifthSection";
import SixthSection from "../component/SixthSection";
import SeventhSection from "../component/SeventhSection";
import LastSection from "../component/BrandPulseLastSection";
import Footer from "../../../../src/screens/faq/component/Footer";
import tableMeeting from "../../../assets/table_meeting.png";
import BrandPulseSixthSection from "../component/Khmergate/BrandPulseSixthScreen";

// Assets
import brandColored from "../../../assets/brand_pulse_ml_color.svg";

// Video assets
import Video1 from "../../../assets/BrandPulse/Brand Stratergy.mp4";
import Video2 from "../../../assets/BrandPulse/Content Creation.mp4";
import Video3 from "../../../assets/BrandPulse/Creative Design.mp4";
import Video4 from "../../../assets/BrandPulse/Digital Marketing.mp4";

function BrandPulse() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth easing for animations
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <div>
      <TopHeader />
      <Navbar />
      <div data-aos="fade-up">
        <FirstSection
          videos={[Video1, Video2, Video3, Video4]} // Pass the video array
          branding={brandColored}
          first="BRAND STRATEGY"
          second="DIGITAL MARKETING"
          third="CREATIVE DESIGN"
          fourth="CONTENT MARKETING"
        />
      </div>
      <div data-aos="fade-left">
        <SecondPart />
      </div>
      <div data-aos="fade-right">
        <ThirdPart />
      </div>
      {/* <div data-aos="zoom-in">
        <FourthPart fourthImage={tableMeeting} />
      </div> */}
      <div className="parallax-spacer-brandpulse"></div>
      <div data-aos="fade-up">
        <FifthSection />
      </div>
      
        <BrandPulseSixthSection
          brandName="BrandPulse?"
          description="Choosing BrandPulse means working with a team that's passionate about crafting brands that resonate and inspire. Here's why businesses trust us with their branding and marketing needs:"
          subtopic1="Creative Expertise:"
          subdes1="At BrandPulse, we bring creativity to every project, ensuring that your brand is visually stunning and strategically aligned with your goals."
          subtopic2="Tailored Solutions: "
          subdes2="We understand that every brand is unique, which is why we offer customized solutions designed to meet your specific business objectives and challenges."
          subtopic3="Data-Driven Strategy:"
          subdes3="We leverage data and analytics to inform every decision, ensuring that your marketing campaigns are optimized for success and delivering measurable results."
          subtopic4="Seamless Collaboration:"
          subdes4="We work closely with your team throughout the entire process, ensuring that every aspect of your brand is aligned with your vision and consistently executed."
          subtopic5="Long-Lasting Impact:"
          subdes5="Our goal is to create brands that stand the test of time, leaving a lasting impression on your audience and driving long-term business growth."
          brandImage={brandColored}
        />
      
      <div data-aos="fade-left">
        <SeventhSection />
      </div>
      <div data-aos="fade-up">
        <LastSection
          lastImage={brandColored}
          lastwords="Contact us today to start building your brand's future with BrandPulse"
        />
      </div>
      <Footer />
    </div>
  );
}

export default BrandPulse;
