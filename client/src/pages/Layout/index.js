import React from 'react'
import logo from "./cropped-cdf-official-logo.png";
import { authService } from "../../helpers/auth";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

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
                <span className="block font-bold">PECUNIA</span>
              </p>
            </div>
            <div className="logo">
              <div className="m-auto w-10"></div>
            </div>
            <div className="social">
              <a href="#">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
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
                      {currentUser ? (
                        <li className="">
                          <a href="/dashboard">Dashboard</a>
                        </li>
                      ) : (
                        ""
                      )}
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