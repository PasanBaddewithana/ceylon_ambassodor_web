import React from "react";
import container_boxes from "../../../assets/ourClients/container_Boxes-removebg-preview.png";
import Logo from "../../../assets/blue_logo.svg";
import GridComponent from "../../about/components/GridComponent";

function OurClientMidPart() {
  return (
    <div className="bg-[#e5e5e5]">
      <div className="bg-[#e5e5e5] min-h-screen flex flex-col justify-center items-center text-customBlue font-Montserrat text-justify">
        <div className="max-w-7xl w-full p-6 relative">
          {/* Image positioned at the top-right */}
          <div className="absolute top-0 right-0 w-3/4 lg:w-1/2">
            <img
              src={container_boxes}
              alt="Ceylon Ambassador Container"
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Header Section */}
          <header className="mb-4 max-w-xl mt-12">
            <h1 className="text-3xl font-bold mb-8 font-MontserratMedium">
              Partnering for Success <br />
              Around the Globe
            </h1>
            <p className="text-xs">
              At Ceylon Ambassador, we believe that the strength of our company
              lies in the relationships we build with our clients. By partnering
              with businesses across a wide range of industries, we help them
              mitigate the complexities of global trade while delivering their
              goods reliably and on time.
            </p>
          </header>

          <div className="flex flex-wrap justify-between items-start max-w-6xl">
            {/* Text Sections */}
            <div className="w-full lg:w-1/2">
              {/* Global Reach, Local Expertise Section */}
              <section className="mb-8">
                <h2 className="text-xs font-bold mb-2">
                  Global Reach, Local Expertise
                </h2>
                <p className="text-xs">
                  We work with clients from all over the world, ranging from
                  multinational corporations to small and medium-sized
                  enterprises (SMEs). With extensive knowledge of local markets
                  and regulatory environments, we ensure that your goods move
                  smoothly across borders.
                </p>
              </section>

              {/* Industries We Serve */}
              <section className="mb-8">
                <h2 className="text-xs font-bold mb-2">Industries We Serve</h2>
                <ul className="space-y-1 text-xs">
                  <li>
                    Retail & E-commerce: Helping retailers deliver products to
                    global markets quickly and efficiently.
                  </li>
                  <li>
                    Manufacturing: Providing reliable logistics for raw
                    materials and finished goods.
                  </li>
                  <li>
                    Healthcare & Pharmaceuticals: Offering secure,
                    temperature-controlled shipping for medical supplies.
                  </li>
                  <li>
                    Automotive: Managing transportation of parts and vehicles to
                    keep production lines running smoothly.
                  </li>
                  <li>
                    Technology & Electronics: Ensuring the safe delivery of
                    sensitive electronic components.
                  </li>
                </ul>
              </section>

              {/* Partnership Built on Trust */}
              <section className="mb-8">
                <h2 className="text-xs font-bold mb-2">
                  A Partnership Built on Trust
                </h2>
                <p className="text-xs">
                  Our clients choose Ceylon Ambassador because they know they
                  can rely on us for consistent, top-tier service. We work
                  closely with each client to create customized logistics
                  solutions that meet their unique needs, providing the highest
                  level of service at every stage of the supply chain.
                </p>
              </section>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-left mt-8">
            {/* Button with '+' and aligned to left */}
            <button className="flex items-center text-white py-3 px-6 bg-customBlue transition text-sm">
              <span className="mr-2 text-md">+</span> Send Message
            </button>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="bg-[#e5e5e5] mt-12 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between ">
        <div className="flex items-center mb-5 ml-12 mr-6 mt-2 ">
          <img src={Logo} alt="Ceylon Ambassador Logo" className="w-32" />
        </div>
        <div className="text-customBlue ">
          <p> join the </p>
          <h2 className="text-xl font-bold">Ceylon Ambassador Family</h2>
        </div>
        <div className="text-center md:text-left space-y-5 md:space-x-10 mt-2 ">
          <p className="max-w-screen-md text-customBlue text-xs mb-5">
            At Ceylon Ambassador, we don't just build business relationships; we
            create partnerships that last. Whether you're looking to optimize
            your supply chain, enhance your brand, or explore new travel
            opportunities, we invite you to join us on our journey of growth,
            innovation, and success.
          </p>
        </div>
      </footer>
      <GridComponent />
    </div>
  );
}

export default OurClientMidPart;
