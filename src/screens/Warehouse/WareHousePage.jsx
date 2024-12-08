import React from "react";
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
  return (
    <div className="font-Montserrat">
      <TopHeader />
      <Navbar />
      <FirstSection
        videos={[AirFreightVideo, SeaFreightVideo, InlandFreightVideo, WarehousingVideo]}
        first="AIR FREIGHTS"
        second="SEA FRIGHTS"
        third="INLAND FRIGHTS"
        fourth="WAREHOUSING"
        branding={UFSlogo}
      />
      <ConnectingGlobal />
      <IconsLayer />
      <ContainerImage />
      <FifthSectionHeader />
      <ForwardTogether />
      <SeaFreight />
      <IslansFreight />
      <WareHousingAndDistribution />
      <GlobalConsollidation />
      <WhyChooseUs />
      <SeventhSection />
      <LastSection
        lastImage={UFSlogo}
        lastwords="We are committed to providing the best services to our clients"
      />
      <Footer />
    </div>
  );
};

export default WareHousePage;
