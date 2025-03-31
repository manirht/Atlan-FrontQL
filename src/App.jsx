import { MainProvider, useMainContext } from './context/MainContext';
import { predefinedQueries } from './constants/queries';
import QuerySelector from './components/QuerySelector/QuerySelector';
import RunButton from './components/RunButton/RunButton';
import ResultsTable from './components/ResultsTable/ResultsTable';
import styles from './App.module.css';
import SQLEditor from './components/SQLEditor/SQLEditor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import History from './components/History/History';
import './index.css';
import buttonStyles from './Buttons.module.css';
import { Play, Save, Trash2 } from 'lucide-react';
function AppContent() {
  const { queryHistory, setQueryHistory , addQuery } = useMainContext();

  const handleRunQuery = () => {
    const matchedQuery = predefinedQueries.find(
      q => q.text === queryHistory.currentQuery.trim()
    );
    console.log('Matched Query:', matchedQuery); 
    setQueryHistory(prev => ({
      ...prev,
      outputData: matchedQuery?.data || [],
      columns: matchedQuery?.columns || []
    }));
    addQuery({
      text: queryHistory.currentQuery,
      name: `Query ${queryHistory.saved.length + 1}`
    });
  };

  const handleQuerySelect = (query) => {
    // Update editor content with selected query
    setQueryHistory(prev => ({
      ...prev,
      currentQuery: query.text
    }));
  };

  const handleSaveQuery = () => {
    if (!queryHistory.currentQuery.trim()) {
      alert('Cannot save empty query');
      return;
    }

    setQueryHistory(prev => ({
      ...prev,
      saved: [...prev.saved, {
        id: `saved-${Date.now()}`,
        text: prev.currentQuery,
        name: `Saved Query ${prev.saved.length + 1}`
      }]
    }));
    addQuery({
      text: queryHistory.currentQuery,
      name: prompt('Name this query:', `Saved Query ${queryHistory.saved.length + 1}`)
    });
  };

  const handleClear = () => {
    setQueryHistory(prev => ({
      ...prev,
      currentQuery: '',
      outputData: [],
      columns: []
    }));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>SQL Query Runner</h1>
        <QuerySelector onSelect={handleQuerySelect} />
      </header>

      <div className={styles.editorSection}>
        <SQLEditor />
        <div className={buttonStyles.buttonGroup}>
        <button 
  className={`${buttonStyles.button} ${buttonStyles.primaryButton}`}
  onClick={handleRunQuery}
>
  <Play size={16} />
  Run Query
</button>

<button 
  className={`${buttonStyles.button} ${buttonStyles.secondaryButton}`}
  onClick={handleSaveQuery}
>
  <Save size={16} />
  Save Query
</button>

<button 
  className={`${buttonStyles.button} ${buttonStyles.alertButton}`}
  onClick={handleClear}
>
  <Trash2 size={16} />
  Clear
</button>
</div>
      </div>

      <ResultsTable />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
    <MainProvider>
    <Router>
      <div className={styles.appContainer}>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/query" element={<AppContent />} />
          <Route path="/history" element={<History/>} />
        </Routes>
        <Footer />
      </div>
      </Router>
    </MainProvider>
    </ThemeProvider>
  );
}