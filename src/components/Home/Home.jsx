import { Link } from 'react-router-dom';
import { Database, History } from 'lucide-react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to SQL Query Runner</h1>
        <p className={styles.subtitle}>A powerful tool for writing, executing, and managing your SQL queries</p>
        
        <div className={styles.grid}>
          <Link to="/query" className={styles.card}>
            <div className={styles.cardIcon}>
              <Database className={styles.icon} />
            </div>
            <h2 className={styles.cardTitle}>Query Editor</h2>
            <p className={styles.cardDescription}>
              Write and execute SQL queries with syntax highlighting and real-time results
            </p>
          </Link>
          
          <Link to="/history" className={styles.card}>
            <div className={styles.cardIcon}>
              <History className={styles.icon} />
            </div>
            <h2 className={styles.cardTitle}>Query History</h2>
            <p className={styles.cardDescription}>
              Access and manage your previously executed queries
            </p>
          </Link>
        </div>
        
        <div className={styles.features}>
          <h3 className={styles.featuresTitle}>Features</h3>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>Syntax highlighting</li>
            <li className={styles.featureItem}>Export results to CSV</li>
            <li className={styles.featureItem}>Dark mode support</li>
            <li className={styles.featureItem}>Query history management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}