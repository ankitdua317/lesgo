import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "../components/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Analytics from "../pages/Analytics";
import Login from "../pages/Login";
import { useAuth } from "../context/AuthContext";

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Protected Routes */}
        <Route element={user ? <DashboardLayout /> : <Navigate to="/login" />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>

        {/* Public Route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
