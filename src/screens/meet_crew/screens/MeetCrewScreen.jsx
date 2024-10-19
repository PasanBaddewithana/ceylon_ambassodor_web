import React from "react";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import JobListingsPage from "../../aviable_positions/components/JobListingsPage";
import FleetComponent from "../../aviable_positions/components/FleetComponent";
import Footer from "../../faq/component/Footer";
import HeadPart from "../components/HeadPart";
import TeamComponent from "../components/TeamComponent";

function MeetCrewScreen() {
  return (
    <div style={{ position: "relative" }} className="font-kollektif">
      {/* Set relative positioning */}
      <TopHeader />
      <div className="bg-gray-200 h-[200px]  flex justify-start items-center">
        <Navbar />
        <div className="mt-10 ml-24">
          <h1 className="text-5xl font-Montserrat  font-bold text-black">
            Meet The Crew
          </h1>
        </div>
      </div>

      {/* Make sure FAQ_Content is placed below Navbar */}
      <div className="mt-3">
        <HeadPart />
        <TeamComponent />
      </div>
      <Footer />
    </div>
  );
}

export default MeetCrewScreen;
