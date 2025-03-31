import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>Developed with</span>
        <span className={styles.heart}>♥</span>
        <span>by</span>
        <span className={styles.atlanLogo}>Atlan</span>
      </div>
    </footer>
  );
}