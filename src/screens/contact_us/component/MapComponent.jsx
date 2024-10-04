import React from "react";

const MapComponent = () => {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <iframe
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=New%20York+(New%20York)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Google Map"
      />
    </div>
  );
};

export default MapComponent;
