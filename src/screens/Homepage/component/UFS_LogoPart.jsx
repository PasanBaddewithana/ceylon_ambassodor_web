import React from "react";
import ship1 from "../../../assets/home/ship01.png";
import ship2 from "../../../assets/home/ship2.jpg";
import ufs_orange from "../../../assets/home/ufs_orange.png";
import h1 from '../../../assets/home/H1.png';
import { Link } from "react-router-dom";


const LogisticsPage = () => {
  return (
    <div className="mt-4  mb-4 flex flex-col justify-center items-center bg-gray-50">
      {/* Container for the content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-center justify-between  space-y-8 ">
          {/* Ships images */}
          <div className="space-y-16">
            <img src={h1} alt="Ship 1"  className="w-full max-w-2xl mx-auto h-auto" />
            
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left font-Montserrat" >
            <img
              src={ufs_orange}
              alt="UFS Logo"
              className="w-30 h-40 mx-auto lg:mx-0"
            />
            <h1 className="text-3xl font-bold text-customBlue" data-aos="fade-up" data-aos-duration="1000">
              United Freight Solutions: Connecting the World, One Shipment at a
              Time
            </h1>
            <p className="text-gray-600 pb-4" data-aos="fade-up" data-aos-duration="2000">
            
              <strong className="text-black">United Freight Solutions (UFS)</strong> is a leader in global logistics and
              supply chain management, offering an extensive range of services
              including air, sea, and inland freight, warehousing, and global
              consolidation. With a vast network of trusted partners and
              state-of-the-art technology, UFS delivers efficient, reliable, and
              cost-effective logistics solutions designed to meet the unique and
              complex demands of businesses worldwide.
              <br />
              <br />
              <strong className="text-black">Experience seamless logistics</strong> with UFS—your trusted partner for
              global freight solutions.
            </p>

            {/* View More Button */}
            <div
  className="flex items-center space-x-4 py-4 border-t-2 border-customBlue"
  data-aos="fade-up"
  data-aos-duration="3000"
>
  {/* Clickable area with hover effect */}
  <Link
    to="/ufs" // Replace with your React route
    className="flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 cursor-pointer"
  >
    {/* Circle with Plus Icon */}
    <div className="flex justify-center items-center w-12 h-12 bg-[#c3a05f] rounded-full transition-transform duration-300 hover:scale-110">
      <svg
        className="w-6 h-6 text-customBlue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </div>
    {/* Text beside Icon */}
    <div className="text-gray-800 font-kollektif ">
      <p className="font-medium">View more</p>
      <p>about our services</p>
    </div>
  </Link>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsPage;
