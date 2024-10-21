import React from "react";
import ufs_logo from "../../../assets/global_network/ufs_global.svg";
import khmergate_logo from "../../../assets/global_network/khermgate.svg";
import aerofly_logo from "../../../assets/global_network/Aureofly.svg";
import brandpulse_logo from "../../../assets/global_network/brandpulse.svg";

const GlobalReach = () => {
  return (
    <div className="bg-white mt-8 py-12 px-8">
      {/* Expanding Our Global Reach Section */}
      <div className="text-center mb-12  text-customBlue">
        <h2 className="text-3xl font-bold font-Montserrat mb-4">
          Expanding Our Global Reach
        </h2>
        <p className="text-gray-600 mx-auto  text-sm max-w-5xl text-justify">
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
      <div className="text-center mb-12 text-customBlue">
        <h2 className="text-3xl font-bold font-Montserrat mb-4">
          Partner with Us, Globally
        </h2>
        <p className="text-gray-600 mx-auto text-sm max-w-5xl mb-8 text-justify">
          With Ceylon Ambassador’s established presence across continents, our
          expertise, resources, and strategic partnerships ensure that your
          business will thrive in any market. No matter the industry or region,
          we are your gateway to success.
        </p>
        <button className="bg-customBlue text-white py-2 px-6 font-Montserrat">
          Send Message
        </button>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-gray-300 my-12"></div>

      {/* Partner Logos */}
      <div className="mx-auto max-w-6xl items-end flex justify-between space-x-12">
        <img src={ufs_logo} alt="UFS Logo" className="h-20 w-auto" />
        <img src={khmergate_logo} alt="Khmergate Logo" className="h-20 w-48" />
        <img
          src={aerofly_logo}
          alt="Aerofly Aviation Logo"
          className="h-20 w-48 "
        />
        <img
          src={brandpulse_logo}
          alt="Brandpulse Logo"
          className="h-20 w-48 "
        />
      </div>
    </div>
  );
};

export default GlobalReach;
