import { useState, useEffect } from 'react';
import { MainProvider, useMainContext } from './context/MainContext';
import { predefinedQueries } from './constants/queries';
import QuerySelector from './components/QuerySelector/QuerySelector';
import RunButton from './components/RunButton/RunButton';
import ResultsTable from './components/ResultsTable/ResultsTable';
import styles from './App.module.css';
import SQLEditor from './components/SQLEditor/SQLEditor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import './index.css';
function AppContent() {
  const { queryHistory, setQueryHistory } = useMainContext();

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
        <div className={styles.buttonGroup}>
          <RunButton className="primary-button" onClick={handleRunQuery} />
          <button className="secondary-button" onClick={handleSaveQuery}>
            Save Query
          </button>
          <button className="alert-button" onClick={handleClear}>
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/query" element={<AppContent />} />
          <Route path="/history" element={<div>History Page</div>} />
        </Routes>
      </Router>
    </MainProvider>
    </ThemeProvider>
  );
}