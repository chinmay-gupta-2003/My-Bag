import Header from './components/Header';
import AddItemForm from './components/AddItemForm';
import BagList from './components/BagList';
import BagSummary from './components/BagSummary';

function App() {
  return (
    <div className="app">
      <Header />
      <AddItemForm />
      <BagList />
      <BagSummary />
    </div>
  );
}

export default App;
