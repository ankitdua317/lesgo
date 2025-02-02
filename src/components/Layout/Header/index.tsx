import styles from "./Header.module.css";

interface HeaderProps {
  toggleSidebar: () => void;
  toggleTheme: () => void;
  darkMode: boolean;
}

const Header = ({ toggleSidebar, toggleTheme, darkMode }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1>Dashboard</h1>
      <div className={styles.flex}>
        <button className={styles.hamburger} onClick={toggleSidebar}>
          ☰
        </button>
        <button className={styles.toggleButton} onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
