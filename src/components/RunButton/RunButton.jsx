import styles from './RunButton.module.css';

export default function RunButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Run Query ▶
    </button>
  );
}