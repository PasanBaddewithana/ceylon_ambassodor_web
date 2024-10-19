import React from "react";

const GlobalReach = () => {
  return (
    <div className="bg-white py-16 px-8">
      {/* Expanding Our Global Reach Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Expanding Our Global Reach
        </h2>
        <p className="text-gray-600 mx-auto max-w-3xl">
          Our global footprint continues to grow as we expand into new regions
          and markets. At Ceylon Ambassador, we are always looking for
          opportunities to build new partnerships and strengthen our network
          across the globe. Wherever your business needs take you, we’re here to
          ensure that you are connected, supported, and positioned for success.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-gray-300 my-12"></div>

      {/* Partner with Us Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Partner with Us, Globally
        </h2>
        <p className="text-gray-600 mx-auto max-w-3xl mb-8">
          With Ceylon Ambassador’s established presence across continents, our
          expertise, resources, and strategic partnerships ensure that your
          business will thrive in any market. No matter the industry or region,
          we are your gateway to success.
        </p>
        <button className="bg-blue-900 text-white py-2 px-6 rounded-md">
          Send Message
        </button>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-gray-300 my-12"></div>

      {/* Partner Logos */}
      <div className="flex justify-center space-x-8">
        <img src="path_to_UFS_logo" alt="UFS Logo" className="h-12" />
        <img
          src="path_to_Khmergate_logo"
          alt="Khmergate Logo"
          className="h-12"
        />
        <img
          src="path_to_Aerofly_logo"
          alt="Aerofly Aviation Logo"
          className="h-12"
        />
        <img
          src="path_to_Brandpulse_logo"
          alt="Brandpulse Logo"
          className="h-12"
        />
      </div>
    </div>
  );
};

export default GlobalReach;
