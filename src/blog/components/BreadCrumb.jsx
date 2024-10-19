import React from "react";
import { Link } from "react-router-dom"; // Optional, if you're using React Router

function Breadcrumb() {
  return (
    <div className=" container  text-gray-600 text-sm font-medium py-4 px-6">
      <nav className="max-w-5xl flex space-x-2">
        <Link to="/" className="hover:text-customBlue">
          Home
        </Link>
        <span>|</span>
        <Link to="/blog" className="hover:text-customBlue">
          Blog
        </Link>
        <span>|</span>
        <span className="text-gray-800">Page 01</span>
      </nav>
    </div>
  );
}

export default Breadcrumb;
