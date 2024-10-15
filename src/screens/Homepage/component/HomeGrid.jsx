import React from "react";

const HomeGridComponent = () => {
  return (
    <div className="w-full h-[200px] border border-gray-400">
      <div className="grid grid-cols-4 divide-x-[2px] divide-customBlue h-full border-t-2 border-customBlue">
        {/* Column 1 */}
        <div className="bg-[#A9ABAA]"></div>

        {/* Column 2 */}
        <div className="bg-[#A9ABAA]"></div>

        {/* Column 3 */}
        <div className="bg-[#A9ABAA]"></div>

        {/* Column 4 */}
        <div className="bg-[#A9ABAA]"></div>
      </div>
    </div>
  );
};

export default HomeGridComponent;
