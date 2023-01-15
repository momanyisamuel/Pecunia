import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import applicant from "../../api/applicant";

function DashBoard() {
  const [data, setData] = useState();
  const getTableData = async () => {
    try {
      const applicants = await applicant.get("api/applicant/");
      setData(applicants.data.data);
      console.log(applicants.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <div>
      <Layout>
        <div className="body">
          <div className="applicants m-0 mx-auto w-10/12">
            <h3 className="mb-4 mt-5 text-3xl">List of applicants</h3>
            <div className="table w-full">
              <table className="w-full border rounded">
                <thead className="w-full text-left text-gray-900 text-base">
                  <tr className="w-full border-b">
                    <th className="pl-4 py-4">Name</th>
                    <th className="py-4">Location</th>
                    <th className="py-4">Institution</th>
                    <th className="py-4">Application status</th>
                    <th className="py-4">Year of study</th>
                    <th className="py-4">Year of completion</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {data?.map((item, value) => (
                    <>
                      <tr className="border-b">
                        <td className="pl-4 py-4">{item.fullNames}</td>
                        <td className="py-4">{item.location}</td>
                        <td className="py-4">{item.institutionName}</td>
                        <td className="py-4"><span className="border p-1 border-red-400 text-red-400">{item.applicationStatus}</span></td>
                        <td className="py-4">{item.yearOfStudy}</td>
                        <td className="py-4">{item.yearOfCompletion}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <nav aria-label="Page navigation example">
                <ul class="inline-flex -space-x-px">
                  <li>
                    <a
                      href="#"
                      class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0  leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Previous
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      class="bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700  leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default DashBoard;
