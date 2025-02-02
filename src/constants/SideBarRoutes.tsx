import Home from "../pages/Home"; // Update path as needed
import Profile from "../pages/Profile"; // Update path as needed
import Analytics from "../pages/Analytics"; // Update path as needed

const SIDE_BAR_ROUTES = [
  {
    name: "Home",
    element: <Home />,
    path: "/",
    displayName: "🏠 Home",
  },
  {
    name: "Profile",
    element: <Profile />,
    path: "/profile",
    displayName: "👤 Profile",
  },
  {
    name: "Analytics",
    element: <Analytics />,
    path: "/analytics",
    displayName: "📊 Analytics",
  },
];

export default SIDE_BAR_ROUTES;
