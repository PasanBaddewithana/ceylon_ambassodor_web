import React from "react";

const GridComponent = () => {
  return (
    <div className="grid grid-flow-row auto-rows-max gap-0 mt-8">
      {/* Row 1 with 8 columns and no bottom border */}
      <div className="grid grid-cols-8 border-t border-l border-r border-customBlue">
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
      </div>

      {/* Row 2 with 8 columns and full borders */}
      <div className="grid grid-cols-8 border border-customBlue">
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
        <div className="border border-customBlue h-32"></div>
      </div>
    </div>
  );
};

export default GridComponent;
