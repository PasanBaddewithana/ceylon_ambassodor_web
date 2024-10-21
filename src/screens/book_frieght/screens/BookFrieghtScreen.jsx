import React, { useState } from "react";
import MultiStepForm from "../components/MultiStepForm";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import Footer from "../../faq/component/Footer";

function BookFrieghtScreen() {
  const [currentStep, setCurrentStep] = useState(1);

  // Move to next or previous step
  const nextStep = (e) => {
    e.preventDefault(); // Prevent form submission on Next button click
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = (e) => {
    e.preventDefault(); // Prevent form submission on Previous button click
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div style={{ position: "relative" }} className="font-kollektif">
      {/* Set relative positioning */}
      <TopHeader />
      <div className="bg-gray-200 h-[200px]  flex justify-start items-center">
        <Navbar />
        <div className="mt-10 ml-24">
          <h1 className="text-5xl font-Montserrat  font-bold text-black">
            Step {currentStep} / 3
          </h1>
        </div>
      </div>

      <div className="">
        <MultiStepForm
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </div>

      <Footer />
    </div>
  );
}

export default BookFrieghtScreen;
