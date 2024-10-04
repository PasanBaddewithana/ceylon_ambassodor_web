import React from "react";

function LastContent() {
  return (
    <div className="">
      {/* Header Section */}
      <header className="bg-white text-center p-8">
        <h1 className="text-4xl font-bold">Ceylon Ambassador</h1>
        <p className="text-gray-600">Let's Connect on Social Media</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-blue-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-blue-500">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-blue-500">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </header>

      {/* Companies Section */}
      <section className="bg-gray-100 p-8">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <img src="path_to_UFS_logo" alt="UFS" />
            <div className="flex justify-center space-x-2 mt-2">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <img src="path_to_Khmergate_logo" alt="Khmergate" />
            <div className="flex justify-center space-x-2 mt-2">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <img src="path_to_Aerofly_Aviation_logo" alt="Aerofly Aviation" />
            <div className="flex justify-center space-x-2 mt-2">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <img src="path_to_Brandpulse_logo" alt="Brandpulse" />
            <div className="flex justify-center space-x-2 mt-2">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url(path_to_skyscraper_image)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center">
            <blockquote className="text-2xl italic font-light">
              “Innovation isn’t just in our DNA, it’s in everything we do.”
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LastContent;
