import React from "react";
import SustainabilityImage from "../../../assets/trees.jpg";
import InnovationImage from "../../../assets/new_idea.jpg";
import ClientSuccessImage from "../../../assets/client_sucess.jpg";
import Logo from "../../../assets/white_logo_2.svg";

const ServicesWithImages = () => {
  return (
    <div className="App">
      {/* Sustainability & Social Responsibility Section */}
      <div className="flex flex-col md:flex-row my-10 items-center justify-center px-5 md:px-20">
        <div className="md:w-1/2 p-5 text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-900 mb-5">
            Sustainability & Social Responsibility
          </h2>
          <p className="text-gray-600">
            At Ceylon Ambassador, we are deeply committed to sustainability and
            corporate social responsibility. We believe in creating value not
            only for our clients but also for the communities and environments
            in which we operate. Our initiatives range from green logistics and
            carbon-neutral operations to supporting local communities through
            educational programs and job creation.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="w-full h-auto max-w-md border-l-2 border-gray-300 px-5">
            <img
              src={SustainabilityImage}
              alt="Sustainability"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Innovation at the Core Section */}
      <div className="flex flex-col md:flex-row-reverse my-10 items-center justify-center px-5 md:px-20">
        <div className="md:w-1/2 p-5 text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-900 mb-5">
            Innovation at the Core
          </h2>
          <p className="text-gray-600">
            Innovation is the engine that drives everything we do at Ceylon
            Ambassador. Whether it's through adopting cutting-edge technology in
            logistics, enhancing customer experiences in aviation, creating
            memorable digital marketing campaigns, or revolutionizing travel
            experiences, we stay ahead of industry trends to offer the best
            possible solutions to our clients.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="w-full h-auto max-w-md border-l-2 border-gray-300 px-5">
            <img
              src={InnovationImage}
              alt="Innovation"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Client Success Stories Section */}
      <div className="flex flex-col md:flex-row my-10 items-center justify-center px-5 md:px-20">
        <div className="md:w-1/2 p-5 text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-900 mb-5">
            Client Success Stories
          </h2>
          <p className="text-gray-600">
            Our success is built on the success of our clients. Over the years,
            we've partnered with businesses across the globe, delivering
            customized solutions that drive results and exceed expectations.
            From streamlining global supply chains to creating iconic brand
            identities, Ceylon Ambassador has consistently proven its ability to
            generate tangible impact for businesses of all sizes.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="w-full h-auto max-w-md border-l-2 border-gray-300 px-5">
            <img
              src={ClientSuccessImage}
              alt="Client Success"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-10 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-5 md:mb-0">
          <img
            src={Logo}
            alt="Ceylon Ambassador Logo"
            className="w-24 h-auto"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-900 mb-3">
            Join the Ceylon Ambassador Family
          </h2>
          <p className="text-gray-600 mb-5">
            At Ceylon Ambassador, we don't just build business relationships; we
            create partnerships that last. Whether you're looking to optimize
            your supply chain, enhance your brand, or explore new travel
            opportunities, we invite you to join us on our journey of growth,
            innovation, and success.
          </p>
        </div>
        <div>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg">
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ServicesWithImages;
