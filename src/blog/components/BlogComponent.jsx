import React from "react";

function BlogPost({ date, title, description, imageUrl }) {
  return (
    <div className="container mx-auto my-8 p-4 bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <img
          src={imageUrl}
          alt="blog image"
          className="w-full md:w-1/2 object-cover"
        />
        <div className="md:ml-4 mt-4 md:mt-0">
          <div className="text-gray-500">{date}</div>
          <h2 className="text-2xl font-bold mt-2">{title}</h2>
          <p className="mt-4">{description}</p>
          <a href="#" className="text-blue-600 mt-4 inline-block">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
