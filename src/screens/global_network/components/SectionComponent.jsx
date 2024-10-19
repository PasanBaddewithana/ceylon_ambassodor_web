import React from "react";

// SectionComponent that accepts backgroundColor, textColor, title, logo (image), and countryDetails as props
const SectionComponent = ({
  backgroundColor,
  textColor,
  title,
  logo,
  countryDetails,
}) => {
  return (
    <div style={{ backgroundColor }}>
      <div
        className="px-8 py-8 max-w-6xl mx-auto font-Montserrat"
        style={{ color: textColor }}
      >
        <div className="mb-10">
          <div className="flex space-x-5 items-center">
            <div className="">
              <img
                src={logo}
                alt="world_logo"
                className="w-8 h-12 object-contain"
              />
            </div>
            <div className="mt-6">
              {/* Asia text */}
              <h3 className="text-3xl font-bold mb-6">{title}</h3>
            </div>
          </div>

          {/* Loop through the countryDetails prop */}
          {countryDetails.map((country, index) => (
            <div key={index} className="mb-12 mt-6">
              <h4 className="text-xl font-semibold mb-2">{country.name}</h4>
              <p className="mb-4 text-sm">{country.description}</p>
              <div className="flex flex-wrap text-sm mx-auto max-w-screen-lg">
                <div className="w-full md:w-1/2">
                  <strong>Services:</strong> {country.services.join(", ")}
                </div>
                <div className="w-full md:w-1/2">
                  <strong>Industries Served:</strong>{" "}
                  {country.industries.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
