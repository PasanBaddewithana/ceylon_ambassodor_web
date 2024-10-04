import React from "react";
import MapComponent from "../component/MapComponent";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import ContactUsForm from "../component/ContactUsForm";
import ServicesSection from "../component/ServiceSection";

function ContactUsScreen() {
  return (
    <div className="relative font-kollektif">
      <TopHeader />
      <Navbar />
      <MapComponent />
      <ContactUsForm />
      <ServicesSection />
    </div>
  );
}

export default ContactUsScreen;
