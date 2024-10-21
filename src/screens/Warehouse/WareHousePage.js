import ConnectingGlobal from "./components/ConnectingGlobal"
import ContainerImage from "./components/ContainerImage"
import ForwardTogether from "./components/ForwardTogether"
import IconsLayer from "./components/IconsLayer"
import IslansFreight from "./components/IslandFreight"
import SeaFreight from "./components/SeaFreight"
import WareHousingAndDistribution from "./components/WarehousingAndDistribution"
import WhyChooseUs from "./components/WhyChooseUs"


const WareHousePage = () => { 
 
    return (
        <div>
            <ConnectingGlobal />
            <IconsLayer />
            <ContainerImage />
            <ForwardTogether   />
            <SeaFreight />
            <IslansFreight />
            <WareHousingAndDistribution />
            <WhyChooseUs    />
        </div>
    )
}

export default WareHousePage