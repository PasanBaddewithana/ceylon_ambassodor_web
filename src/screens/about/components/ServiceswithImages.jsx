import React from "react";

const ServicesWithImages = () => {
  return (
    <div className="App">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-900">Ceylon Ambassador</h1>
      </header>

      {/* Sustainability & Social Responsibility Section */}
      <div className="flex flex-col md:flex-row my-10 items-center">
        <div className="md:w-1/2 p-5">
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
        <div className="md:w-1/2">
          <img
            src={SustainabilityImage}
            alt="Sustainability"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Innovation at the Core Section */}
      <div className="flex flex-col md:flex-row-reverse my-10 items-center">
        <div className="md:w-1/2 p-5">
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
        <div className="md:w-1/2">
          <img
            src={InnovationImage}
            alt="Innovation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Client Success Stories Section */}
      <div className="flex flex-col md:flex-row my-10 items-center">
        <div className="md:w-1/2 p-5">
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
        <div className="md:w-1/2">
          <img
            src={ClientSuccessImage}
            alt="Client Success"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-10 text-center">
        <h2 className="text-xl font-bold text-blue-900 mb-3">
          Join the Ceylon Ambassador Family
        </h2>
        <p className="text-gray-600 mb-5">
          At Ceylon Ambassador, we don't just build business relationships; we
          create partnerships that last. Whether you're looking to optimize your
          supply chain, enhance your brand, or explore new travel opportunities,
          we invite you to join us on our journey of growth, innovation, and
          success.
        </p>
        <button className="bg-blue-900 text-white px-6 py-2 rounded-lg">
          Contact Us
        </button>
      </footer>
    </div>
  );
};

export default ServicesWithImages;
