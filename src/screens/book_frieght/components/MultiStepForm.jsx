import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { backend_url } from "../../../url";

// Multi-step form component
const MultiStepForm = ({ currentStep, nextStep, prevStep }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    website: "",
    solutions: [],
    origin: "",
    destination: "",
    originPostal: "",
    destinationPostal: "",
    specifics: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Handle checkbox selection for solutions
      setFormData((prevData) => ({
        ...prevData,
        solutions: checked
          ? [...prevData.solutions, value]
          : prevData.solutions.filter((solution) => solution !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate_form = () => {
    let formErrors = {};
    let formIsValid = true;

    // Validate origin
    if (formData.origin.trim() === "") {
      formErrors.origin = "Origin is required";
      formIsValid = false;
    }
    // Validate destination
    if (formData.destination.trim() === "") {
      formErrors.destination = "Destination is required";
      formIsValid = false;
    }

    // Validate origin postal code
    if (formData.originPostal.trim() === "") {
      formErrors.originPostal = "Origin postal code is required";
      formIsValid = false;
    }

    // Validate destination postal code
    if (formData.destinationPostal.trim() === "") {
      formErrors.destinationPostal = "Destination postal code is required";
      formIsValid = false;
    }

    //validate specifics
    if (formData.specifics.trim() === "") {
      formErrors.specifics = "Specifics is required";
      formIsValid = false;
    }

    setErrors(formErrors);
    return formIsValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form before submission
    if (validate_form()) {
      try {
        const response = await axios.post(
          `${backend_url}/form/submit`,
          formData
        );

        console.log("Form Submitted:", response.data);
        alert("Form submitted successfully!");
        navigate("/");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      }
    } else {
      console.log("Validation failed.");
    }
  };

  // Function to validate form
  const validate_form_1 = () => {
    let tempErrors = {};
    let isValid = true;

    // Check only section one fprmdata only
    // Validate first name
    if (formData.firstName.trim() === "") {
      tempErrors.firstName = "First name is required";
      isValid = false;
    }

    // Validate last name
    if (formData.lastName.trim() === "") {
      tempErrors.lastName = "Last name is required";
      isValid = false;
    }

    // Validate company
    if (formData.company.trim() === "") {
      tempErrors.company = "Company is required";
      isValid = false;
    }

    // Validate website
    if (formData.website.trim() === "") {
      tempErrors.website = "Website is required";
      isValid = false;
    }

    // Validate phone number (example format: 10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Current Step:", currentStep);
    console.log("Errors:", errors);
    console.log("Result : ", validate_form_1());
    if (currentStep === 1) {
      if (validate_form_1()) {
        console.log("Form 1 is valid");
        nextStep(e);
      } else {
      }
    }
    if (currentStep === 2) {
      if (formData.solutions.length > 0) {
        nextStep(e);
      } else {
        setErrors({
          ...errors,
          solutions: "Please select at least one solution",
        });
        alert("Please select at least one solution");
      }
    }
  };

  return (
    <div className="py-10 mx-auto p-8 font-Montserrat ">
      <form onSubmit={handleSubmit}>
        {/* Step 1: General Information */}
        {currentStep === 1 && (
          <div className="max-w-6xl mx-auto mt-8 mb-8">
            <h2 className="text-4xl font-extrabold text-customBlue mb-16 font-MontserratSemiBold">
              General Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* First Name */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue"
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue"
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                )}
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue"
                />
                {errors.company && (
                  <p className="text-xs text-red-500 mt-1">{errors.company}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue"
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Website */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue"
                />
                {errors.website && (
                  <p className="text-xs text-red-500 mt-1">{errors.website}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Select Solutions */}
        {currentStep === 2 && (
          <div className="">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-extrabold text-customBlue mb-2 font-MontserratSemiBold">
                Please select a solution
              </h2>
              <p className="text-gray-500 mb-12">
                At least one feild is required *
              </p>
            </div>

            <div className="grid grid-cols-3 gap-x-8  lg:gap-x-64  gap-y-4 max-w-6xl mx-auto mb-16">
              <div className="space-y-2">
                {["LTL", "FTL", "Flatbed", "Custom Brokerage"].map(
                  (solution) => (
                    <label
                      key={solution}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        value={solution}
                        checked={formData.solutions.includes(solution)}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span>{solution}</span>
                    </label>
                  )
                )}
              </div>

              <div className="space-y-2">
                {["Specialized", "International", "Air", "Ocean"].map(
                  (solution) => (
                    <label
                      key={solution}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        value={solution}
                        checked={formData.solutions.includes(solution)}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span>{solution}</span>
                    </label>
                  )
                )}
              </div>

              <div className="space-y-2">
                {["Hazmat", "Warehousing", "Other"].map((solution) => (
                  <label key={solution} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={solution}
                      checked={formData.solutions.includes(solution)}
                      onChange={handleChange}
                      className="form-checkbox"
                    />
                    <span>{solution}</span>
                  </label>
                ))}
              </div>
            </div>
            {errors.solutions && (
              <p className="text-xs text-red-500 text-center">
                {errors.solutions}
              </p>
            )}
          </div>
        )}

        {/* Step 3: Additional Information */}
        {currentStep === 3 && (
          <div className="mx-auto space-y-4 max-w-7xl">
            {/* Origin and Postal Code */}
            <div className="flex gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="origin"
                  placeholder="Origin"
                  value={formData.origin}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue"
                />
                {errors.origin && (
                  <p className="text-xs text-red-500 mt-1">{errors.origin}</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="originPostal"
                  placeholder="Postal Code"
                  value={formData.originPostal}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue"
                />
                {errors.originPostal && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.originPostal}
                  </p>
                )}
              </div>
            </div>

            {/* Destination and Postal Code */}
            <div className="flex gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue"
                />
                {errors.destination && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.destination}
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="destinationPostal"
                  placeholder="Postal Code"
                  value={formData.destinationPostal}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue"
                />
                {errors.destinationPostal && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.destinationPostal}
                  </p>
                )}
              </div>
            </div>

            {/* Specifics Textarea */}
            <div>
              <textarea
                name="specifics"
                placeholder="Specifics"
                value={formData.specifics}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue h-24"
              ></textarea>
              {errors.specifics && (
                <p className="text-xs text-red-500 mt-1">{errors.specifics}</p>
              )}
            </div>

            {/* Additional Info Textarea */}
            <div>
              <textarea
                name="additionalInfo"
                placeholder="Additional Info"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-customBlue h-24"
              ></textarea>
              {errors.additionalInfo && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.additionalInfo}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-start mt-6">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="btn-primary flex items-center mt-6 ml-32"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous Step
            </button>
          )}
          {currentStep === 3 ? (
            <button
              type="submit"
              className="btn-primary flex items-center mt-6 ml-20"
            >
              Submit Now
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNextStep}
              className="btn-primary lg:ml-36 lg:mr-32 mt-6 flex items-center"
            >
              Next Step
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
