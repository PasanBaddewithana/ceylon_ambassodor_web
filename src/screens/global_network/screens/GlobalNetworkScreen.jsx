import React from "react";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import map from "../../../assets/map.png";

function GlobalNetworkScreen() {
  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <div className="bg-gray-200 overflow-hidden">
        {/* Image placed below the Navbar with a specific height and full width */}
        <img
          src={map}
          className="mt-12 w-full h-[650px] object-cover" // Adjust the height as needed
          alt="Map"
        />
      </div>
    </div>
  );
}

export default GlobalNetworkScreen;
