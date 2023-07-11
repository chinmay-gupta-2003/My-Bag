import React, { useState } from 'react';
import Header from './components/Header';
import AddItemForm from './components/AddItemForm';
import BagList from './components/BagList';
import BagSummary from './components/BagSummary';

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <Header />
      <AddItemForm setItems={setItems} />
      <BagList setItems={setItems} items={items} />
      <BagSummary />
    </div>
  );
}

export default App;
