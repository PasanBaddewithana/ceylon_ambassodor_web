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
import MainImage from "../../assets/warehouse/industrial-warehouse-parking-lot-cloudy-sky-modern-distribution-center-concept-urban-architecture-industrial-design-distribution-centers-cloudy-sky-parking-lots.jpg";
import LastSection from "./components/LastSection";
import UFSlogo from "../../assets/warehouse/UFS_log_Orange.svg";
import Footer from "../faq/component/Footer";
import Navbar from "../Homepage/component/Navbar";
import TopHeader from "../Homepage/component/TopHeader";
import FifthSectionHeader from "./components/FifthSectionHeader";

const WareHousePage = () => {
  return (
    <div className="font-Montserrat">
      <TopHeader />
      <Navbar />
      <FirstSection
        image={MainImage}
        first="Home"
        second="Services"
        third="Warehouse"
        fourth="Contact"
        branding={UFSlogo}
      />
      <ConnectingGlobal />
      <FifthSectionHeader />
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
