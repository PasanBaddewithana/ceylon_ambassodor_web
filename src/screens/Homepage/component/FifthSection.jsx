import React from "react";
import DetailCard from "./DetailCard";
import creativeDesign from "../../../assets/creativedesign.jpg";
import digitalDesign from "../../../assets/digitaldesign.jpg";
import contentMarketing from "../../../assets/contentMarketing.jpg";
import integratedMarketing from "../../../assets/intregratedMArketing.jpg";

const FifthSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DetailCard
        image={creativeDesign}
        topicTop="Brand Creation: "
        topicBottom="Crafting Brands with Purpose "
        description="At BrandPulse, we understand that every business has its own unique story and identity. That's why we offer Brand Creation services that go beyond just designing logos and taglines—we help you create a brand that resonates with your audience, communicates your values, and makes a lasting impact. Whether you're starting from scratch or rebranding, our team is dedicated to shaping brands that are both meaningful and memorable."
        subTopic="Our Brand Creation Services Include: "
        subPoint1="Brand Positioning:"
        subPointDes1=" We define where your brand stands in the marketplace, creating a distinct identity that sets you apart from competitors and resonates with your target audience. "
        subPoint2="Visual Identity Development:"
        subPointDes2="From logos and color schemes to typography and imagery, we design a cohesive visual identity that embodies your brand's personality and leaves a lasting impression. "
        subPoint3="Brand Storytelling:"
        subPointDes3=" We craft compelling narratives that communicate your brand's mission, vision, and values, connecting with your audience on an emotional level and building loyalty. "
        conclusion="Whatever your vision, Brand Pulse's Brand Creation services provide the creativity and strategy you need to build a brand that speaks to your customers and stands out in the marketplace. "
        imagePosition="right"
      />
      <div className="h-[2px] w-3/4 bg-black"></div>
      <DetailCard
        image={digitalDesign}
        topicTop="Digital Marketing:"
        topicBottom="Driving Engagement and Growth"
        description="In today's fast-paced digital world, it's crucial to connect with your
          audience online. At Brand Pulse, our Digital Marketing services are
          designed to help your brand reach the right people, at the right time,
          with the right message. Whether you're aiming to boost brand
          awareness, increase engagement, or drive conversions, our digital
          marketing strategies are tailored to your business goals."
        subTopic="Our Digital Marketing Services Include:"
        subPoint1="SEO & SEM:"
        subPointDes1="We optimize your website and content to ensure that
          your brand is visible on search engines, driving organic traffic and
          increasing your online presence."
        subPoint2="Social Media Campaigns:"
        subPointDes2=" We create engaging social media strategies that build
          communities, foster connections, and enhance brand visibility across
          platforms like Instagram, Facebook, and LinkedIn."
        subPoint3="Email Marketing:"
        subPointDes3="Through targeted email campaigns, we help nurture
          relationships with your audience, delivering personalized content that
          converts subscribers into loyal customers."
        conclusion="With BrandPulse's Digital Marketing, your brand will stay top-of-mind
          and continue to grow in the ever-evolving digital landscape."
        imagePosition="left"
      />
      <div className="h-[2px] w-3/4 bg-black"></div>
      <DetailCard
        image={creativeDesign}
        topicTop="Creative Design:"
        topicBottom="Bringing Your Vision to Life "
        description="Design is at the heart of your brand's identity. BrandPulse's Creative Design services ensure that every visual element of your brand is captivating, consistent, and reflective of your business's personality. Whether you need a stunning website, dynamic packaging, or engaging marketing collateral, our design team brings creativity and strategic thinking to every project. "
        subTopic="Our Creative Design Services Include:"
        subPoint1="Graphic Design:"
        subPointDes1="From business cards to brochures, we create marketing materials that are
      visually compelling and perfectly aligned with your brand's identity."
        subPoint2="Website Design & UX/UI:"
        subPointDes2="We design beautiful, user-friendly websites that offer seamless navigation
      and an engaging user experience, turning visitors into loyal customers."
        subPoint3="Packaging Design:"
        subPointDes3="We design product packaging that not only protects your goods but also
      tells your brand's story and stands out on shelves, capturing customers'
      attention."
        conclusion=" Whatever your creative needs, BrandPulse's Creative Design services bring
      your brand's vision to life, ensuring a cohesive and memorable visual
      identity."
        imagePosition="right"
      />
      <div className="h-[2px] w-3/4 bg-black"></div>

      <DetailCard
        image={contentMarketing}
        topicTop="Content Marketing: Building"
        topicBottom="Connections Through Storytelling"
        description=" Content is the bridge that connects your brand with your audience. At
      BrandPulse, our Content Marketing services focus on creating valuable,
      relevant content that informs, inspires, and engages. By building a
      content strategy that aligns with your business goals, we help position
      your brand as a thought leader and foster deeper relationships with your
      audience. "
        subTopic="Our Content Marketing Services Include:"
        subPoint1="Content Strategy:"
        subPointDes1=" We develop a content plan tailored to your audience and
      business objectives, ensuring that every piece of content supports your
      brand and drives engagement. "
        subPoint2="Copywriting:"
        subPointDes2=" Our expert copywriters create
      compelling copy for websites, blogs, newsletters, and more, ensuring that
      your brand's voice is consistent and impactful."
        subPoint3="Video Marketing: "
        subPointDes3="We produce engaging videos that capture your brand's
      essence, tell your story, and increase engagement across digital
      platforms."
        conclusion=" With BrandPulse's Content Marketing, your brand will build lasting
      connections and establish authority in your industry."
        imagePosition="left"
      />
      <div className="h-[2px] w-3/4 bg-black"></div>
      <DetailCard
        image={integratedMarketing}
        topicTop="Integrated Marketing Campaigns: "
        topicBottom="Amplifying Your Brand's Message"
        description=" Successful marketing campaigns are those that deliver the right message to the right people at the right time. BrandPulse's Integrated Marketing Campaigns are designed to amplify your brand's presence and drive results. By combining digital and traditional marketing channels, we create cohesive, impactful campaigns that reach your audience wherever they are. "
        subTopic="Our Integrated Marketing Campaign Services Include: "
        subPoint1="Campaign Strategy:"
        subPointDes1="We work closely with you to develop a comprehensive
      marketing strategy that aligns with your business goals and engages your
      target audience. "
        subPoint2="Multichannel Execution: "
        subPointDes2="From digital ads to email marketing, we deliver campaigns across multiple
      platforms, ensuring maximum reach and engagement."
        subPoint3="Performance Tracking:"
        subPointDes3="We analyze campaign performance, providing detailed reports and actionable
      insights to refine your strategy and maximize results. "
        conclusion=" With BrandPulse's Integrated Marketing Campaigns, your brand's message
      will be heard loud and clear. driving growth and building brand loyalty."
        imagePosition="right"
      />
      <div className="h-[2px] w-3/4 bg-black"></div>
    </div>
  );
};

export default FifthSection;
