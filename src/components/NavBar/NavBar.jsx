import { NavLink } from 'react-router-dom';
import { Database, Terminal, History, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.logoSection}>
            <NavLink to="/" className={styles.logo}>
              <Database className={styles.logoIcon} />
              <span className={styles.logoText}>SQL Runner</span>
            </NavLink>
            
            <div className={styles.navLinks}>
              <NavLink
                to="/query"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                 <Terminal className={styles.linkIcon} />
                Query Editor
              </NavLink>
              <NavLink
                to="/history"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                <History className={styles.linkIcon} />
                History
              </NavLink>
            </div>
          </div>
          
          <button
            onClick={toggleTheme}
            className={styles.themeButton}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? (
              <Sun className={styles.themeIcon} />
            ) : (
              <Moon className={styles.themeIcon} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}