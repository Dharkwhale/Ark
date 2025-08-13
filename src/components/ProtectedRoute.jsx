// src/components/ProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requiredRole }) {
  const { isAdminLoggedIn, userToken, userInfo } = useSelector((state) => state.auth);

  // Redirect if not authenticated
  const isAuthenticated = isAdminLoggedIn || userToken;

  if (!isAuthenticated) {
    return <Navigate to={requiredRole === 'admin' ? "/admin-login" : "/login"} />;
  }

  // Role-based check
  if (requiredRole && userInfo?.role !== requiredRole && !isAdminLoggedIn) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}
