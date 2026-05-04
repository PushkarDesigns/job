import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ requiredRole }) => {
  const location = useLocation();
  
  // Replace these with your actual auth logic (e.g., from a context or Redux)
  const user = { isAuthenticated: true, role: "employer" }; 

  if (!user.isAuthenticated) {
    // Redirect to login if not authenticated, saving the current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Redirect to an unauthorized page if roles don't match
    return <Navigate to="/unauthorized" replace />;
  }

  // If authenticated and role matches, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
