import React from "react";
import AllVehiclesImage from "../../../assets/all_vehicles_image.png";

const VisionScreen = () => {
  return (
    <div className="font-Montserrat">
      <div className="h-screen flex justify-center items-start bg-white px-12 mx-16 mt-12 gap-x-4 text-customBlue">
        {/* Sidebar - Left side (5 columns) */}
        <div className="w-4/12 bg-white flex flex-col justify-start items-start">
          <div className="space-y-2 text-left">
            {[...Array(6)].map((_, index) => (
              <p
                key={index}
                className="font-kollektif text-lg font-black text-customBlue border-b-2 border-black pb-2"
              >
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

        {/* Main Content - Right side (7 columns) */}
        <div className="w-7/12 flex flex-col px-8 py-0">
          {/* Our Journey Section */}
          <section className="mb-12">
            <p className=" text-sm mb-6 text-customBlue">
              At Ceylon Ambassador, we believe in the power of
              connection—connecting businesses with opportunities, people with
              experiences, and ideas with innovation. Founded on the principles
              of excellence, integrity, and innovation, Ceylon Ambassador has
              grown into a dynamic and diversified business group that operates
              across logistics, aviation, travel, and branding. Our goal is
              simple: to deliver world-class solutions that inspire trust, drive
              growth, and create lasting impact.
            </p>
            <h2 className="text-3xl text-customBlue font-semibold mb-4">
              Our Journey
            </h2>
            <p className="text-sm text-customBlue">
              Since our inception, we have been driven by a vision to create a
              global presence that bridges industries, regions, and cultures.
              From humble beginnings, Ceylon Ambassador has evolved into a
              powerhouse, leading the way in logistics through United Freight
              Solutions, redefining aviation services with Aerofly Aviation,
              transforming travel experiences with KhmerGate, and helping
              businesses shine through BrandPulse. Each step of our journey has
              been marked by innovation, resilience, and a passion for
              delivering exceptional results.
            </p>
          </section>

          {/* What Sets Us Apart */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">What Sets Us Apart</h2>
            <p className="text-sm text-customBlue">
              At the heart of Ceylon Ambassador lies our unwavering commitment
              to excellence. We are not just about providing services; we are
              about offering solutions that elevate and empower. Whether it's
              connecting continents through our seamless logistics network,
              optimizing airline operations for efficiency and growth, crafting
              unforgettable travel adventures, or building iconic brands, we go
              beyond the ordinary to deliver extraordinary experiences. Our
              approach is simple yet powerful—be innovative, be impactful, and
              always put our clients first.
            </p>
          </section>
        </div>
      </div>
      {/* Vision & Mission */}
      <div className="flex mb-6 justify-center items-center mx-12">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={AllVehiclesImage}
            alt="All vehicles"
            className="object-contain"
          />
        </div>
        <div className="">
          {/* Vision */}
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-extrabold text-[#031c3f]">
              <span className="text-7xl">“</span> Vision
            </h2>
            <p className=" mt-4 text-customBlue">
              Our vision is to become a global leader in each of our
              sectors—logistics, travel and tourism, branding, and aviation—by
              continuously innovating, expanding our market presence, and
              setting new standards for quality, sustainability, and customer
              satisfaction. We aspire to be the preferred partner for businesses
              and individuals seeking reliable, cutting-edge, and sustainable
              solutions, creating value for all stakeholders while making a
              positive impact on society and the environment.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-end">
            <h2 className="text-4xl font-extrabold text-[#031c3f] ">
              Mission <span className="text-7xl">”</span>
            </h2>
            <p className="mt-4  text-customBlue">
              Ceylon Ambassador's mission is to connect opportunities and
              deliver excellence across our diverse portfolio of services. We
              are committed to fostering long-term relationships with our
              clients, driving sustainable growth, and contributing positively
              to the communities in which we operate. Our goal is to provide
              innovative, high-quality solutions that meet the unique needs of
              our clients, ensuring their success in an ever-evolving global
              marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionScreen;
