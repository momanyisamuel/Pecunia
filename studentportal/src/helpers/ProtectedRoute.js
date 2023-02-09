import React from "react";
import { Route, Navigate } from "react-router-dom";
import { authService } from "./auth";

const ProtectedRoute = ({children}) => {

    const currentUser = authService.currentUserValue;
    if (!currentUser) {
        return (
          <Navigate to="/" replace/>
        );
      } else {
        return {...children};
      }
};

export default ProtectedRoute;