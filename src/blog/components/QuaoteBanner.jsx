import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Icons for quotes

function QuoteBanner() {
  return (
    <div className="bg-customBlue max-w-5xl mx-auto text-white py-12 px-6 relative">
      {/* Left Quote Icon (Top Left Corner) */}
      <FaQuoteLeft className="text-3xl text-white absolute top-4 left-24" />

      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
        <p className="text-xl italic font-bold leading-relaxed">
          Combining Advanced Technology and Global Networks to Offer
          <br />
          Freight Solutions That Keep Your Business Competitive and Growing.
        </p>
      </div>

      {/* Right Quote Icon (Bottom Right Corner) */}
      <FaQuoteRight className="text-3xl text-white absolute bottom-4 right-24" />
    </div>
  );
}

export default QuoteBanner;
