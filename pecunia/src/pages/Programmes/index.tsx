import React, { useState, useEffect } from "react";
import applicant from "../../api/applicant";
import Layout from "../Layout";
import AddProgramme from "./AddProgramme";

export default function Programmes() {
  const [programmes, setProgrammes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [programmesPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    applicant
      .get("api/programme")
      .then((res) => {
        setProgrammes(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Get current programmes
  const indexOfLastProgramme = currentPage * programmesPerPage;
  const indexOfFirstProgramme = indexOfLastProgramme - programmesPerPage;
  const currentProgrammes = programmes.slice(
    indexOfFirstProgramme,
    indexOfLastProgramme
  );

  // Change page
  const paginate = (page: number) => setCurrentPage(page);

  return (
    <div>
      <Layout>
        <div className="body">
          <div className="applicants m-0 mx-auto w-10/12">
            <div className="my-2 flex justify-between">
              <div className="m">
                <h3 className="mb-1 mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
                  Programmes
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
                  <AddProgramme />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="container mx-auto">
                <table className="w-full text-left table-collapse">
                  <thead>
                    <tr>
                      <th className="text-sm font-medium p-3 bg-gray-100">
                        Programme Name
                      </th>
                      <th className="text-sm font-medium p-3 bg-gray-100">
                        Description
                      </th>
                      <th className="text-sm font-medium p-3 bg-gray-100">
                        Value
                      </th>
                      <th className="text-sm font-medium p-3 bg-gray-100">
                        Start Date
                      </th>
                      <th className="text-sm font-medium p-3 bg-gray-100">
                        End Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="p-5">
                          Loading...
                        </td>
                      </tr>
                    ) : (
                      currentProgrammes.map((programme:any) => (
                        <tr key={programme._id}>
                          <td className="p-3 border border-gray-200">
                            {programme.programName}
                          </td>
                          <td className="p-3 border border-gray-200">
                            {programme.description}
                          </td>
                          <td className="p-3 border border-gray-200">
                            {programme.value}
                          </td>
                          <td className="p-3 border border-gray-200">
                            {programme.startDate}
                          </td>
                          <td className="p-3 border border-gray-200">
                            {programme.endDate}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
                <div className="flex justify-center mt-5">
                  <nav className="flex text-base my-4">
                    {programmes.length > programmesPerPage && (
                      <ul className="flex">
                        {Array.from(
                          {
                            length: Math.ceil(
                              programmes.length / programmesPerPage
                            ),
                          },
                          (_, i) => (
                            <li
                              key={i}
                              className={`-mb-px mr-1 ${
                                i + 1 === currentPage
                                  ? "bg-indigo-500 text-white"
                                  : ""
                              }`}
                            >
                              <a
                                href="#"
                                className="block py-2 px-3 text-indigo-200 hover:bg-indigo-500 hover:text-white"
                                onClick={() => paginate(i + 1)}
                              >
                                {i + 1}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
