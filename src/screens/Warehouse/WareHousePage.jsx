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
import MainImage from "../../assets/warehouse/parking.jpg";

const WareHousePage = () => {
  return (
    <div className="font-Montserrat">
      <TopHeader />
      <Navbar />
      <FirstSection
        image={MainImage}
        first="AIR FREIGHTS"
        second="SEA FRIGHTS"
        third="INLAND FRIGHTS"
        fourth="WAREHOUSING"
        branding={UFSlogo}
      />
      <ConnectingGlobal />

      <IconsLayer />
      <ContainerImage />
      <ForwardTogether />
      <SeaFreight />
      <IslansFreight />
      <WareHousingAndDistribution />
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
