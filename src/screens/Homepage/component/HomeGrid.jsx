import React from "react";

const HomeGridComponent = () => {
  return (
    <div className="w-full h-[400px] border border-gray-400">
      <div className="grid grid-cols-4 divide-x divide-gray-700 h-full">
        {/* Column 1 */}
        <div className="bg-gray-300"></div>

        {/* Column 2 */}
        <div className="bg-gray-300"></div>

        {/* Column 3 */}
        <div className="bg-gray-300"></div>

        {/* Column 4 */}
        <div className="bg-gray-300"></div>
      </div>
    </div>
  );
};

export default HomeGridComponent;
