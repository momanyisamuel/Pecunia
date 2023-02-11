import React, { useEffect, useState } from "react";
import applicant from "../../../api/applicant";
import FileTable from "../Documents";
import FileUploader from "../FileUploader";

export default function StepThree(props) {
  return (
    <div>
      <form onSubmit={props.submit}>
        <div className="mb-12 flex">
          <div className="w-1/2">
            <div className="mb-2">
              <h3 className="mb-2 text-base font-bold">
                Are your parents alive?
              </h3>
              <div className="flex items-start space-x-3  mb-2">
                <input
                  type="radio"
                  id="choice1"
                  name="parentalStatus"
                  value="father"
                  onChange={props.handleCheckboxChange}
                />
                <label for="choice1" className="ml-2 text-sm">
                  Father
                </label>
              </div>
              <div className="flex items-start space-x-3 mb-2">
                <input
                  type="radio"
                  id="choice2"
                  name="parentalStatus"
                  value="mother"
                  onChange={props.handleCheckboxChange}
                />
                <label for="choice2" className="ml-2 text-sm">
                  Mother
                </label>
              </div>
              <div className="flex items-start space-x-3 ">
                <input
                  type="radio"
                  id="choice3"
                  name="parentalStatus"
                  value="both"
                  onChange={props.handleCheckboxChange}
                />
                <label for="choice3" className="ml-2 text-sm">
                  Both
                </label>
              </div>
            </div>
            <div className="mb-2">
              <h3 className="mb-2 text-base font-bold">
                If yes state whether employed or not
              </h3>
              <div className="flex items-start space-x-3  mb-2">
                <input
                  type="radio"
                  id="group1"
                  name="parentalEmploymentStatus"
                  value="yes"
                  onChange={props.handleCheckboxChange}
                />
                <label for="group1" className="ml-2 text-sm">
                  Yes
                </label>
              </div>
              <div className="flex items-start space-x-3  mb-2">
                <input
                  type="radio"
                  id="group2"
                  name="parentalEmploymentStatus"
                  value="no"
                  onChange={props.handleCheckboxChange}
                />
                <label for="group2" className="ml-2 text-sm">
                  No
                </label>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="sponsorshipCurrentlyAwarded"
                  className="block text-base font-bold mb-2"
                >
                  <span className="block mb-2">
                    Do you have any other sponsorship?{" "}
                  </span>
                  <span className="block">
                    If any how much money have been awarded this year?
                  </span>
                </label>
                <input
                  type="number"
                  className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                  name="sponsorshipCurrentlyAwarded"
                  onChange={props.handleChange}
                  placeholder="Amount awarded"
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="mb-2">
              <label
                htmlFor="yearOfStudy"
                className="block text-base font-bold mb-2"
              >
                Select programme
              </label>
              <select
                name="programme"
                value={props.formData.programme}
                onChange={props.handleSelectChange}
                class=" w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose bursary program</option>
                {props?.programmes.map((item) => (
                  <>
                    <option value={item._id}>{item.programName}</option>
                  </>
                ))}
              </select>
            </div>
            <div className="w-3/4">
              <p className="mb-2 text-sm">
                Please upload relevant documents such as transcripts, student ID
                Cards, recomendation letters from your school and area
              </p>
              <div>
                {props.formData.programme ? (
                  <FileUploader programme={props.formData.programme} handleFileData={props.handleFileData} files={props.formData.files}/>
                ) : (
                  <p>Select programme above</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          className="inline-flex flex-row justify-center align-middle bg-gray-900 text-left text-gray-300 shadow-sm rounded-sm py-1.5 px-3 min-w-[30px] min-h-[30px]"
          onClick={props.prevStep}
        >
          Back
        </button>
        <button
          class="ml-6 inline-flex flex-row justify-center align-middle bg-green-600 text-left text-gray-300 shadow-sm rounded-sm py-1.5 px-3 min-w-[30px] min-h-[30px]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
