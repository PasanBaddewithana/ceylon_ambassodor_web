import React from "react";

const MapComponent = () => {
  return (
    <div>
      {/* Gray-colored div using Tailwind CSS */}
      <div className="w-full h-12 bg-gray-200"></div>
      {/* Google Map iframe */}
      <div style={{ width: "100%", height: "450px" }}>
        <iframe
          width="100%"
          height="450"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=6.972802351547266,79.91743277742121&hl=en&z=14&output=embed" 
          title="Google Map"
        />
      </div>
      <div className="w-full h-2 bg-gray-200"></div>
    </div>
  );
};

export default MapComponent;
