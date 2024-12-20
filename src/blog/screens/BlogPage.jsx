// BlogPage.jsx
import React from "react";
import BlogPost from "../components/BlogComponent";
import blog1_img from "../../assets/blog/blog1.jpg";
import blog2_img from "../../assets/blog/blog2.jpg";
import blog3_img from "../../assets/blog/blog3.jpg";
import QuoteBanner from "../components/QuaoteBanner";
import Breadcrumb from "../components/BreadCrumb";
import TopHeader from "../../screens/Homepage/component/TopHeader";
import Navbar from "../../screens/Homepage/component/Navbar";
import Footer from "../../screens/faq/component/Footer";
import DOMPurify from "dompurify";

const BlogPage = () => {
  const blogPosts = [
    {
      date: "August 9, 2024",
      title: "United Freight Solutions: Redefining Global Logistics for Modern Businesses",
      description: "In today’s fast-paced and interconnected world, businesses need a logistics partner...",
      fullContent: `
  <p>In today’s fast-paced and interconnected world, businesses need a logistics partner that delivers efficiency, reliability, and innovation. At <b>United Freight Solutions (UFS)</b>, we simplify global supply chains with comprehensive solutions tailored to your unique needs. From <b>air and sea freight</b> to <b>inland transportation, warehousing, and global consolidation</b>, we provide seamless services that ensure your cargo reaches its destination safely and on time.</p>
  
  <h3><b>Innovative and Reliable Solutions</b></h3>
  <p>Backed by cutting-edge technology and a global network of trusted partners, we offer <b>real-time tracking</b>, optimized routes, and transparent processes that give you full visibility over your shipments. Whether you’re moving time-sensitive air freight, bulk sea cargo, or last-mile inland deliveries, <b>UFS</b> combines expertise and precision to minimize delays and maximize value.</p>
  
  <h3><b>Your Global Logistics Partner</b></h3>
  <p>We specialize in working across diverse industries—<b>retail, manufacturing, healthcare, automotive</b>, and more—delivering tailored logistics strategies that keep supply chains running smoothly. With strategically located <b>warehousing and distribution centers</b>, we handle storage, inventory management, and fulfillment with the highest standards of care and efficiency.</p>
  
  <p>At United Freight Solutions, we don’t just move goods—we build trusted partnerships, empower businesses, and drive success across borders.</p>
  
  <h3><b>United Freight Solutions – Delivering Excellence, Connecting the World.</b></h3>
`,
      imageUrl: blog1_img,
    },
    {
      date: "September 12, 2024",
      title: "Aerofly Aviation: Elevating Aviation Solutions to New Heights",
      description: "Blockchain technology is revolutionizing logistics by enhancing transparency...",
      fullContent:
        `
 <p>At <b>Aerofly Aviation</b>, we specialize in delivering innovative, tailored aviation solutions that help 
airlines and businesses soar higher. From <b>cargo capacity management</b> to <b>airline representation, 
air charter services,</b> and <b>customer service solutions,</b> we ensure seamless operations and maximize 
efficiency for our partners in the global aviation industry.</p>

 <h3><b>Solutions Tailored to Your Needs</b></h3>
 <p>Whether you need to optimize cargo space, expand into new markets, or arrange on-demand air 
charters, Aerofly Aviation provides <b>expert strategies</b> and <b>real-time support</b> that align with your 
operational goals. Our dedicated team combines <b>industry expertise</b> with <b>advanced technology</b> to 
streamline processes, reduce costs, and ensure timely deliveries.</p>
 <h3><b>Global Reach, Local Precision</b></h3>
 <p>With a strong network across key aviation markets, Aerofly Aviation bridges gaps, connects regions, 
and empowers airlines to operate with confidence. We pride ourselves on delivering <b>flexible, 
reliable,</b> and results-driven services that meet the demands of a rapidly evolving aviation landscape.
 At Aerofly Aviation, we don’t just provide solutions—we help you take flight, reach new markets, 
and achieve greater heights of success.</p>
 <h3><b>Aerofly Aviation – Efficiency Above All, Innovation Beyond Borders.</b></h3>`,
      imageUrl: blog2_img,
    },
    {
      date: "October 5, 2024",
      title: "KhmerGate: Your Gateway to Extraordinary Travel Experiences",
      description: "Sustainability in supply chains is no longer optional—it’s a business imperative...",
      fullContent:
        `<p>At <b>KhmerGate,</b> we believe that travel is about more than reaching a destination—it's about 
discovering new cultures, creating unforgettable memories, and connecting with the world in 
meaningful ways. Specializing in tailored travel experiences across Cambodia and beyond, we bring 
you immersive journeys that combine <b>authenticity, adventure, and comfort.</b></p>
 <h3><b>Crafted for Every Traveler</b></h3>
 <p>Whether you’re a history enthusiast exploring ancient temples, a foodie discovering local flavors, or 
seeking peaceful retreats in serene landscapes, KhmerGate designs <b>personalized itineraries</b> to 
match your passions. From cultural tours and spiritual escapes to photography expeditions and 
group travel, we ensure every detail is handled with care.</p>
 <h3><b>Seamless Travel Solutions</b></h3>
 <p>With expert planning, <b>air ticketing</b>, accommodation arrangements, and on-the-ground support, 
KhmerGate makes every journey effortless and enjoyable. Our team of local experts combines 
insider knowledge with top-tier services to ensure you experience the best Cambodia has to offer.
 At <b>KhmerGate,</b> every journey is crafted to inspire, connect, and leave a lasting impression.</p>
 <h3><b>KhmerGate – Travel Beyond the Ordinary, Discover the Extraordinary.</b></h3>`,
      imageUrl: blog3_img,
    },
  ];

  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <div className="flex lg:ml-96 mt-14">
        <Breadcrumb />
      </div>
      <div className="space-y-12">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            date={post.date}
            title={post.title}
            description={post.description}
            fullContent={post.fullContent}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
      <br />
       {/* Render the QuoteBanner component */}
       <QuoteBanner />
       <br />
       <Footer />
    </div>
  );
};

export default BlogPage;