import React from "react";
import FAQ_Content from "../component/Faq_Content";
import Footer from "../component/Footer";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";

function FAQ_Screen() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <FAQ_Content />
      <Footer />
    </div>
  );
}

export default FAQ_Screen;
