import styles from './QuerySelector.module.css';
import { useMainContext } from '../../context/MainContext';
export default function QuerySelector({ onSelect }) {
    const { queryHistory } = useMainContext();
  
  // Combine predefined and saved queries
  const allQueries = [ ...queryHistory.saved];
  return (
    <select 
      className={styles.selector}
      onChange={(e) => {
        const query = allQueries.find(q => q.id === e.target.value);
        console.log(queryHistory,"nee ")
        if (query) onSelect(query); 
      }}
    >
      <option value="">Select Query</option>
      {allQueries.map((q) => (
        <option key={q.id} value={q.id}>
          {q.name || `Saved Query ${q.id}`}
        </option>
      ))}
    </select>
  );
}