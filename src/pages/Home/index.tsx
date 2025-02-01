import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h2>🏠 Home Page</h2>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export default Home;
