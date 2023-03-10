import React, { useState } from "react";
import applicant from "../../api/applicant";
import Layout from "../Layout";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    applicant
      .post("/signup", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        window.location.replace("/");
      });
  };
  return (
    <div>
      <Layout>
        <div className="body">
          <div className="title py-6 bg-gray-600 text-white">
            <div className="contain m-0 mx-auto w-10/12">
              <h1 className="font-bold text-4xl">
                Please provide the following details.
              </h1>
            </div>
          </div>
          <div className="form mt-6">
            <form onSubmit={onFormSubmit}>
              <div className="wrapper m-0 mx-auto w-10/12">
                <div className="email mb-2">
                  <label
                    htmlFor="email"
                    className="block text-base font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="block border border-gray-300 shadow-inner py-2 px-2 w-1/3 rounded"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="password mb-2">
                  <label
                    htmlFor="password"
                    className="block text-base font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="block border border-gray-300 shadow-inner py-2 px-2 w-1/3 rounded"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                    id=""
                  />
                </div>
                <div className="passwordAgain mb-2">
                  <label
                    htmlFor="passwordAgain"
                    className="block text-base font-bold mb-2"
                  >
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="block border border-gray-300 shadow-inner py-2 px-2 w-1/3 rounded"
                    name="passwordAgain"
                    placeholder="Confirm New Password"
                    id=""
                  />
                </div>
                <button class="inline-flex flex-row justify-center align-middle bg-gray-600 text-left text-gray-300 shadow-sm rounded-sm py-1.5 px-3 min-w-[30px] min-h-[30px]">
                  <span class="">Sign up</span>
                </button>
                <p className="mt-4">
                  Already have an account?{" "}
                  <span className="text-blue-400 underline">
                    <a href="/">Sign in now</a>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default SignUp;
