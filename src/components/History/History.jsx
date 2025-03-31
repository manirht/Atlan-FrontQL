import { useState } from 'react';
import { useMainContext } from '../../context/MainContext';
import { Search, Trash2, Play, Clock, ArrowUpDown } from 'lucide-react';
import styles from './History.module.css';

export default function History() {
  const { queryHistory, removeQuery, clearHistory } = useMainContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ 
    key: 'timestamp', 
    direction: 'desc' 
  });

  // Filter and sort queries
  const filteredQueries = queryHistory.saved.filter(query => 
    query.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    query.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedQueries = [...filteredQueries].sort((a, b) => {
    if (sortConfig.key === 'timestamp') {
      return sortConfig.direction === 'asc' 
        ? a.timestamp - b.timestamp 
        : b.timestamp - a.timestamp;
    }
    return sortConfig.direction === 'asc' 
      ? a[sortConfig.key].localeCompare(b[sortConfig.key]) 
      : b[sortConfig.key].localeCompare(a[sortConfig.key]);
  });

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc'
    }));
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Query History</h1>
        <button 
          className={styles.clearButton}
          onClick={() => {
            if (window.confirm('Are you sure you want to clear all history?')) {
              clearHistory();
            }
          }}
        >
          <Trash2 size={16} />
          Clear History
        </button>
      </div>

      <div className={styles.searchContainer}>
        <div className={styles.searchInput}>
          <Search size={16} />
          <input
            type="text"
            placeholder="Search queries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <span>{filteredQueries.length} saved queries</span>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>
                Name <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('text')}>
                SQL Query <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('timestamp')}>
                Time <ArrowUpDown size={14} />
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedQueries.length > 0 ? (
              sortedQueries.map(query => (
                <tr key={query.id}>
                  <td>{query.name}</td>
                  <td className={styles.queryCell}>{query.text}</td>
                  <td>
                    <div className={styles.timeCell}>
                      <Clock size={14} />
                      {formatTime(query.timestamp)}
                    </div>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.runButton}>
                        <Play size={16} />
                      </button>
                      <button 
                        className={styles.deleteButton}
                        onClick={() => {
                          if (window.confirm('Delete this query?')) {
                            removeQuery(query.id);
                          }
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className={styles.emptyMessage}>
                  No saved queries found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}