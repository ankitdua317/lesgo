import React from "react";
import styles from "./Home.module.css";
import { useAuth } from "../../context/AuthContext";

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className={styles.home}>
      <h2>🏠 Home Page</h2>
      <p>{`Welcome to your dashboard ${user?.name}!`}</p>
    </div>
  );
};

export default Home;
