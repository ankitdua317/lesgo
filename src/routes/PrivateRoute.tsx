import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Protected Route Wrapper
const ProtectedRoute = () => {
  const { user, isAppLoaded } = useAuth();

  if (!isAppLoaded) {
    return null; // Show a loading spinner or skeleton here if needed
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
