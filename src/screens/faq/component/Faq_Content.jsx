import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Importing search icon
import Logistic_Image from "../../../assets/transport-logistics-concept.svg";
import logo from "../../../assets/Logo.svg";

const FAQ_Content = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Accordion */}
          <div className="lg:col-span-2 space-y-4">
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
                isActive={activeIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}

            {/* Comment Form */}
            <ReplyForm />
          </div>

          {/* Right Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

const accordionData = [
  { title: "Eu sit modo...", content: "Lorem ipsum dolor sit amet..." },
  { title: "Enim volutpat...", content: "Lorem ipsum dolor sit amet..." },
  { title: "An eam adipisci...", content: "Lorem ipsum dolor sit amet..." },
  // Add more as needed
];

const Accordion = ({ title, content, isActive, onClick }) => (
  <div className="border-t border-black">
    <div className="flex justify-between items-center p-4 bg-white">
      <h2 className="text-lg">{title}</h2>
      <button
        onClick={onClick}
        className="text-lg bg-[#031c3f] text-white w-8 h-8 flex items-center justify-center rounded-full"
      >
        {isActive ? "−" : "+"}
      </button>
    </div>
    {isActive && (
      <div className="px-4 bg-gray-50 text-sm text-gray-700">
        {/* Adjusted font size and color */}
        {content}
      </div>
    )}
  </div>
);

const ReplyForm = () => (
  <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-4xl font-bold mb-6">Leave a reply</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Message"
        className="w-full p-2 border rounded h-28"
      />
      <button className="bg-[#031c3f] text-white py-2 px-4 rounded-md">
        + Send Message
      </button>
    </form>
  </div>
);

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="space-y-6">
      {/* Search Box */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Type your search..."
          className="w-full p-2 border rounded pl-10" // Padding added for the search icon
        />
        <span className="absolute inset-y-0 left-2 flex items-center">
          <FiSearch className="text-gray-500" />
        </span>
      </div>

      {/* Transparent Pricing Section */}
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg mb-2">Transparent Pricing</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>Agriculture</li>
          <li>Architecture</li>
          <li>Construction</li>
          
          
        </ul>
      </div>

      {/* Tags Section */}
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg mb-2">Tags</h2>
        <div className="space-y-2">
          <span className="bg-gray-200 px-2 mx-1 py-1 rounded">Business</span>
          <span className="bg-gray-200 px-2 mx-1 py-1 rounded">Shipping</span>
          {/* Add more tags as needed */}
        </div>
      </div>

      {/* Image */}
      <div>
        <img
          src={Logistic_Image}
          alt="Ship"
          className="self-center ml-6 mb-2 "
        />
        <img
          src={logo}
          alt="logo"
          className="self-center ml-6 mb-4 w-52 h-52"
        />
      </div>
    </div>
  );
};

export default FAQ_Content;
