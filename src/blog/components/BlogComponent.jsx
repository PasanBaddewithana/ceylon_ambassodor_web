import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import FontAwesome icons

function BlogPost({ date, title, description, imageUrl }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="max-w-5xl mx-auto my-12 p-6 bg-white overflow-hidden">
      {/* Image Section */}
      <div className="w-full">
        <img
          src={imageUrl}
          alt="blog post image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="p-8">
        <div className="text-gray-500 text-sm mb-3">
          {date} | Ceylon Ambassador
        </div>
        <h2 className="text-3xl font-bold text-customBlue mb-6">{title}</h2>

        <p className="text-customBlue leading-relaxed mb-6">
          {showFullDescription
            ? description
            : `${description.slice(0, 150)}...`}{" "}
          {/* Show a preview of the description */}
        </p>

        {showFullDescription && (
          <div>
            <p className="text-customBlue mb-4 font-semibold">
              Local Expertise in Global Markets
            </p>
            <p className="text-customBlue mb-6">
              What sets Ceylon Ambassador apart is its combination of global
              reach and local expertise. Their teams on the ground understand
              the unique requirements of each market, from customs regulations
              to cultural nuances, ensuring smooth operations and overcoming
              logistical challenges. This local knowledge is invaluable for
              businesses looking to expand internationally with minimal risks.
            </p>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={handleToggleDescription}
          className="text-customBlue hover:text-blue-800 font-semibold flex items-center gap-2"
        >
          <div className="w-6 h-6 flex items-center justify-center bg-customBlue font-bold text-white rounded-full">
            {showFullDescription ? <FaMinus /> : <FaPlus />}
          </div>
          {showFullDescription ? (
            "Read Less"
          ) : (
            <>
              {"Read More"} <br /> {"About This"}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default BlogPost;
