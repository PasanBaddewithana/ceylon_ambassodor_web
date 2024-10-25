import CartoonCard from "./CartoonCard";
import Plane from "../../../assets/warehouse/Layer 33.svg";
import Ship from "../../../assets/warehouse/Layer 34.svg";
import Truck from "../../../assets/warehouse/Layer 35.svg";
import Train from "../../../assets/warehouse/Layer 36.svg";
import World from "../../../assets/warehouse/Layer 37.svg";

const IconsLayer = () => {
  return (
    <div className="w-full h-[400px] flex flex-row items-center justify-center p-8 gap-20">
      <CartoonCard
        image={Plane}
        h="100px"
        alt="robot"
        topic="Brand Strategy"
        content="We help define your brand's positioning and create a cohesive identity that resonates with your audience,from logo design to brand storytelling."
      />
      <CartoonCard
        image={Ship}
        alt="newspaper"
        topic="Digital Marketing"
        h="100px"
        content="Our digital marketing solutions increase your brand's visibility through SEO,SEM,social media campaigns, and targeted email marketing to engage and grow your audience."
      />
      <CartoonCard
        image={Truck}
        alt="bulb"
        topic="Creative Design"
        h="100px"
        content="We design compelling visuals, from websites to packaging, that bring your brand to life and ensure a consisten, memorable customer experience."
      />
      <CartoonCard
        image={Train}
        alt="speaker"
        topic="Content Marketing"
        h="100px"
        content="Our content marketing services create valuable, relevant conent that establishes your brand as a thought leader and fosters strong connections with your audience"
      />
      <CartoonCard
        image={World}
        h="100px"
        alt="slips"
        topic="Integrated Marketing Campaigns"
        content="We develop and execute multichannel marketing campaigns that amplify your brand's message and drive measurable results across both digital and traditional platforms"
      />
    </div>
  );
};

export default IconsLayer;
