import React from "react";

export default function StepOne(props) {
  return (
    <div>
      <form className="w-full">
        <div className="mb-12 flex">
          <div className="side w-1/2">
            <div className="names mb-2">
              <label
                htmlFor="fullNames"
                className="block text-base font-bold mb-2"
              >
                Name Of Applicant
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="fullNames"
                value={props.formData.fullNames}
                onChange={props.handleChange}
                placeholder="Your Full Name"
              />
            </div>
            <div className="contact mb-2">
              <label
                htmlFor="personalContactInfo"
                className="block text-base font-bold mb-2"
              >
                Contact Information (phone number)
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="personalContactInfo"
                value={props.formData.personalContactInfo}
                onChange={props.handleChange}
                placeholder="Your phone number"
                id=""
              />
            </div>
            <div className="registrationNumber mb-2">
              <label
                htmlFor="registrationNumber"
                className="block text-base font-bold mb-2"
              >
                Admission/Registration Number
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="registrationNumber"
                value={props.formData.registrationNumber}
                onChange={props.handleChange}
                placeholder="Your Admission/Registration Number"
                id=""
              />
            </div>
            <div className="idNumber mb-2">
              <label
                htmlFor="idNumber"
                className="block text-base font-bold mb-2"
              >
                National Identity Card Number
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="idNumber"
                value={props.formData.idNumber}
                onChange={props.handleChange}
                placeholder="Your ID Number"
                id=""
              />
            </div>
          </div>
          <div className="side w-1/2">
            <div className="division mb-2">
              <label
                htmlFor="division"
                className="block text-base font-bold mb-2"
              >
                Division
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="division"
                value={props.formData.division}
                onChange={props.handleChange}
                placeholder="Your Division"
                id=""
              />
            </div>
            <div className="location mb-2">
              <label
                htmlFor="location"
                className="block text-base font-bold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="location"
                value={props.formData.location}
                onChange={props.handleChange}
                placeholder="Your Location"
                id=""
              />
            </div>
            <div className="sublocation mb-3">
              <label
                htmlFor="subLocation"
                className="block text-base font-bold mb-2"
              >
                Sublocation
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="subLocation"
                value={props.formData.subLocation}
                onChange={props.handleChange}
                placeholder="Your Sublocation"
                id=""
              />
            </div>
          </div>
        </div>
        <button
          className="inline-flex flex-row justify-center align-middle bg-blue-600 text-left text-gray-300 shadow-sm rounded-sm py-1.5 px-3 min-w-[30px] min-h-[30px]"
          onClick={props.nextStep}
        >
          Next
        </button>
      </form>
    </div>
  );
}
