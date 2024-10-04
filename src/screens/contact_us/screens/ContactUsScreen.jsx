import React from "react";
import MapComponent from "../component/MapComponent";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import ContactUsForm from "../component/ContactUsForm";

function ContactUsScreen() {
  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <MapComponent />
      <ContactUsForm />
    </div>
  );
}

export default ContactUsScreen;
