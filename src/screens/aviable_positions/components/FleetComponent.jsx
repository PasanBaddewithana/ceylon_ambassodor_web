import React from "react";

const FleetComponent = () => {
  return (
    <div className=" max-w-screen-xl  mx-auto py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-x-16">
          {/* Heading Section */}
          <div className="md:col-span-2 justify-self-end ">
            <h2 className="text-4xl font-bold text-black">
              Our fleet covers your needs &<br /> pricing range
            </h2>
          </div>

          {/* Services Section */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
            {/* Air Freight */}
            <div>
              <h3 className="text-lg font-semibold text-black">Air Freight</h3>
              <p className="text-sm max-w-64 text-gray-600">
                Primis muucius integre vim anod sed ad soluta paullo pro atus
                inim micu eos vix.
              </p>
            </div>

            {/* Rail Freight */}
            <div>
              <h3 className="text-lg font-semibold text-black">Rail Freight</h3>
              <p className="text-sm max-w-64 text-gray-600">
                Primis muucius integre vim anod sed ad soluta paullo pro atus
                inim micu eos vix.
              </p>
            </div>

            {/* Ocean Freight */}
            <div>
              <h3 className="text-lg font-semibold text-black">
                Ocean Freight
              </h3>
              <p className="text-sm max-w-64 text-gray-600">
                Primis muucius integre vim anod sed ad soluta paullo pro atus
                inim micu eos vix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetComponent;
