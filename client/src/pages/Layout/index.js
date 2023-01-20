import React from 'react'
import logo from "./cropped-cdf-official-logo.png";
import { authService } from "../../helpers/auth";

function Layout({ ...props }) {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  console.log(currentUser);
  const logout = () => {
    authService.logout();
    window.location.replace("/");
  };
  return (
    <div>
      <div className="main ">
        <div className="logo my-6 text-center m-0 mx-auto w-10/12">
          <div className="flex justify-between">
            <div className="name">
              <p className="text-left">
                <span className="block font-bold">NG-CDF</span>
                <span className="block font-bold">IJARA</span>
              </p>
            </div>
            <div className="logo">
              <div className="m-auto w-10">
                <a href="#">
                  <img className="w-10 h-10" src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="social">
              <a href="#">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation py-2 border-t border-b border-gray-300">
          <div className="m-0 mx-auto w-10/12">
            <div className="flex w-full justify-between">
              <div className="left w-1/2">
                <ul className="w-full flex">
                  {currentUser?.user && currentUser.user.role === "admin" ? (
                    <>
                      <li className="">
                        <a href="/dashboard">Dashboard</a>
                      </li>
                      <li className="ml-4">
                        <a href="/admin">Applicants</a>
                      </li>
                    </>
                  ) : (
                    <>
                      { currentUser ? (<li className="">
                        <a href="/dashboard">Dashboard</a>
                      </li>) : ""}
                    </>
                  )}
                </ul>
              </div>
              <div className="right w-1/2 flex">
                <ul className="w-full flex justify-end">
                  {currentUser ? (
                    <li className="">
                      <button onClick={() => logout()}>Logout</button>
                    </li>
                  ) : (
                    <>
                      <li className="">
                        <a href="/">Sign In</a>
                      </li>
                      <li className="pl-4">
                        <a href="/signup">Sign Up</a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {props.children}
        <footer></footer>
      </div>
    </div>
  );
}

export default Layout