import React from "react";

const CountryInfo = ({ country, description, services, industries }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">{country}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-white">
          <span className="font-semibold">Services: </span>
          {services}
        </p>
        <p className="text-white">
          <span className="font-semibold">Industries Served: </span>
          {industries}
        </p>
      </div>
    </div>
  );
};
