import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ConnectingGlobal from "./components/ConnectingGlobal";
import SeventhSection from "./components/ContactSection";
import ContainerImage from "./components/ContainerImage";
import FirstSection from "./components/FirstSection";
import ForwardTogether from "./components/ForwardTogether";
import IconsLayer from "./components/IconsLayer";
import IslansFreight from "./components/IslandFreight";
import SeaFreight from "./components/SeaFreight";
import WareHousingAndDistribution from "./components/WarehousingAndDistribution";
import WhyChooseUs from "./components/WhyChooseUs";
import LastSection from "./components/LastSection";
import UFSlogo from "../../assets/warehouse/UFS_log_Orange.svg";
import Footer from "../faq/component/Footer";
import Navbar from "../Homepage/component/Navbar";
import TopHeader from "../Homepage/component/TopHeader";
import FifthSectionHeader from "./components/FifthSectionHeader";
import GlobalConsollidation from "./components/GlobalConsollidation";

// Import video files
import AirFreightVideo from "../../assets/UFS_new/Air Freight.mp4";
import SeaFreightVideo from "../../assets/UFS_new/Inland Freight.mp4";
import InlandFreightVideo from "../../assets/UFS_new/Sea Freight.mp4";
import WarehousingVideo from "../../assets/UFS_new/Warehousing.mp4";

const WareHousePage = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing function
      once: true, // Run animations only once when scrolled into view
    });
  }, []);

  return (
    <div className="font-Montserrat">
      <TopHeader />
      <Navbar />
      <div data-aos="fade-down">
        <FirstSection
          videos={[AirFreightVideo, SeaFreightVideo, InlandFreightVideo, WarehousingVideo]}
          first="AIR FREIGHTS"
          second="SEA FRIGHTS"
          third="INLAND FRIGHTS"
          fourth="WAREHOUSING"
          branding={UFSlogo}
        />
      </div>
      <div data-aos="fade-up">
        <ConnectingGlobal />
      </div>
      <div data-aos="fade-left">
        <IconsLayer />
      </div>
      <div data-aos="zoom-in">
        <ContainerImage />
      </div>
      <div data-aos="fade-right">
        <FifthSectionHeader />
      </div>
      <div data-aos="flip-up">
        <ForwardTogether />
      </div>
      <div data-aos="fade-up">
        <SeaFreight />
      </div>
      <div data-aos="fade-down">
        <IslansFreight />
      </div>
      <div data-aos="zoom-in">
        <WareHousingAndDistribution />
      </div>
      <div data-aos="fade-left">
        <GlobalConsollidation />
      </div>
      <div data-aos="fade-right">
        <WhyChooseUs />
      </div>
      <div data-aos="fade-up">
        <SeventhSection />
      </div>
      <div data-aos="zoom-out">
        <LastSection
          lastImage={UFSlogo}
          lastwords="We are committed to providing the best services to our clients"
        />
      </div>
      <Footer />
    </div>
  );
};

export default WareHousePage;
