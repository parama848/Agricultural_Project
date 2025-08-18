// src/components/ProtectedRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(ShopContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
