const MiddleEastSection = () => {
  return (
    <div className="bg-blue-900 py-16 px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          {/* Replace with appropriate icon or logo */}
          <div className="bg-white rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-900"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.93 5.9c.07.16.11.34.11.53 0 .83-.67 1.5-1.5 1.5-.19 0-.37-.04-.53-.11l-2.17-.87V8.5c0-.55-.45-1-1-1s-1 .45-1 1v.79L7.68 9.5c-.16.07-.34.11-.53.11-.83 0-1.5-.67-1.5-1.5 0-.19.04-.37.11-.53L8 5.6V4c0-.55.45-1 1-1s1 .45 1 1v1.6l1.93.83 1.93-.83V4c0-.55.45-1 1-1s1 .45 1 1v1.6l1.68 2.9z" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white">Middle East</h1>
      </div>

      {/* Country Information */}
      <CountryInfo
        country="United Arab Emirates (UAE)"
        description="The UAE is a significant market for United Freight Solutions, where we provide end-to-end logistics solutions, including air and sea freight services, warehousing, and distribution. Our extensive partnerships in the UAE allow us to connect businesses to both regional and global markets."
        services="Logistics, Freight, Warehousing, Global Distribution"
        industries="Manufacturing, Retail, E-commerce, Construction"
      />
      <CountryInfo
        country="Saudi Arabia"
        description="Saudi Arabia is a growing market for Aerofly Aviation, where we deliver advanced cargo management, capacity optimization, and airline representation services. Our operations help airlines and cargo carriers maximize efficiency and revenue in this vital aviation hub."
        services="Aviation, Cargo Management, Airline Representation"
        industries="Aviation, Cargo, Freight"
      />
    </div>
  );
};

export default MiddleEastSection;
