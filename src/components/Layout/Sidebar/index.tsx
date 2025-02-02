import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useAuth } from "../../../context/AuthContext";
import SIDE_BAR_ROUTES from "../../../constants/SideBarRoutes";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  const { pathname } = useLocation();
  const { logout } = useAuth();

  return (
    <aside
      className={`${styles.sidebar} ${
        isSidebarOpen ? styles.open : styles.closed
      }`}
    >
      <nav>
        <ul>
          {SIDE_BAR_ROUTES.map(({ path, displayName }) => (
            <li className={pathname === path ? styles.active : undefined}>
              <Link to={path}>{displayName}</Link>
            </li>
          ))}
        </ul>
        <button onClick={logout}>Logout</button>
      </nav>
    </aside>
  );
};

export default Sidebar;
