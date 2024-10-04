import React, { useState } from "react";

const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Get in Touch with Ceylon Ambassador
        </h1>
        <p className="text-center mt-4 text-gray-600">
          At Ceylon Ambassador, we believe in the power of meaningful
          connections. Whether you’re looking for more information about our
          services, need support, or are ready to embark on a new partnership,
          we’re here to help.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              How Can We Assist You?
            </h2>
            <p className="text-gray-600">
              Have a question about our logistics solutions? Interested in
              exploring our aviation services or travel packages? Looking to
              enhance your brand with cutting-edge strategies? We’d love to hear
              from you!
            </p>
            <div className="mt-8">
              <h3 className="font-semibold text-lg text-gray-700">
                Support Center 24/7
              </h3>
              <p className="text-xl font-bold text-gray-900">+94 77 367 5054</p>
              <p className="text-gray-600">info@ceylonambassador.com</p>
              <p className="mt-4 text-gray-600">
                No 91/ 1st Floor, Kandy Road, Dalugama, Kelaniya
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your message"
                  rows="4"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-2 rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
