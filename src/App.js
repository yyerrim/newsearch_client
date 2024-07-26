import { useState } from 'react';
import './App.css';

import Categories from './components/Categories';
import Search from './components/Search';
import MainNews from './components/MainNews';
import SearchNews from './components/SearchNews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// function App() {
//   const [category, setCategory] = useState('all');
//   const [newsList, setNewsList] = useState([]);
//   const [search, setSearch] = useState('');

//   const fetchNews = async (search) => {
//     setSearch(search);
//     const url = `http://localhost:8080/naver/data?search=${search}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     setNewsList(data.items);
//   };

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <div className='menu'
//           style={
//             {
//               display: 'flex',
//               justifyContent: 'space-between'
//             }
//           }>
//           <Categories onCategoryChange={setCategory} />
//           <Search onSearch={fetchNews} />
//         </div>
//         <Routes>
//           <Route path="/" element={<MainNews category={category} />} />
//           <Route path="/search" element={<SearchNews newsList={newsList} search={search} />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

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
        <div className='header' style={{ height: '15vh', backgroundColor: '#000060' }}></div>
        <div className="container" style={{ height: '85vh', display: 'flex' }}>
          <div className='news' style={{ width: '70vw', height: '100%' }}>
            <div className='menu' style={
              {
                width: '100%', height: '10%', backgroundColor: 'lightseagreen',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }
            }>
              <Categories onCategoryChange={setCategory} />
              <Search onSearch={fetchNews} />
            </div>
            <div className='article' style={{ width: '100%', height: '90%', backgroundColor: 'lightskyblue' }}>
              <Routes>
                <Route path="/" element={<MainNews category={category} />} />
                <Route path="/search" element={<SearchNews newsList={newsList} search={search} />} />
              </Routes>
            </div>
          </div>
          <div className='chat' style={{ width: '30vw', height: '100%', backgroundColor: 'lightgreen' }}></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <div className='header' style={{ height: '20vh', backgroundColor: '#000060' }}></div>
//       <div className="container" style={{ height: '80vh', display: 'flex' }}>
//         <div className='news' style={{ width: '70vw', height: '100%' }}>
//           <div className='menu' style={{ width: '100%', height: '10%', backgroundColor: 'lightseagreen' }}></div>
//           <div className='article' style={{ width: '100%', height: '90%', backgroundColor: 'lightskyblue' }}></div>
//         </div>
//         <div className='chat' style={{ width: '30vw', height: '100%', backgroundColor: 'lightgreen' }}></div>
//       </div>
//     </div>
//   );
// }

export default App;
