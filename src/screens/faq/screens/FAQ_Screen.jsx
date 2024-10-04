import React, { useState } from "react";

const FAQ_Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
  <div className="border-b">
    <div className="flex justify-between items-center p-4 bg-white">
      <h2 className="text-lg">{title}</h2>
      <button onClick={onClick} className="text-lg">
        {isActive ? "−" : "+"}
      </button>
    </div>
    {isActive && <div className="p-4 bg-gray-50">{content}</div>}
  </div>
);

const ReplyForm = () => (
  <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-xl mb-4">Leave a reply</h2>
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
      <button className="bg-blue-600 text-white py-2 px-4 rounded">
        Send Message
      </button>
    </form>
  </div>
);

const Sidebar = () => (
  <div className="space-y-6">
    {/* Search Box */}
    <div>
      <input
        type="text"
        placeholder="Type your search..."
        className="w-full p-2 border rounded"
      />
    </div>

    {/* Transparent Pricing Section */}
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg mb-2">Transparent Pricing</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li>Agriculture</li>
        <li>Architecture</li>
        <li>Construction</li>
        {/* Add more categories as needed */}
      </ul>
    </div>

    {/* Tags Section */}
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg mb-2">Tags</h2>
      <div className="space-y-2">
        <span className="bg-gray-200 px-2 py-1 rounded">Business</span>
        <span className="bg-gray-200 px-2 py-1 rounded">Shipping</span>
        {/* Add more tags as needed */}
      </div>
    </div>

    {/* Image */}
    <div>
      <img
        src="https://via.placeholder.com/200"
        alt="Ship"
        className="w-full rounded"
      />
    </div>
  </div>
);

export default FAQ_Page;
