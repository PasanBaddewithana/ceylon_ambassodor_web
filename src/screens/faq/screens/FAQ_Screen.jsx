import React, { useEffect } from "react";
import FAQ_Content from "../component/Faq_Content";
import Footer from "../component/Footer";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQ_Screen() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for animations
      easing: "ease-in-out", // Global easing
      once: true, // Animation should run only once
    });
  }, []);

  return (
    <div style={{ position: "relative" }} className="font-kollektif">
      {/* Set relative positioning */}
      <TopHeader />
      <div
        className="bg-gray-200 h-[200px] flex justify-start items-center"
        
      >
        <Navbar />
        <div className="mt-10 px-4 md:px-10 lg:ml-24">
  <h1 
    className="text-3xl md:text-4xl lg:text-5xl font-Montserrat font-bold text-black" 
    data-aos="fade-up" 
    data-aos-duration="1000"
  >
    Frequently Asked Questions
  </h1>
  <p 
    className="mt-4 text-gray-700 text-sm md:text-base lg:text-lg" 
    data-aos="fade-up" 
    data-aos-duration="1000"
  >
    At Ceylon Ambassador, we understand that you may have questions about our 
    services. Below, we’ve compiled some of the most common inquiries to 
    provide you with quick and helpful answers. If you don’t find what you’re 
    looking for, feel free to leave a reply or contact us directly!
  </p>
</div>

      </div>

      {/* Make sure FAQ_Content is placed below Navbar */}
      <div className="mt-3" >
        <FAQ_Content />
      </div>
      <Footer />
    </div>
  );
}

export default FAQ_Screen;
