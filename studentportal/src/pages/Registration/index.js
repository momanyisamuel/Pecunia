import React, { useEffect, useState } from "react";
import applicant from "../../api/applicant";
import Layout from "../Layout";
import Documents from "./Documents";

function Registration() {
  const [data, setData] = useState();

  const fetchApplications = async () => {
    const currentUser = JSON.parse(localStorage.getItem("user"))
    const userId = currentUser.user._id 
    try {
      const res = await applicant.get(`api/applicant/applications/${userId}`)
      console.log(res.data.data)
      setData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
      fetchApplications()
  },[])
  return (
    <div className="overflow-hidden">
      <Layout>
        <div className="body relative">
          <div className="title pt-6 pb-24 text-gray-700 bg-gradient-to-r from-cyan-50 to-cyan-200">
            <div className="contain m-0 mx-auto w-10/12">
              <h1 className="font-bold text-4xl">
                Welcome to IJARA Constituency Bursary Portal
              </h1>
              <p className="mt-4">
                This portal is the official CDF Bursary application platform for
                residents of IJARA. Residents can apply <br />
                for bursary allocation acording to their institution level. for
                further questions visit the website or <br /> send an email at
                ngijaracdf@gmail.com.
              </p>
            </div>
          </div>
          <div className="absolute  top-52 left-1/2 right-0 mx-0 w-[84%] ">
            <div className="flex relative left-[-50%]  w-full  gap-2">
              <div className="categories w-[30%] bg-white shadow-md p-5 h-2/3">
                <h3 className="text-base text-gray-800 mb-4 font-semibold uppercase">
                  Applications
                </h3>
                <ul>
                  <h3 className="text-blue-600 font-bold text-2xl">
                    <a href="/registration/secondary">
                      IJARA Constituency Secondary School Bursary Registration
                    </a>
                  </h3>
                  <p className="mb-6 text-base text-[#333333]">
                    Year: 2022-2023 Bursary applications
                  </p>
                  <h3 className="text-blue-600 font-bold text-2xl">
                    <a href="/registration/university">
                      IJARA Constituency University Bursary Registration
                    </a>
                  </h3>
                  <p className="mb-6 text-base text-[#333333]">
                    Year: 2022-2023 Bursary applications
                  </p>
                </ul>
              </div>
              <div className="w-[70%] bg-white p-5">
                <div className="">
                  <div className="a">
                    <h3 className="text-base text-gray-800 mb-4 font-semibold uppercase">
                      Your Documents
                    </h3>
                    <Documents />
                  </div>
                  <div className="applications mt-8">
                    <h3 className="text-base text-gray-800 mb-4 font-semibold uppercase">
                      Your Applications
                    </h3>
                    <div>
                      <table className="w-full border rounded">
                        <thead className="text-left text-gray-900 text-base">
                          <tr className="border-b">
                            <th className="pl-4">Application</th>
                            <th>Status</th>
                            <th>Amount Awarded</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data ? (
                            <tr className="border-b">
                              <td className="pl-4">{data?.fullNames}</td>
                              <td>
                                <span className="border p-1 border-red-400 text-red-400">
                                  {data?.applicationStatus}
                                </span>
                              </td>
                              <td>0</td>
                            </tr>
                          ) : (
                            <>
                              <tr>
                                <td colSpan={3} className="pl-4">
                                  No Applications
                                </td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body pb-72">
          
        </div>
        <div className="body pb-96">
          
        </div>
      </Layout>
    </div>
  );
}

export default Registration;
