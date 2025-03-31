import { createContext, useState, useContext } from 'react';

const MainContext = createContext();

export function MainProvider({ children }) {
  const [queryHistory, setQueryHistory] = useState({
    history: [],
    saved: [{
      id: 'saved-1',
      text: 'SELECT * FROM customers;',
      name: 'Get All Customers'
    },
    {
      id: 'saved-2',
      text: 'SELECT * FROM orders WHERE CustomerID = 1;',
      name: 'Get Customer 1 Orders'
    } ],
    outputData: [],
    columns: [],
    currentQuery: ''
  });
  const addQuery = (query) => {
    setQueryHistory(prev => ({
      ...prev,
      saved: [...prev.saved, {
        id: Date.now(),
        text: query.text,
        name: query.name || `Query ${prev.saved.length + 1}`,
        timestamp: new Date().getTime()
      }]
    }));
  };
  const removeQuery = (id) => {
    setQueryHistory(prev => ({
      ...prev,
      saved: prev.saved.filter(query => query.id !== id)
    }));
  };

  const clearHistory = () => {
    setQueryHistory(prev => ({ ...prev, saved: [] }));
  };


  return (
    <MainContext.Provider value={{ queryHistory, setQueryHistory , addQuery, removeQuery, clearHistory }}>
      {children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  return useContext(MainContext);
}