import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Icons for quotes

function QuoteBanner() {
  return (
    <div className="bg-blue-900 text-white py-12 px-6 flex items-center justify-center">
      {/* Content Container */}
      <div className="max-w-4xl text-center flex flex-col items-center gap-4">
        {/* Left Quote Icon */}
        <FaQuoteLeft className="text-5xl text-white" />

        {/* Quote Text */}
        <p className="text-xl italic font-semibold leading-relaxed">
          Combining Advanced Technology and Global Networks to Offer Freight
          Solutions That Keep Your Business Competitive and Growing.
        </p>

        {/* Right Quote Icon */}
        <FaQuoteRight className="text-5xl text-white" />
      </div>
    </div>
  );
}

export default QuoteBanner;
