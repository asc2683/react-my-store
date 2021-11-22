import React from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { DataProvider } from './contexts/DataContext';

const App = () => (
  <DataProvider>
    <Header />
    <Shop />
  </DataProvider>
);

export default App;
