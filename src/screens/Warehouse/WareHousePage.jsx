import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ConnectingGlobal from "./components/ConnectingGlobal";
import SeventhSection from "./components/ContactSection";
import FirstSection from "./components/FirstSection";
import ForwardTogether from "./components/ForwardTogether";
import IconsLayer from "./components/IconsLayer";
import IslansFreight from "./components/IslandFreight";
import SeaFreight from "./components/SeaFreight";
import WareHousingAndDistribution from "./components/WarehousingAndDistribution";
import WhyChooseUs from "./components/WhyChooseUs";
import LastSection from "./components/LastSection";
import Footer from "../faq/component/Footer";
import Navbar from "../Homepage/component/Navbar";
import TopHeader from "../Homepage/component/TopHeader";
import FifthSectionHeader from "./components/FifthSectionHeader";
import GlobalConsollidation from "./components/GlobalConsollidation";
import UFSlogo from "../../assets/warehouse/UFS_log_Orange.svg";

// Import video files
import AirFreightVideo from "../../assets/UFS_new/Air Freight.mp4";
import SeaFreightVideo from "../../assets/UFS_new/Inland Freight.mp4";
import InlandFreightVideo from "../../assets/UFS_new/Sea Freight.mp4";
import WarehousingVideo from "../../assets/UFS_new/Warehousing.mp4";

const WareHousePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="font-Montserrat">
      <TopHeader />
      <Navbar />

      {/* First Section */}
      <div  data-aos="fade-down">
        <FirstSection
          videos={[AirFreightVideo, SeaFreightVideo, InlandFreightVideo, WarehousingVideo]}
          first="AIR FREIGHTS"
          second="SEA FRIGHTS"
          third="INLAND FRIGHTS"
          fourth="WAREHOUSING"
          branding={UFSlogo}
        />
      </div>

      

      {/* Second Section */}
      <div data-aos="fade-up">
        <ConnectingGlobal />
      </div>

      

      {/* Third Section */}
      <div  data-aos="fade-left">
        <IconsLayer />
      </div>
       {/* Parallax Spacer */}
       <div className="parallax-spacer"></div>
      <div >
        <FifthSectionHeader />
      </div>
      {/* Fourth Section */}
      <div className="component-wrapper" >
        <ForwardTogether />
      </div>
       <div data-aos="fade-up">
        <SeaFreight />
      </div>  
      <div >
        <IslansFreight />
      </div>
      <div >
      </div>
      <div >
        <GlobalConsollidation />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <SeventhSection />
      </div>
      <LastSection
        lastImage={UFSlogo}
        lastwords="We are committed to providing the best services to our clients"
      />
      
      <Footer />
    </div>
  );
};

export default WareHousePage;

