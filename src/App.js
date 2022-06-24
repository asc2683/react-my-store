import React from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { DataProvider } from './contexts/DataContext';

const App = () => (
  <DataProvider>
    <h1>Question/1.0</h1>
    <Header />
    <Shop />
  </DataProvider>
);

export default App;
