import React from "react";
import MapComponent from "../component/MapComponent";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import ContactUsForm from "../component/ContactUsForm";
import ServicesSection from "../component/ServiceSection";
import LastContent from "../component/LastContent";
import Footer from "../../faq/component/Footer";

function ContactUsScreen() {
  return (
    <div className="relative font-Montserrat">
      <TopHeader />
      <Navbar />
      <MapComponent />
      <ContactUsForm />
      <ServicesSection />
      <LastContent />
      <Footer />
    </div>
  );
}

export default ContactUsScreen;
