import React from "react";

const GlobalNetworkIntroduction = () => {
  return (
    <div className="bg-white px-8 py-10 max-w-6xl mx-auto">
      {/* Title and Subtitle */}
      <h1 className="text-4xl font-bold mb-6 text-center">Ceylon Ambassador</h1>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Global Network: Countries and Regions
      </h2>
      <p className="mb-10 text-center max-w-4xl mx-auto">
        At Ceylon Ambassador, we operate on a global scale, providing seamless
        solutions across multiple industries, including logistics, aviation,
        travel, and branding. Our extensive network spans key regions around the
        world, enabling us to deliver excellence, no matter where our clients
        are located. Below is an overview of the countries and regions where
        Ceylon Ambassador actively operates:
      </p>

      {/* Asia Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-6">Asia</h3>

        {/* Sri Lanka */}
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-2">Sri Lanka (Headquarters)</h4>
          <p className="mb-4">
            As the heart of our operations, Sri Lanka is the hub from which we
            manage our diverse range of services. From United Freight Solutions’
            comprehensive logistics network to Aerofly Aviation’s extensive
            aviation services, and BrandPulse’s creative marketing solutions,
            Sri Lanka serves as our strategic headquarters for connecting
            clients across the globe.
          </p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <strong>Services:</strong> Logistics, Aviation, Branding, and
              Marketing
            </div>
            <div className="w-full md:w-1/2">
              <strong>Industries Served:</strong> Logistics, Supply Chain
              Management, Branding, Aviation
            </div>
          </div>
        </div>

        {/* Cambodia */}
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-2">Cambodia</h4>
          <p className="mb-4">
            Cambodia is a key region for our travel and tourism operations
            through KhmerGate, offering immersive experiences that showcase the
            rich cultural heritage and natural beauty of Southeast Asia. It’s
            also a base for BrandPulse, where we provide branding and marketing
            solutions to businesses across the region.
          </p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <strong>Services:</strong> Travel and Tourism, Branding,
              Marketing, Event Management
            </div>
            <div className="w-full md:w-1/2">
              <strong>Industries Served:</strong> Tourism, Hospitality, Event
              Management, Branding
            </div>
          </div>
        </div>

        {/* India */}
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-2">India</h4>
          <p className="mb-4">
            We operate a robust logistics network in India, a major hub for
            United Freight Solutions' freight and supply chain services. With
            strong partnerships and a deep understanding of the region's trade
            routes, we help businesses in India optimize their logistics and
            expand their global reach.
          </p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <strong>Services:</strong> Logistics, Freight Management,
              Warehousing
            </div>
            <div className="w-full md:w-1/2">
              <strong>Industries Served:</strong> E-commerce, Manufacturing,
              International Trade
            </div>
          </div>
        </div>

        {/* Singapore */}
        <div>
          <h4 className="text-xl font-bold mb-2">Singapore</h4>
          <p className="mb-4">
            Singapore is a key logistics and aviation hub for United Freight
            Solutions and Aerofly Aviation. Our presence in this dynamic region
            enables us to offer streamlined air and sea freight solutions, as
            well as comprehensive aviation services for businesses in Southeast
            Asia.
          </p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <strong>Services:</strong> Logistics, Aviation, Freight
              Consolidation, Warehousing
            </div>
            <div className="w-full md:w-1/2">
              <strong>Industries Served:</strong> Logistics, Aviation, Supply
              Chain Management
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNetworkIntroduction;
