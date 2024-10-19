import React, { useState } from "react";

// Multi-step form component
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track the current step
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

  // Move to next or previous step
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-50 shadow-md">
      <h2 className="text-2xl font-bold mb-6">STEP {currentStep}/3</h2>

      <form onSubmit={handleSubmit}>
        {/* Step 1: General Information */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>
        )}

        {/* Step 2: Select Solutions */}
        {currentStep === 2 && (
          <div className="grid grid-cols-2 gap-4">
            {[
              "LTL",
              "FTL",
              "Flatbed",
              "Custom Brokerage",
              "Specialized",
              "International",
              "Air",
              "Ocean",
              "Hazmat",
              "Warehousing",
              "Other",
            ].map((solution) => (
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
        )}

        {/* Step 3: Additional Information */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="origin"
                placeholder="Origin"
                value={formData.origin}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="originPostal"
                placeholder="Postal Code"
                value={formData.originPostal}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                name="destination"
                placeholder="Destination"
                value={formData.destination}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="destinationPostal"
                placeholder="Postal Code"
                value={formData.destinationPostal}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <textarea
              name="specifics"
              placeholder="Specifics"
              value={formData.specifics}
              onChange={handleChange}
              className="input-field h-24"
            ></textarea>
            <textarea
              name="additionalInfo"
              placeholder="Additional Info"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="input-field h-24"
            ></textarea>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} className="btn-secondary">
              Previous Step
            </button>
          )}
          {currentStep < 3 ? (
            <button type="button" onClick={nextStep} className="btn-primary">
              Next Step
            </button>
          ) : (
            <button type="submit" className="btn-primary">
              Submit Now
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
