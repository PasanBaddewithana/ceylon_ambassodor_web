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
  { title: "1. What logistics services does Ceylon Ambassador offer?", content: "We provide a comprehensive range of logistics solutions, including air freight, sea freight, inland freight, warehousing, distribution, and global consolidation. Our services are designed to meet the unique needs of businesses worldwide." },
  { title: " 2. How can I track my shipment?", content: " You can track your shipment in real time using our advanced tracking system. Simply enter your tracking number on our platform, and you’ll receive updates on the location and status of your shipment." },
  { title: "3. Do you offer customized logistics solutions?", content: "Yes, we specialize in tailoring our services to suit your specific requirements. Whether it’s a unique cargo type, urgent delivery timelines, or specific routing, our team works closely with you to ensure your logistics needs are met." },
  { title: "4. Which industries does Ceylon Ambassador serve?", content: " We cater to a wide range of industries, including retail, e-commerce, healthcare, pharmaceuticals, automotive, manufacturing, and more. Our solutions are adaptable to meet the demands of any industry." },
  { title: " 5. How do I request a quote for your services?", content: " You can easily request a quote by filling out the Contact Us form on our website or by reaching out to our customer support team directly. We’ll get back to you promptly with a detailed estimate." },
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
    <h2 className="text-4xl font-bold mb-6"> Still Have Questions? Leave a Reply Below!</h2>
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
          <span className="bg-gray-200 px-2 mx-1 py-1 rounded">Logistics</span>
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
