import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import applicant from "../../api/applicant";
import Review from "../../components/Review";
import Dropdown from "../../components/Review";
import Layout from "../Layout";

function Applicant() {
  const [applicantDetails, setApplicantDetails] = useState<any>();
  const { applicantId } = useParams();

  useEffect(() => {
    fetchApplicant();
  }, []);
  const fetchApplicant = async () => {
    try {
      const res = await applicant.get(`api/applicant/${applicantId}`);
      setApplicantDetails(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Layout>
        <div className="body">
          <div className="m-0 mx-auto w-10/12">
            <div className="heading py-4 ">
              <div className="breadcrumb font-base text-gray-400">
                <p className="text-xs">
                  <span className="text-[#2D5BFF]">
                    <a href="/applications">Applications</a>
                  </span>{" "}
                  / International Conference on Science Health and Medicine
                  (ICSHM) for {applicantDetails?.fullNames}
                </p>
              </div>
            </div>
            <div className="wrapper flex justify-between gap-3">
              <div className="left w-3/4">
                <div className="heading">
                  <h2 className="text-3xl font-extrabold">
                    International Conference on Science Health and Medicine
                    (ICSHM) for {applicantDetails?.fullNames}
                  </h2>
                </div>
                <div className="personal flex gap-3 mt-2 py-4 ">
                  <div className="name flex-1">
                    <h3 className="text-sm text-gray-500">Program</h3>
                    <p>{applicantDetails?.personalContactInfo}</p>
                  </div>
                  <div className="name flex-1">
                    <h3 className="text-sm text-gray-500">Requested</h3>
                    <p>{applicantDetails?.registrationNumber}</p>
                  </div>
                  <div className="name flex-1">
                    <h3 className="text-sm text-gray-500">Date recieved</h3>
                    <p>{applicantDetails?.division}</p>
                  </div>
                  <div className="name flex-1">
                    <h3 className="text-sm text-gray-500">Deadline</h3>
                    <p>{applicantDetails?.location}</p>
                  </div>
                </div>
                <div className="applicant w-full border-b">
                  <a href="" className="px-2 border-b border-[#2D5BFF]">
                    Application
                  </a>
                  <a href="" className="px-2 border-b border-transparent">
                    Documents
                  </a>
                  <a href="" className="px-2 border-b border-transparent">
                    Reviews
                  </a>
                  <a href="" className="px-2 border-b border-transparent">
                    Score
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-700 my-4">
                    Personal Information
                  </h3>
                  <div>
                    <div className="flex gap-6">
                      <p className="flex-1">Applicant Name</p>
                      <p className="flex-1">Anna Kwamboka</p>
                    </div>
                    <div className="flex gap-6">
                      <p className="flex-1">Email address</p>
                      <p className="flex-1">anna.kwamboka@mail.ke</p>
                    </div>
                    <div className="flex gap-6">
                      <p className="flex-1">School registration number</p>
                      <p className="flex-1">SP13/3056/23</p>
                    </div>
                    <div className="flex gap-6">
                      <p className="flex-1">Country of citizenship</p>
                      <p className="flex-1">Kenya</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-700 my-4">
                    Institution Information
                  </h3>
                  <div>
                    <div className="flex gap-6">
                      <p className="flex-1">Applicant Name</p>
                      <p className="flex-1">Anna Kwamboka</p>
                    </div>
                    <div className="flex gap-6">
                      <p className="flex-1">Email address</p>
                      <p className="flex-1">anna.kwamboka@mail.ke</p>
                    </div>
                    <div className="flex gap-6">
                      <p className="flex-1">School registration number</p>
                      <p className="flex-1">SP13/3056/23</p>
                    </div>
                    <div className="flex gap-6">
                      <p className="flex-1">Country of citizenship</p>
                      <p className="flex-1">Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right w-1/4">
                <div className="profile">
                  <div className="w-full h-[232px] bg-slate-300"></div>
                  <div className="actions w-full my-4">
                    <Review />
                    <button className="w-full mt-2 inline-flex flex-row justify-center align-middle border text-left text-gray-700 shadow-sm rounded-sm px-2 py-1 min-w-[30px] min-h-[30px]">
                      <span className="">More actions</span>
                      <span className="block fill-current ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </span>
                    </button>

                    <div className="notes mt-3">
                      <div className="header flex justify-between">
                        <p className="text-base">Notes</p>
                        <p className="text-[#2D5BFF] flex items-center text-xs">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6v12m6-6H6"
                              />
                            </svg>
                          </span>
                          Add note
                        </p>
                      </div>
                      <div className="notes mt-2">
                        <div>
                          <p className="text-sm text-gray-800">
                            She has some volunteering experience at the COVID
                            hospital so lets +5
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Nathan Obore
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="notes mt-3">
                      <div className="header flex justify-between">
                        <p className="text-base">Tags</p>
                        <p className="text-[#2D5BFF] flex items-center text-xs">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6v12m6-6H6"
                              />
                            </svg>
                          </span>
                          Add tags
                        </p>
                      </div>
                      <div className="notes mt-2">
                        <div className="flex h-full flex-wrap gap-1">
                          <span className="inline-block py-1 px-2 bg-gray-100 text-[#6B7280] p-2 rounded-2xl text-xs">
                            disability
                          </span>
                          <span className="inline-block py-1 px-2 bg-gray-100 text-[#6B7280] p-2 rounded-2xl text-xs">
                            special needs
                          </span>
                          <span className="inline-block py-1 px-2 bg-gray-100 text-[#6B7280] p-2 rounded-2xl text-xs">
                            top performer
                          </span>
                          <span className="inline-block py-1 px-2 bg-gray-100 text-[#6B7280] p-2 rounded-2xl text-xs">
                            volunteer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Applicant;
