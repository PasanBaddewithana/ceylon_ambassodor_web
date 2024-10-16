import React from "react";

const FleetComponent = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black">
            Our fleet covers your needs &<br />
            pricing range
          </h2>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Air Freight */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Air Freight</h3>
            <p className="text-sm text-gray-600">
              Primis musculus integre vim an. Sed ad soluta paulo pro atus inim
              micu eos vix.
            </p>
          </div>

          {/* Ocean Freight */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Ocean Freight</h3>
            <p className="text-sm text-gray-600">
              Primis musculus integre vim an. Sed ad soluta paulo pro atus inim
              micu eos vix.
            </p>
          </div>

          {/* Rail Freight */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Rail Freight</h3>
            <p className="text-sm text-gray-600">
              Primis musculus integre vim an. Sed ad soluta paulo pro atus inim
              micu eos vix.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetComponent;
