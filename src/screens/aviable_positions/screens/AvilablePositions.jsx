import React from "react";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import Footer from "../../faq/component/Footer";
import JobListingsPage from "../components/JobListingsPage";

function AvilablePositions() {
  return (
    <div style={{ position: "relative" }} className="font-kollektif">
      {/* Set relative positioning */}
      <TopHeader />
      <div className="bg-gray-200 h-[200px]  flex justify-start items-center">
        <Navbar />
        <div className="mt-10 ml-24">
          <h1 className="text-5xl font-Montserrat  font-bold text-black">
            Available Positions
          </h1>
        </div>
      </div>

      {/* Make sure FAQ_Content is placed below Navbar */}
      <div className="mt-3">
        <JobListingsPage />
      </div>
      <Footer />
    </div>
  );
}

export default AvilablePositions;
