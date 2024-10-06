import React from "react";

const GridComponent = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 border border-customBlue">
      {/* Row 1 */}
      <div className="border border-customBlue h-32"></div>
      <div className="border border-customBlue h-32"></div>
      <div className="border border-customBlue h-32"></div>
      <div className="border border-customBlue h-32"></div>

      {/* Row 2 */}
      <div className="border border-customBlue h-32"></div>
      <div className="border border-customBlue h-32"></div>
      <div className="border border-customBlue h-32"></div>
      <div className="border border-customBlue h-32"></div>
    </div>
  );
};

export default GridComponent;
