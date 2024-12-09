import React from "react";
import FAQ_Content from "../component/Faq_Content";
import Footer from "../component/Footer";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";

function FAQ_Screen() {
  return (
    <div style={{ position: "relative" }} className="font-kollektif">
      {/* Set relative positioning */}
      <TopHeader />
      <div className="bg-gray-200 h-[200px]  flex justify-start items-center">
        <Navbar />
        <div className="mt-10 ml-24">
          <h1 className="text-5xl font-Montserrat  font-bold text-black">
          Frequently Asked Questions
          </h1>
          <p> At Ceylon Ambassador, we understand that you may have questions about our services. Below, we’ve compiled some of 
the most common inquiries to provide you with quick and helpful answers. If you don’t find what you’re looking for, feel free 
to leave a reply or contact us directly!</p>
        </div>
       
      
      </div>
     

      {/* Make sure FAQ_Content is placed below Navbar */}
      <div className="mt-3">
        <FAQ_Content />
      </div>
      <Footer />
    </div>
  );
}

export default FAQ_Screen;
