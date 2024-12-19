import React from "react";
import SustainabilityImage from "../../../assets/trees.jpg";
import InnovationImage from "../../../assets/new_idea.jpg";
import ClientSuccessImage from "../../../assets/client_sucess.jpg";
import Logo from "../../../assets/blue_logo.svg";

const ServicesWithImages = () => {
  return (
    <div className="font-Montserrat ">
      <div className=" items-center justify-center">
      {/* Sustainability & Social Responsibility Section */}
      <div className="flex flex-col md:flex-row my-10 items-center justify-center px-5 md:px-20">
        <div className="md:w-1/2 py-2 max-w-96 text-center md:text-left">
          <h2 className="text-3xl font-MontserratMedium font-bold text-customBlue text-right" data-aos="fade-up" data-aos-duration="1000">
            Sustainability & Social Responsibility
          </h2>
          <p className="text-gray-700 mt-1 text-sm text-right" data-aos="fade-up" data-aos-duration="2000">
            At Ceylon Ambassador, we are deeply committed to sustainability and
            corporate social responsibility. We believe in creating value not
            only for our clients but also for the communities and environments
            in which we operate. Our initiatives range from green logistics and
            carbon-neutral operations to supporting local communities through
            educational programs and job creation.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-start mx-8 relative">
          <div className="w-full  h-auto  max-w-md border-l-2 border-gray-700 px-5">
            <img
              src={SustainabilityImage}
              alt="Sustainability"
              className="w-full h-auto object-cover"
              data-aos="fade-up" data-aos-duration="1000"
            />
          </div>
        </div>
      </div>

      {/* Innovation at the Core Section */}
      <div className="flex flex-col md:flex-row-reverse my-10 items-center justify-center px-5 md:px-20">
        <div className="md:w-3/4 p-5 text-center md:text-left">
          <h2 className="text-3xl font-MontserratMedium font-bold text-customBlue text-left max-w-96" data-aos="fade-up" data-aos-duration="1000">
            Innovation at the Core
          </h2>
          <p className="text-sm mt-1 text-gray-700 text-left max-w-96" data-aos="fade-up" data-aos-duration="2000">
            Innovation is the engine that drives everything we do at Ceylon
            Ambassador. Whether it's through adopting cutting-edge technology in
            logistics, enhancing customer experiences in aviation, creating
            memorable digital marketing campaigns, or revolutionizing travel
            experiences, we stay ahead of industry trends to offer the best
            possible solutions to our clients.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end mx-8 relative">
          <div className="w-full h-auto max-w-md border-r-2 border-gray-700 px-5">
            <img
              src={InnovationImage}
              alt="Innovation"
              className="w-full h-auto object-cover"
              data-aos="fade-up" data-aos-duration="1000"
            />
          </div>
        </div>
      </div>

      {/* Client Success Stories Section */}
      <div className="flex flex-col md:flex-row my-10 items-center justify-center px-5 md:px-20">
        <div className="md:w-1/2 py-2 max-w-96 text-center md:text-left">
          <h2 className="text-3xl font-MontserratMedium  font-bold text-customBlue text-right" data-aos="fade-up" data-aos-duration="1000">
            Client Success Stories
          </h2>
          <p className="text-sm text-gray-700 mt-1  text-right" data-aos="fade-up" data-aos-duration="2000">
            Our success is built on the success of our clients. Over the years,
            we've partnered with businesses across the globe, delivering
            customized solutions that drive results and exceed expectations.
            From streamlining global supply chains to creating iconic brand
            identities, Ceylon Ambassador has consistently proven its ability to
            generate tangible impact for businesses of all sizes.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-start mx-8 relative">
          <div className="w-full h-auto  max-w-md border-l-2 border-gray-700 px-5">
            <img
              src={ClientSuccessImage}
              alt="Sustainability"
              className="w-full h-auto object-cover"
              data-aos="fade-up" data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between ">
        <div className="flex items-center mb-5 ml-12 mr-6 mt-2 ">
          <img src={Logo} alt="Ceylon Ambassador Logo" className="w-32" data-aos="fade-up" data-aos-duration="1000" />
        </div>
        <div className="text-customBlue" data-aos="fade-up" data-aos-duration="1000">
          <p> join the </p>
          <h2 className="text-xl font-bold">Ceylon Ambassador Family</h2>
        </div>
        <div className="text-center md:text-left space-y-5 md:space-x-10 mt-2 ">
          <p className="max-w-screen-md text-gray-600 text-xs mb-5" data-aos="fade-up" data-aos-duration="1000">
            At Ceylon Ambassador, we don't just build business relationships; we
            create partnerships that last. Whether you're looking to optimize
            your supply chain, enhance your brand, or explore new travel
            opportunities, we invite you to join us on our journey of growth,
            innovation, and success.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServicesWithImages;
