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

  return (
    <MainContext.Provider value={{ queryHistory, setQueryHistory }}>
      {children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  return useContext(MainContext);
}