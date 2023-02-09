import React, { useEffect, useState } from "react";
import applicant from "../../../api/applicant";
import Layout from "../../Layout";
import StepOne from "./stepone";
import StepThree from "./stepthree";
import StepTwo from "./steptwo";

function TertiaryApplicantForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [fileUrl, setFileUrl] = useState("");
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
      [event.target.name]: event.target.value,
    });
  };
  const handleFileData = (files) => {
    setFormData({
      ...formData,
      "files": files,
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
              <StepOne
                formData={formData}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                handleSelectChange={handleSelectChange}
                nextStep={nextStep}
              />
            )}
            {currentStep === 2 && (
              <StepTwo
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
              <StepThree
                formData={formData}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                handleSelectChange={handleSelectChange}
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

export default TertiaryApplicantForm;
