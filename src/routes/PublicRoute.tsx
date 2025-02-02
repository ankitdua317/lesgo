import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Public Route Wrapper
const PublicRoute = () => {
  const { user, isAppLoaded } = useAuth();

  if (!isAppLoaded) {
    return null; // Show a loading spinner or skeleton here if needed
  }

  return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
