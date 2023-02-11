import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import applicant from "../../../api/applicant";
import StepThree from "../Tertiary/stepthree";

function SecondaryApplicantForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [fileUrl, setFileUrl] = useState();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [programmes, setProgrammes] = useState();

  useEffect(() => {
    const getProgrammes = async () => {
      try {
        const res = await applicant.get("/api/programme");
        setProgrammes(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProgrammes();
    setFormData({
      ...formData,
      userId: currentUser.user._id,
    });
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setFileUrl(event.target.files[0]);
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };
  const handleUploadClick = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("fileUrl", formData);
    console.log(form);
    try {
      await applicant.post("api/applicant/upload", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileData = (files) => {
    setFormData({
      ...formData,
      files: files,
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
                handleUploadClick={handleUploadClick}
                nextStep={nextStep}
              />
            )}
            {currentStep === 2 && (
              <Step2
                formData={formData}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                handleUploadClick={handleUploadClick}
                fileUrl={fileUrl}
                prevStep={prevStep}
                nextStep={nextStep}
              />
            )}
            {currentStep === 3 && (
              <StepThree
                formData={formData}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                prevStep={prevStep}
                submit={handleSubmit}
                programmes={programmes}
                handleFileData={handleFileData}
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
    <form className="w-full" enctype="multipart/form-data">
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
              htmlFor="guardianContactInfo"
              className="block text-base font-bold mb-2"
            >
              Parents Contact Information (phone number)
            </label>
            <input
              type="text"
              className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
              name="guardianContactInfo"
              onChange={props.handleChange}
              placeholder="Your parents phone number"
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
          <div className="class mb-2">
            <label htmlFor="class" className="block text-base font-bold mb-2">
              Class/Form
            </label>
            <input
              type="text"
              className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
              name="class"
              onChange={props.handleChange}
              placeholder="Your class/form"
              id=""
            />
          </div>
          <div className="class mb-2">
            <label htmlFor="class" className="block text-base font-bold mb-2">
              Expected year of completion
            </label>
            <input
              type="text"
              className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
              name="yearOfCompletion"
              onChange={props.handleChange}
              placeholder="Year"
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
    <form enctype="multipart/form-data">
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
        </div>
        <div className="side w-1/2">
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
    <form onSubmit={props.submit} enctype="multipart/form-data">
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
        </div>
        <div className="w-1/2"></div>
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

export default SecondaryApplicantForm;
