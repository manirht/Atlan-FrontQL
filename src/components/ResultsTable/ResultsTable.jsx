import { CSVLink } from 'react-csv';
import { useMainContext } from '../../context/MainContext';
import Loader from '../Loader/Loader';
import styles from './ResultsTable.module.css';

export default function ResultsTable() {
    const { queryHistory } = useMainContext();
    console.log('Results Data:', queryHistory.outputData); // Debug log
    console.log('Columns:', queryHistory.columns); 
    const csvData = [
      queryHistory.columns, // Header row
      ...queryHistory.outputData.map(row => 
        queryHistory.columns.map(col => row[col])
      )
    ];
    return (
      <div className={styles.tableContainer}>
        {queryHistory.outputData.length > 0 && (
          <>
          <div className={styles.exportContainer}>
          <CSVLink
            data={csvData}
            filename="query-results.csv"
            className={styles.exportButton}
          >
            Export CSV
          </CSVLink>
        </div>
          <table className={styles.table}>
            <thead>
              <tr>
                {queryHistory.columns.map(header => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {queryHistory.outputData.map((row, index) => (
                <tr key={index}>
                  {queryHistory.columns.map(column => (
                    <td key={column}>{row[column]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </>
        )}
      </div>
    );
  }