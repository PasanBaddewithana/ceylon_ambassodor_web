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
          <h1 className="text-5xl font-bold text-black">FAQ Page</h1>
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
