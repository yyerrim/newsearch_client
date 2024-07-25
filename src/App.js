import { useState } from 'react';
import './App.css';

import Categories from './components/Categories';
import Search from './components/Search';
import MainNews from './components/MainNews';
import SearchNews from './components/SearchNews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [category, setCategory] = useState('all');
  const [newsList, setNewsList] = useState([]);
  const [search, setSearch] = useState('');

  const fetchNews = async (search) => {
    setSearch(search);
    const url = `http://localhost:8080/naver/data?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    setNewsList(data.items);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className='menu'
          style={
            {
              display: 'flex',
              justifyContent: 'space-between'
            }
          }>
          <Categories onCategoryChange={setCategory} />
          <Search onSearch={fetchNews} />
        </div>
        <Routes>
          <Route path="/" element={<MainNews category={category} />} />
          <Route path="/search" element={<SearchNews newsList={newsList} search={search} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
