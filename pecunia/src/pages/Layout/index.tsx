import React from "react";
import logo from "./cropped-cdf-official-logo.png";
import { authService } from "../../helpers/auth";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";

function Layout({ ...props }) {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  console.log(currentUser);
  const logout = () => {
    authService.logout();
    window.location.replace("/");
  };
  return (
    <div>
      <div className="main">
        <div className="logo h-12 border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
          <div className="my-1 text-center m-0 mx-auto w-10/12">
            <div className="flex justify-between">
              <div className="name align-middle">
                <p className="text-left inline-block align-middle py-2">
                  <span className="inline-block font-bold">PECUNIA</span>
                </p>
              </div>
              <div className="logo">
                {currentUser?.user && currentUser.user.role === "admin" ? (
                  <>
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <a href="/dashboard">
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              Dashboard
                            </NavigationMenuLink>
                          </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <a href="/applications">
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              Applications
                            </NavigationMenuLink>
                          </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <a href="/programmes">
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              Programmes
                            </NavigationMenuLink>
                          </a>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="social">
                {currentUser ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>
                        <button onClick={() => logout()}>Logout</button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                  <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <a href="/">
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              Sign In
                            </NavigationMenuLink>
                          </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <a href="/signup">
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              Sign Up
                            </NavigationMenuLink>
                          </a>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </>
                )}
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

export default Layout;
