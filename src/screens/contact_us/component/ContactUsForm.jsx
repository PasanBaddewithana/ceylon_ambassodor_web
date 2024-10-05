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
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen mt-10 py-10 px-4 sm:px-6 lg:px-8 text-customBlue">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl font-bold">
          Get in Touch with Ceylon Ambassador
        </h1>
        <p className="text-left mt-4">
          At Ceylon Ambassador, we believe in the power of meaningful
          connections. Whether you’re looking for more information about our
          services, need support, or are ready to embark on a new partnership,
          we’re here to help.
        </p>

        {/* Grid layout to divide screen into two equal pieces */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">How Can We Assist You?</h2>
            <p className="mt-4">
              Have a question about our logistics solutions? Interested in
              exploring our aviation services or travel packages? Looking to
              enhance your brand with cutting-edge strategies? We’d love to hear
              from you!
            </p>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Left Part: Phone number and email (3/4 part) */}
              <div className="lg:col-span-3">
                <h3 className="font-semibold text-lg">Support Center 24/7</h3>
                <p className="text-xl font-bold">+94 77 367 5054</p>
                <p className="text-gray-600">info@ceylonambassador.com</p>
              </div>

              {/* Right Part: Address (1/4 part) */}
              <div className="lg:col-span-1">
                <div className="mt-4  mr-4 text-center">
                  <h3 className="text-sm text-gray-600 mb-4">
                    Support Center 24/7
                  </h3>
                  <p className="font-semibold text-lg">
                    No 91/ 1st Floor, Kandy Road, Dalugama, Kelaniya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto lg:max-w-full">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="relative border-b border-gray-700">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="peer block w-full appearance-none focus:outline-none bg-transparent py-2 text-gray-700"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-6 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:left-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative border-b border-gray-700">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="peer block w-full appearance-none focus:outline-none bg-transparent py-2 text-gray-700"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-6 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:left-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Your Email
                </label>
              </div>

              {/* Message Field */}
              <div className="relative border-b border-gray-700">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  className="peer block w-full appearance-none focus:outline-none bg-transparent py-2 text-gray-700 h-24 resize-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-6 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:left-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Message
                </label>
              </div>

              {/* Add Button Icon */}
              <div className="relative flex items-center justify-start py-2 border-b border-gray-700">
                <span className="text-2xl text-gray-500">+</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-start  py-3 px-4 bg-customBlue text-white"
              >
                <span className="mr-2 text-lg">+</span>
                <span className="text-lg font-medium">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
