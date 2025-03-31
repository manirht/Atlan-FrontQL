import styles from './QueryInput.module.css';

export default function QueryInput({ value, onChange }) {
  return (
    <textarea
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder="Enter SQL query..."
      rows="5"
    />
  );
}