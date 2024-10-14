import React from "react";

// Import your icons here
import airFreightIcon from "../../../assets/home/plane_lg.png";
import seaFreightIcon from "../../../assets/home/ship_logo.png";
import inlandFreightIcon from "../../../assets/home/lorryLogo.png";
import warehousingIcon from "../../../assets/home/warehousing.png";
import globalConsolidationIcon from "../../../assets/home/global_logo.png";

const ServicesComponent = () => {
  return (
    <div className="bg-customGray py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Air Freight Service */}
          <div className="text-center">
            <img
              src={airFreightIcon}
              alt="Air Freight Icon"
              className="w-32 h-auto mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-customBlue">
              Air Freight
            </h3>
            <p className="text-sm text-customBlue">
              Delivering fast, secure, and reliable air cargo solutions with
              global reach and real-time tracking.
            </p>
          </div>

          {/* Sea Freight Service */}
          <div className="text-center">
            <img
              src={seaFreightIcon}
              alt="Sea Freight Icon"
              className="w-32 h-auto mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-customBlue">
              Sea Freight
            </h3>
            <p className="text-sm text-customBlue">
              Providing cost-effective and flexible ocean freight services for
              all shipment sizes and types.
            </p>
          </div>

          {/* Inland Freight Service */}
          <div className="text-center">
            <img
              src={inlandFreightIcon}
              alt="Inland Freight Icon"
              className="w-32 h-auto mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-customBlue">
              Inland Freight
            </h3>
            <p className="text-sm text-customBlue">
              Offering tailored and secure inland freight solutions, including
              temperature-controlled and custom handling options.
            </p>
          </div>

          {/* Warehousing Service */}
          <div className="text-center">
            <img
              src={warehousingIcon}
              alt="Warehousing Icon"
              className="w-32 h-14 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-customBlue">
              Warehousing
            </h3>
            <p className="text-sm text-customBlue">
              Advanced warehousing solutions with real-time inventory management
              and value-added services.
            </p>
          </div>

          {/* Global Consolidation Service */}
          <div className="text-center">
            <img
              src={globalConsolidationIcon}
              alt="Global Consolidation Icon"
              className="w-32 h-14 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-customBlue">
              Global Consolidation
            </h3>
            <p className="text-sm text-customBlue">
              Efficient multi-country consolidation and distribution services,
              leveraging strategic locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
