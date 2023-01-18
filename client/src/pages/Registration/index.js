import React, { useState } from "react";
import Layout from "../Layout";

function Registration() {
 
  return (
    <div>
      <Layout>
        <div className="body">
          <div className="title py-6 text-gray-700">
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
          <div className="body">
            <div className="m-0 mx-auto w-10/12">
              <div className="mt-8">
                <div className="categories">
                  <h3 className="font-light text-xl text-gray-700 mb-4">
                    Current Registration(2022-2023)
                  </h3>
                  <ul>
                    <h3 className="text-blue-600 font-bold text-2xl">
                      <a href="/registration/secondary">
                        IJARA Constituency Secondary School Bursary Registration
                      </a>
                    </h3>
                    <p className="mb-6 text-base text-[#333333]">
                      Visit for Financial/Year: 2022-2023 application details
                    </p>
                    <h3 className="text-blue-600 font-bold text-2xl">
                      <a href="/registration/university">
                        IJARA Constituency University Bursary Registration
                      </a>
                    </h3>
                    <p className="mb-6 text-base text-[#333333]">
                      Visit for Financial/Year: 2022-2023 application details
                    </p>
                  </ul>
                </div>
                <div className="applications mt-8">
                  <h3 className="font-light text-xl text-gray-700 mb-4">
                    Your Applications (1)
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
                        <tr className="border-b">
                          <td className="pl-4">Samel</td>
                          <td><span className="border p-1 border-red-400 text-red-400">pending</span></td>
                          <td>KES 300,000</td>
                        </tr>
                      </tbody>
                    </table>
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

export default Registration;
