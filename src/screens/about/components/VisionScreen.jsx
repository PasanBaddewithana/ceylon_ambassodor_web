import React from "react";

const VisionScreen = () => {
  return (
    <div className="h-screen flex bg-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-white flex flex-col justify-start items-center p-8">
        <div className="space-y-4 text-left">
          {[...Array(6)].map((_, index) => (
            <p key={index} className="text-lg font-semibold">
              UNITED FREIGHT SOLUTIONS
            </p>
          ))}
        </div>
        <div className="mt-16 w-40 h-40 bg-[#031c3f] flex justify-center items-center">
          <div className="w-12 h-12 bg-[#d8b572] flex justify-center items-center">
            <span className="text-3xl font-bold text-white">+</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 flex flex-col p-8">
        {/* Our Journey Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
          <p className="text-lg text-gray-700">
            At Ceylon Ambassador, we believe in the power of
            connection—connecting businesses with opportunities, people with
            experiences, and ideas with innovation...
          </p>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">What Sets Us Apart</h2>
          <p className="text-lg text-gray-700">
            At the heart of Ceylon Ambassador lies our unwavering commitment to
            excellence...
          </p>
        </section>

        {/* Vision & Mission */}
        <div className="grid grid-cols-2 gap-8">
          {/* Vision */}
          <div>
            <h2 className="text-4xl font-extrabold text-[#031c3f]">
              <span className="text-7xl">“</span> Vision
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Our vision is to become a global leader in each of our sectors...
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-4xl font-extrabold text-[#031c3f]">
              Mission <span className="text-7xl text-right">”</span>
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Ceylon Ambassador’s mission is to connect opportunities and
              deliver excellence...
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="mt-16 flex justify-center space-x-8">
          <img
            src="path/to/airplane.png"
            alt="Airplane"
            className="w-1/4 object-contain"
          />
          <img
            src="path/to/cargo-ship.png"
            alt="Cargo Ship"
            className="w-1/4 object-contain"
          />
          <img
            src="path/to/truck.png"
            alt="Truck"
            className="w-1/4 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionScreen;
