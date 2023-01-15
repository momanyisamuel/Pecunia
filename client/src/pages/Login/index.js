import React, { useState } from "react";
import { authService } from "../../helpers/auth";
import Layout from "../Layout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    authService.login(email, password).then((user) => {
      window.location.replace("/dashboard");
    });
  };

  return (
    <div>
      <Layout>
        <div className="body">
          <div className="title py-6 bg-gray-600 text-white">
            <div className="contain m-0 mx-auto w-10/12">
              <h1 className="font-bold text-4xl">
                Sign in with your existing account.
              </h1>
            </div>
          </div>
          <div className="form mt-6">
            <div className="wrapper m-0 mx-auto w-10/12">
              <form onSubmit={onFormSubmit}>
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
                <button class="inline-flex flex-row justify-center align-middle bg-gray-600 text-left text-gray-300 shadow-sm rounded-sm py-1.5 px-3 min-w-[30px] min-h-[30px]">
                  <span class="">Sign in</span>
                </button>
                <p className="mt-4">
                  Don't have an account?{" "}
                  <span className="text-blue-400 underline">
                    <a href="">Sign up now</a>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Login;
