import React from "react";
import MultiStepForm from "../components/MultiStepForm";

function BookFrieghtScreen() {
  return (
    <div style={{ position: "relative" }} className="font-kollektif">
      {/* Set relative positioning */}
      <TopHeader />
      <div className="bg-gray-200 h-[200px]  flex justify-start items-center">
        <Navbar />
        <div className="mt-10 ml-24">
          <MultiStepForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BookFrieghtScreen;
