import React from "react";

const ContactComponent = () => {
  return (
    <div className="bg-customBlue text-white py-10 px-4">
      <div className="max-w-6xl mt-20  mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Section: Operating Locations */}
        <div>
          <h2 className="text-lg font-bold">CURRENTLY OPERATING</h2>
          <ul className="mt-4 space-y-2">
            <li>Colombo - Colombo</li>
            <li>Colombo - Colombo</li>
            <li>Colombo - Colombo</li>
            <li>Colombo - Colombo</li>
            <li>Colombo - Colombo</li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="bg-white text-customBlue p-8 w-full lg:w-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side: Contact 1 and Contact 2 */}
            <div className="space-y-8">
              {/* Contact 1 */}
              <div>
                <p className="text-sm">Support Center 24/7</p>
                <p className="text-3xl font-bold mt-2">+94 77 367 5054</p>
              </div>

              {/* Contact 2 */}
              <div>
                <p className="text-sm">Support Center 24/7</p>
                <p className="mt-2">info@ceylonambassador.com</p>
              </div>
            </div>

            {/* Right Side: Address */}
            <div className="justify-self-end">
              <p className="text-sm">Support Center 24/7</p>
              <p className="mt-2">
                No 91/1st Floor,
                <br />
                Kandy Road
                <br />
                Dalugama,
                <br />
                Kelaniya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
