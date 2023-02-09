import React from "react";

export default function StepTwo(props) {
  return (
    <div>
      <form>
        <div className="mb-12 flex">
          <div className="side w-1/2">
            <div className="mb-2">
              <label
                htmlFor="institutionName"
                className="block text-base font-bold mb-2"
              >
                Name of institution
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="institutionName"
                value={props.formData.institutionName}
                onChange={props.handleChange}
                placeholder="Your Institution Name"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="institutionAddress"
                className="block text-base font-bold mb-2"
              >
                Institution Address
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="institutionAddress"
                value={props.formData.institutionAddress}
                onChange={props.handleChange}
                placeholder="Your institution Address"
                id=""
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="institutionHead"
                className="block text-base font-bold mb-2"
              >
                Name of principal
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="institutionHead"
                value={props.formData.institutionHead}
                onChange={props.handleChange}
                placeholder="Your principal names"
                id=""
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="courseName"
                className="block text-base font-bold mb-2"
              >
                Name of course
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="courseName"
                value={props.formData.courseName}
                onChange={props.handleChange}
                placeholder="Course Name"
                id=""
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="yearOfStudy"
                className="block text-base font-bold mb-2"
              >
                Current Year of study
              </label>
              <select
                name="yearOfStudy"
                value={props.formData.yearOfStudy}
                onChange={props.handleSelectChange}
                class=" w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose your year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
          <div className="side w-1/2">
            <div className="mb-2">
              <label
                htmlFor="yearOfCompletion"
                className="block text-base font-bold mb-2"
              >
                Expected year of completion
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="yearOfCompletion"
                value={props.formData.yearOfCompletion}
                onChange={props.handleChange}
                placeholder="Year Of Completion"
                id=""
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="feesPerYear"
                className="block text-base font-bold mb-2"
              >
                Fees Payable per year/term
              </label>
              <input
                type="text"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="feesPerYear"
                value={props.formData.feesPerYear}
                onChange={props.handleChange}
                placeholder="Amount of fees per year"
                id=""
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="outstandingFees"
                className="block text-base font-bold mb-2"
              >
                Outstanding Balance
              </label>
              <input
                type="number"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="outstandingFees"
                value={props.formData.outstandingFees}
                onChange={props.handleChange}
                placeholder="Amount of fees per year"
                id=""
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="totalFees"
                className="block text-base font-bold mb-2"
              >
                Total Payable Until Completion
              </label>
              <input
                type="number"
                className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                name="totalFees"
                value={props.formData.totalFees}
                onChange={props.handleChange}
                placeholder="Amount of fees per year"
                id=""
              />
            </div>
          </div>
        </div>
        <div className="nav">
          <button
            className="inline-flex flex-row justify-center align-middle bg-gray-900 text-left text-gray-300 shadow-sm rounded-sm py-1.5 px-3 min-w-[30px] min-h-[30px]"
            onClick={props.prevStep}
          >
            Back
          </button>
          <button
            className="ml-6 inline-flex flex-row justify-center align-middle bg-blue-600 text-left text-gray-300 shadow-sm rounded-sm py-1.5 px-3 min-w-[30px] min-h-[30px]"
            onClick={props.nextStep}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
