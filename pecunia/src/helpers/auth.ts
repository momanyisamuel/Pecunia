import axios from "axios";
import { BehaviorSubject } from "rxjs";
import { handleResponse } from "./handleResponse";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("user"))
);

export const authService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};

function login(email:string, password:string) {
  return axios
    .post("https://cdfreg.herokuapp.com/signin", { email, password })
    .then(handleResponse)
    .then(user => {
      localStorage.setItem("user", JSON.stringify(user));
      currentUserSubject.next(user);
      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
  currentUserSubject.next(null);
}