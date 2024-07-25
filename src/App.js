import { useState } from 'react';
import './App.css';

import Categories from './components/Categories';
import MainNews from './components/MainNews';
import SearchNews from './components/SearchNews';

function App() {
  const [category, setCategory] = useState('all');

  return (
    <div className="App">
      <Categories onCategoryChange={setCategory} />
      <MainNews category={category} />
      <SearchNews />
    </div>
  );
}

export default App;
