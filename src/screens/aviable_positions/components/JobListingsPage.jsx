import React from "react";
import working_man from "../../../assets/workingMan.png";

const JobListingsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Section with Image and Text */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 py-16">
        {/* Image Section */}
        <div className="lg:w-1/2 px-4">
          <img
            src={working_man}
            alt="Shipping services"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 px-4 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Fast and professional shipping services
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            elementum, lacus a cursus hendrerit, lectus risus rhoncus nunc, sit
            amet accumsan.
          </p>

          <button className="flex items-center text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <span className="text-2xl font-bold mr-2">+</span>
            View more about our services
          </button>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Open positions
          </h2>

          {/* Job Listings Table */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-6 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase">
                    Position
                  </th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase">
                    Location
                  </th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase">
                    Type
                  </th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase"></th>
                </tr>
              </thead>
              <tbody>
                {/* Job Listing Rows */}
                {[
                  {
                    position: "Stocking Associate",
                    location: "Portland, US",
                    type: "Full Time",
                  },
                  {
                    position: "General Labour",
                    location: "Denver, US",
                    type: "Full Time",
                  },
                  {
                    position: "Warehouse Worker",
                    location: "Chicago, US",
                    type: "Full Time",
                  },
                  {
                    position: "Shipping and Receiving",
                    location: "New York, US",
                    type: "Full Time",
                  },
                ].map((job, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6 text-sm text-gray-800">
                      {job.position}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-800">
                      {job.location}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-800">
                      {job.type}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        + Send Message
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingsPage;
