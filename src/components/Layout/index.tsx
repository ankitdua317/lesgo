import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { useTheme } from "../../context/ThemeContext";

const Layout = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}
    >
      {/* Header */}
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <button className={styles.toggleButton} onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {/* Hamburger Button for Mobile */}
        <button className={styles.hamburger} onClick={toggleSidebar}>
          ☰
        </button>
      </header>

      {/* Sidebar & Content */}
      <div className={styles.content}>
        <aside
          className={`${styles.sidebar} ${
            isSidebarOpen ? styles.open : styles.closed
          }`}
        >
          <nav>
            <ul>
              <li>
                <Link to="/">🏠 Home</Link>
              </li>
              <li>
                <Link to="/profile">👤 Profile</Link>
              </li>
              <li>
                <Link to="/analytics">📊 Analytics</Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
