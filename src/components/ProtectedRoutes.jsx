import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const trainerName = useSelector((state) => state.trainerNameSlice);
  if (trainerName) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
