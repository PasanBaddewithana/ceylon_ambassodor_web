import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import DOMPurify from "dompurify";

function BlogPost({ date, title, description, imageUrl, fullContent }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const sanitizedContent = DOMPurify.sanitize(fullContent);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="max-w-5xl mx-auto my-12 p-6 bg-white overflow-hidden shadow-md rounded-lg">
      {/* Image Section */}
      <div className="w-full">
        <img
          src={imageUrl}
          alt="blog post"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="p-8">
        <div className="text-gray-500 text-sm mb-3">
          {date} | Ceylon Ambassador {/* Or pass an author prop */}
        </div>
        <h2 className="text-3xl font-bold text-customBlue mb-6">{title}</h2>

        <div
          className="text-customBlue leading-relaxed mb-6"
          dangerouslySetInnerHTML={{
            __html: showFullDescription
              ? sanitizedContent
              : DOMPurify.sanitize(`${description.slice(0, 150)}...`),
          }}
        />

        {/* Toggle Button */}
        <button
          onClick={handleToggleDescription}
          className="text-customBlue hover:text-blue-800 font-semibold flex items-center gap-2"
        >
          <div className="w-6 h-6 flex items-center justify-center bg-customBlue font-bold text-white rounded-full">
            {showFullDescription ? <FaMinus /> : <FaPlus />}
          </div>
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default BlogPost;
