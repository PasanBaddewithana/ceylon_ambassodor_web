import React from "react";
import CartoonCard from "./CartoonCard";
import slips from "../../../assets/slips.png";
import robot from "../../../assets/robot.png";
import speaker from "../../../assets/speaker.png";
import newspaper from "../../../assets/newspaper.png";
import bulb from "../../../assets/bulb.png";

const ThirdPart = () => {
  return (
    <div className="w-full h-[400px] flex flex-row items-center justify-center p-8 gap-20">
      <CartoonCard
        image={robot}
        h="180px"
        alt="robot"
        topic="Brand Strategy"
        content="We help define your brand's positioning and create a cohesive identity that resonates with your audience,from logo design to brand storytelling."
      />
      <CartoonCard
        image={newspaper}
        alt="newspaper"
        topic="Digital Marketing"
        content="Our digital marketing solutions increase your brand's visibility through SEO,SEM,social media campaigns, and targeted email marketing to engage and grow your audience."
      />
      <CartoonCard
        image={bulb}
        alt="bulb"
        topic="Creative Design"
        content="We design compelling visuals, from websites to packaging, that bring your brand to life and ensure a consisten, memorable customer experience."
      />
      <CartoonCard
        image={speaker}
        h="200px"
        alt="speaker"
        topic="Content Marketing"
        content="Our content marketing services create valuable, relevant conent that establishes your brand as a thought leader and fosters strong connections with your audience"
      />
      <CartoonCard
        image={slips}
        alt="slips"
        topic="Integrated Marketing Campaigns"
        content="We develop and execute multichannel marketing campaigns that amplify your brand's message and drive measurable results across both digital and traditional platforms"
      />
    </div>
  );
};

export default ThirdPart;
