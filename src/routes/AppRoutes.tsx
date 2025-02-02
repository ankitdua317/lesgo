import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "../components/Layout";
import Login from "../pages/Login";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./PrivateRoute";
import SIDE_BAR_ROUTES from "../constants/SideBarRoutes";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route - Only accessible when user is not logged in */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes - Only accessible when user is logged in */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            {SIDE_BAR_ROUTES.map(({ path, element }) => (
              <Route path={path} element={element} />
            ))}
          </Route>
        </Route>

        {/* Fallback Route - Redirect to login if no route matches */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
