import { useState } from "react";
import styles from "./Layout.module.css";
import { useTheme } from "../../context/ThemeContext";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

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
      <Header
        toggleSidebar={toggleSidebar}
        toggleTheme={toggleTheme}
        darkMode={darkMode}
      />
      <div className={styles.content}>
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
