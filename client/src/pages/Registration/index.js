import React, { useState } from "react";
import applicant from "../../api/applicant";
import Layout from "../Layout";

function Registration() {
  const [fullNames, setFullNames] = useState("");
  const [personalContactInfo, setPersonalContactInfo] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [division, setDivision] = useState("");
  const [location, setLocation] = useState("");
  const [subLocation, setSubLocation] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [institutionAddress, setInstitutionAddress] = useState();
  const [institutionHead, setinstItutionHead] = useState();
  const [courseName, setCourseName] =  useState();
  const [yearOfStudy, setYearOfStudy] = useState();
  const [yearOfCompletion, setYearOfCompletion] = useState();
  const [feesPerYear, setFeesPerYear] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    applicant
      .post("api/applicant/", {
        fullNames,
        personalContactInfo,
        registrationNumber,
        idNumber,
        division,
        location,
        subLocation,
        institutionName,
        institutionAddress,
        institutionHead,
        courseName,
        yearOfStudy,
        yearOfCompletion,
        feesPerYear,
        applicationStatus: "pending",
      })
      .then((result) => {
        console.log(result);
        window.location.replace("/dashboard");
      });
  };
  return (
    <div>
      <Layout>
        <div className="body">
          <div className="title py-2">
            <div className="contain m-0 mx-auto w-10/12">
              <h1 className="font-bold text-2xl">
                Apply for bursary, please provide the following details.
              </h1>
            </div>
          </div>
          <div className="form mt-3">
            <div className="wrapper m-0 mx-auto w-10/12">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="div flex w-full">
                  <div className="side w-1/2">
                    <div className="names mb-2">
                      <label
                        htmlFor="names"
                        className="block text-base font-bold mb-2"
                      >
                        Names
                      </label>
                      <input
                        type="text"
                        className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                        name="names"
                        onChange={(event) => setFullNames(event.target.value)}
                        placeholder="Your full Names"
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
                        onChange={(event) =>
                          setPersonalContactInfo(event.target.value)
                        }
                        placeholder="Your phone number"
                        id=""
                      />
                    </div>
                    <div className="registrationNumber mb-2">
                      <label
                        htmlFor="registrationNumber"
                        className="block text-base font-bold mb-2"
                      >
                        Registration Number
                      </label>
                      <input
                        type="text"
                        className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                        name="registrationNumber"
                        onChange={(event) =>
                          setRegistrationNumber(event.target.value)
                        }
                        placeholder="Your Registration Number"
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
                        onChange={(event) => setIdNumber(event.target.value)}
                        placeholder="Your ID Number"
                        id=""
                      />
                    </div>
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
                        onChange={(event) => setDivision(event.target.value)}
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
                        onChange={(event) => setLocation(event.target.value)}
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
                        onChange={(event) => setSubLocation(event.target.value)}
                        placeholder="Your Sublocation"
                        id=""
                      />
                    </div>
                  </div>
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
                        onChange={(event) => setInstitutionName(event.target.value)}
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
                        onChange={(event) =>
                          setInstitutionAddress(event.target.value)
                        }
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
                        onChange={(event) =>
                          setinstItutionHead(event.target.value)
                        }
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
                        onChange={(event) => setCourseName(event.target.value)}
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
                      <input
                        type="text"
                        className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                        name="yearOfStudy"
                        onChange={(event) => setYearOfStudy(event.target.value)}
                        placeholder="current Year Of Study"
                        id=""
                      />
                    </div>
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
                        onChange={(event) => setYearOfCompletion(event.target.value)}
                        placeholder="Year Of Completion"
                        id=""
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="feesPerYear"
                        className="block text-base font-bold mb-2"
                      >
                        Fees Payable per year
                      </label>
                      <input
                        type="text"
                        className="block border border-gray-300 shadow-inner py-2 px-2 w-3/4 rounded"
                        name="feesPerYear"
                        onChange={(event) => setFeesPerYear(event.target.value)}
                        placeholder="Amount of fees per year"
                        id=""
                      />
                    </div>
                  </div>
                </div>
                <button class="inline-flex flex-row justify-center align-middle bg-gray-600 text-left text-gray-300 shadow-sm rounded-sm py-1.5 px-3 min-w-[30px] min-h-[30px]">
                  <span class="">Apply</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Registration;
