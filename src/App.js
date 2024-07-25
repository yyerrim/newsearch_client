import { useState } from 'react';
import './App.css';

import Categories from './components/Categories';
import Search from './components/Search';
import MainNews from './components/MainNews';
import SearchNews from './components/SearchNews';

function App() {
  const [category, setCategory] = useState('all');
  const [newsList, setNewsList] = useState([]);

  const fetchNews = async (search) => {
    const url = `http://localhost:8080/naver/data?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    setNewsList(data.items);
  };

  return (
    <div className="App">
      <Categories onCategoryChange={setCategory} />
      <Search onSearch={fetchNews} />
      <MainNews category={category} />
      <SearchNews newsList={newsList} />
    </div>
  );
}

export default App;
