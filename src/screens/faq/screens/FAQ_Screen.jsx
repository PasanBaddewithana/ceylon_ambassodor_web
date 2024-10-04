import React from "react";
import FAQ_Content from "../component/Faq_Content";
import Footer from "../component/Footer";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";

function FAQ_Screen() {
  return (
    <div style={{ position: "relative" }}>
      {/* Set relative positioning */}
      <TopHeader />
      <div className="bg-gray-200 h-[150px]  flex justify-start items-center">
        <Navbar />
        <div className="ml-10">
          <h1 className="text-4xl font-bold text-blue-900">FAQ Page</h1>
        </div>
      </div>

      {/* Make sure FAQ_Content is placed below Navbar */}
      <div className="mt-1">
        <FAQ_Content />
      </div>
      <Footer />
    </div>
  );
}

export default FAQ_Screen;
