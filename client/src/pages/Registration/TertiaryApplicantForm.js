import React, { useEffect, useState } from "react";
import applicant from "../../api/applicant";
import Layout from "../Layout";

function TertiaryApplicantForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [fileUrl, setFileUrl] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("user"));
  
  useEffect(()=>{
    setFormData({
      ...formData,
      "userId" : currentUser.user._id
    })
  },[])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleSelectChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.options[event.target.selectedIndex].value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    applicant.post("api/applicant/", formData).then((result) => {
      console.log(result);
      window.location.replace("/dashboard");
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      <Layout>
        <div className="body">
          <div className="title py-2 mb-4 mt-4">
            <div className="contain m-0 mx-auto w-10/12">
              <h1 className="font-bold text-2xl">
                Apply for bursary, please provide the following details.
              </h1>
              <div className="mt-4 flex justify-between gap-x-2">
                <div
                  className={
                    currentStep === 1
                      ? "step border-t-4 border-blue-800  flex-1"
                      : "step border-t-4 border-gray-400  flex-1"
                  }
                >
                  <p
                    className={
                      currentStep === 1
                        ? "pt-4 text-blue-800 font-semibold"
                        : "pt-4 font-semibold text-gray-700"
                    }
                  >
                    Step 1
                  </p>
                  <p className="font-semibold text-gray-900">
                    Personal Information
                  </p>
                </div>
                <div
                  className={
                    currentStep === 2
                      ? "step border-t-4 border-blue-800  flex-1"
                      : "step border-t-4 border-gray-400  flex-1"
                  }
                >
                  <p
                    className={
                      currentStep === 2
                        ? "pt-4 text-blue-800 font-semibold"
                        : "pt-4 font-semibold text-gray-700"
                    }
                  >
                    Step 2
                  </p>
                  <p className="font-semibold text-gray-900">
                    Institution Information
                  </p>
                </div>
                <div
                  className={
                    currentStep === 3
                      ? "step border-t-4 border-blue-800  flex-1"
                      : "step border-t-4 border-gray-400  flex-1"
                  }
                >
                  <p
                    className={
                      currentStep === 3
                        ? "pt-4 text-blue-800 font-semibold"
                        : "pt-4 font-semibold text-gray-700"
                    }
                  >
                    Step 3
                  </p>
                  <p className="font-semibold text-gray-900">
                    Other Information
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="steps m-0 mx-auto w-10/12">
            {currentStep === 1 && (
              <Step1
                formData={formData}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                handleSelectChange={handleSelectChange}
                nextStep={nextStep}
              />
            )}
            {currentStep === 2 && (
              <Step2
                formData={formData}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                handleSelectChange={handleSelectChange}
                fileUrl={fileUrl}
                prevStep={prevStep}
                nextStep={nextStep}
              />
            )}
            {currentStep === 3 && (
              <Step3
                formData={formData}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                handleSelectChange={handleSelectChange}
                prevStep={prevStep}
                submit={handleSubmit}
              />
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}

function Step1(props) {
  return (
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
              onChange={props.handleChange}
              placeholder="Your Sublocation"
              id=""
            />
          </div>
          <div class="mb-2">
            <label
              htmlFor="nationalIdUrl"
              className="block text-base font-bold mb-2"
            >
              Upload Copy of National Identity Card
            </label>
            <div class="mb-8">
              <input
                type="file"
                name="nationalIdUrl"
                id="nationalIdUrl"
                className="sr-only"
                onChange={props.handleFileChange}
              />
              <label
                htmlFor="nationalIdUrl"
                className="relative flex w-3/4 items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-6 text-center"
              >
                <div>
                  <span className="mb-2 text-base font-semibold text-[#07074D] cursor-pointer">
                    Drop files here
                  </span>
                  <span className="mb-2 ml-4 text-sm font-medium text-[#6B7280]">
                    or
                  </span>
                  <span className="ml-4 inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] cursor-pointer">
                    Browse
                  </span>
                </div>
              </label>
            </div>
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
  );
}

function Step2(props) {
  return (
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
          <div class="mb-2">
            <label class="block text-base font-bold mb-2">
              Upload Reference Letter
            </label>
            <div class="mb-8">
              <input
                type="file"
                name="institutionReferenceUrl"
                id="institutionReferenceUrl"
                className="sr-only"
                onChange={props.handleFileChange}
              />
              <label
                for="institutionReferenceUrl"
                class="relative flex w-3/4 items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-6 text-center"
              >
                <div>
                  <span class="mb-2 text-base font-semibold text-[#07074D] cursor-pointer">
                    Drop files here
                  </span>
                  <span class="mb-2 ml-4 text-sm font-medium text-[#6B7280]">
                    or
                  </span>
                  <span class="ml-4 inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] cursor-pointer">
                    Browse
                  </span>
                </div>
              </label>
            </div>
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
              onChange={props.handleChange}
              placeholder="Amount of fees per year"
              id=""
            />
          </div>
          <div class="mb-2">
            <label class="block text-base font-bold mb-2">
              Upload Fees Statement
            </label>
            <div class="mb-8">
              <input
                type="file"
                name="feeStatementUrl"
                id="feeStatementUrl"
                className="sr-only"
                onChange={props.handleFileChange}
              />
              <label
                for="feeStatementUrl"
                class="relative flex w-3/4 items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-6 text-center"
              >
                <div>
                  <span class="mb-2 text-base font-semibold text-[#07074D] cursor-pointer">
                    Drop files here
                  </span>
                  <span class="mb-2 ml-4 text-sm font-medium text-[#6B7280]">
                    or
                  </span>
                  <span class="ml-4 inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] cursor-pointer">
                    Browse
                  </span>
                </div>
              </label>
            </div>
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
  );
}

function Step3(props) {
  return (
    <form onSubmit={props.submit}>
      <div className="mb-12 flex">
        <div className="w-1/2">
          <div className="mb-2">
            <h3 className="mb-2 text-base font-bold">
              Are your parents alive?
            </h3>
            <div className="flex items-start space-x-3 items-center mb-2">
              <input
                type="checkbox"
                name="parentalStatus"
                onChange={props.handleCheckboxChange}
                className="border-gray-300 rounded h-5 w-5"
              />
              <div class="flex flex-col">
                <h1 class="text-gray-700 font-medium leading-none">Father</h1>
              </div>
            </div>
            <div className="flex items-start space-x-3 items-center">
              <input
                type="checkbox"
                className="border-gray-300 rounded h-5 w-5"
              />
              <div class="flex flex-col">
                <h1 class="text-gray-700 font-medium leading-none">Mother</h1>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <h3 className="mb-2 text-base font-bold">
              If yes state whether employed or not
            </h3>
            <div className="flex items-start space-x-3 items-center mb-2">
              <input
                type="checkbox"
                name="parentalEmploymentStatus"
                onChange={props.handleCheckboxChange}
                className="border-gray-300 rounded h-5 w-5"
              />
              <div class="flex flex-col">
                <h1 class="text-gray-700 font-medium leading-none">Yes</h1>
              </div>
            </div>
            <div className="flex items-start space-x-3 items-center mb-2">
              <input
                type="checkbox"
                name="parentalEmploymentStatus"
                onChange={props.handleCheckboxChange}
                className="border-gray-300 rounded h-5 w-5"
              />
              <div class="flex flex-col">
                <h1 class="text-gray-700 font-medium leading-none">No</h1>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="sponsorshipCurrentlyAwarded"
              className="block text-base font-bold mb-2"
            >
              <span className="block">Do you have any other sponsorship? </span>
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
          <div class="mb-2">
            <label class="block text-base font-bold mb-2">
              Chief's/Ass. Chief's Certification.
            </label>
            <div class="mb-8">
              <input
                type="file"
                name="chiefReferenceUrl"
                id="chiefReferenceUrl"
                className="sr-only"
                onChange={props.handleFileChange}
              />
              <label
                for="chiefReferenceUrl"
                class="relative flex w-3/4 items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-6 text-center"
              >
                <div>
                  <span class="mb-2 text-base font-semibold text-[#07074D] cursor-pointer">
                    Drop files here
                  </span>
                  <span class="mb-2 ml-4 text-sm font-medium text-[#6B7280]">
                    or
                  </span>
                  <span class="ml-4 inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] cursor-pointer">
                    Browse
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div class="mb-2">
            <label class="block text-base font-bold mb-2">
              Copy of university/college card.
            </label>
            <div class="mb-8">
              <input
                type="file"
                name="institutionIdUrl"
                id="institutionIdUrl"
                className="sr-only"
                onChange={props.handleFileChange}
              />
              <label
                for="institutionIdUrl"
                class="relative flex w-3/4 items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-6 text-center"
              >
                <div>
                  <span class="mb-2 text-base font-semibold text-[#07074D] cursor-pointer">
                    Drop files here
                  </span>
                  <span class="mb-2 ml-4 text-sm font-medium text-[#6B7280]">
                    or
                  </span>
                  <span class="ml-4 inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] cursor-pointer">
                    Browse
                  </span>
                </div>
              </label>
            </div>
          </div>
          <div class="mb-2">
            <label class="block text-base font-bold mb-2">
              Copy of letter of admission.
            </label>
            <div class="mb-8">
              <input
                type="file"
                name="institutionAdmissionUrl"
                id="institutionAdmissionUrl"
                className="sr-only"
                onChange={props.handleFileChange}
              />
              <label
                for="institutionAdmissionUrl"
                class="relative flex w-3/4 items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-6 text-center"
              >
                <div>
                  <span class="mb-2 text-base font-semibold text-[#07074D] cursor-pointer">
                    Drop files here
                  </span>
                  <span class="mb-2 ml-4 text-sm font-medium text-[#6B7280]">
                    or
                  </span>
                  <span class="ml-4 inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] cursor-pointer">
                    Browse
                  </span>
                </div>
              </label>
            </div>
          </div>
          <div class="mb-2">
            <label class="block text-base font-bold mb-2">
              Copy of previous semester transcript.
            </label>
            <div class="mb-8">
              <input
                type="file"
                name="institutionTranscriptUrl"
                id="institutionTranscriptUrl"
                className="sr-only"
                onChange={props.handleFileChange}
              />
              <label
                for="institutionTranscriptUrl"
                class="relative flex w-3/4 items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-6 text-center"
              >
                <div>
                  <span class="mb-2 text-base font-semibold text-[#07074D] cursor-pointer">
                    Drop files here
                  </span>
                  <span class="mb-2 ml-4 text-sm font-medium text-[#6B7280]">
                    or
                  </span>
                  <span class="ml-4 inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] cursor-pointer">
                    Browse
                  </span>
                </div>
              </label>
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
  );
}

export default TertiaryApplicantForm;
