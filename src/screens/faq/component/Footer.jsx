import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Quote */}
        <p className="text-center text-lg mb-8 font-light">
          "Great brands are built on strong partnerships, and we’re here to be
          yours."
        </p>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm mb-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <img
              src="https://via.placeholder.com/150"
              alt="Ceylon Ambassador"
              className="mx-auto md:mx-0 mb-4"
            />
            <p>&copy; 2024 Ceylon Ambassador, All Rights Reserved</p>
          </div>

          {/* Our Divisions */}
          <div>
            <h3 className="font-semibold mb-4">Our Divisions</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Our Clients</li>
              <li>Meet The Crew</li>
              <li>Available Positions</li>
              <li>Job Application</li>
            </ul>
          </div>

          {/* Company Services */}
          <div>
            <h3 className="font-semibold mb-4">Company Service</h3>
            <ul className="space-y-2">
              <li>Our Services</li>
              <li>What We Do</li>
              <li>Request a Freight</li>
              <li>Track & Trace</li>
              <li>Air Freight</li>
              <li>Rail Freight</li>
              <li>Maritime Transport</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Find Us Here</li>
              <li>Get In Touch</li>
              <li>FAQ Page</li>
              <li>Global Network</li>
              <li>Support 24/7</li>
            </ul>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="font-semibold mb-4">Latest News</h3>
            <ul className="space-y-2">
              <li>Expert Tips</li>
              <li>A Sustainable Future</li>
              <li>Fresh Start</li>
              <li>Clean Spaces</li>
              <li>Tips & Strategies</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="text-center">
          <div className="space-x-4">
            <a href="#" className="inline-block">
              <img src="https://via.placeholder.com/24" alt="Facebook" />
            </a>
            <a href="#" className="inline-block">
              <img src="https://via.placeholder.com/24" alt="Instagram" />
            </a>
            <a href="#" className="inline-block">
              <img src="https://via.placeholder.com/24" alt="LinkedIn" />
            </a>
            <a href="#" className="inline-block">
              <img src="https://via.placeholder.com/24" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
