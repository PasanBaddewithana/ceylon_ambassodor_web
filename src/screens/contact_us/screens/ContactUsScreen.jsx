import React from "react";
import MapComponent from "../component/MapComponent";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";

function ContactUsScreen() {
  return (
    <div className="relative">
       <TopHeader/>
       <Navbar/>
      <MapComponent />
    </div>
  );
}

export default ContactUsScreen;
