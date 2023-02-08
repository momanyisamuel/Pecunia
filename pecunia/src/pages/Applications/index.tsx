import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import applicant from "../../api/applicant";
import Records from "../DashBoard/Records";
import Pagination from "../DashBoard/Pagination";

export default function Applications() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const getTableData = async () => {
    try {
      const applicants = await applicant.get("api/applicant/");
      setData(applicants.data.data);
      setLoading(false);
      console.log(applicants.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  return (
    <div>
      <Layout>
        <div className="body">
          <div className="applicants m-0 mx-auto w-10/12">
            <div className="my-2 flex justify-between">
              <div className="m">
                <h3 className="mb-1 mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
                  Applications
                </h3>
                {/* <p className="text-[14px] text-gray-500">
                  An Overview of all your programme applications.
                </p> */}
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <button className="inline-flex flex-row justify-center align-middle border text-left text-gray-800 shadow-sm rounded-sm px-2 py-1 min-w-[30px] min-h-[30px]">
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
                </div>
                <div>
                  <button className="inline-flex flex-row justify-center align-middle border text-left text-gray-800 shadow-sm rounded-sm px-2 py-1 min-w-[30px] min-h-[30px]">
                    <span className="block fill-current mr-2">
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
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </span>
                    <span className="">Create application</span>
                  </button>
                </div>
                <div>
                  <button className="inline-flex flex-row justify-center align-middle bg-[#2D5BFF] text-left text-white shadow-sm rounded-sm px-2 py-1 min-w-[30px] min-h-[30px]">
                    <span className="block fill-current mr-2">
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
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </span>
                    <span className="">Invite Applicants</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-2 flex justify-between">
              <div className="">
                <p className="text-[14px] text-gray-500">
                  <span>112 </span>applications of <span>124,990</span>
                </p>
              </div>
              <div className="m">
                <p className="inline-block flex items-center text-[14px] text-blue-500">
                  <span className="pr-1">
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
                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                      />
                    </svg>
                  </span>
                  Edit Columns
                </p>
              </div>
            </div>
            <Records data={currentRecords} />
            <div className="mt-4">
              <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
