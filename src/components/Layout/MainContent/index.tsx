import { Outlet } from "react-router-dom";
import styles from "./MainContent.module.css";

const MainContent = () => {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
};

export default MainContent;
