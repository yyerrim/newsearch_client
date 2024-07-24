import './App.css';

import Categories from './components/Categories';
import MainNews from './components/MainNews';
import SearchNews from './components/SearchNews';

function App() {
  return (
    <div className="App">
      <Categories />
      <MainNews />
      <SearchNews />
    </div>
  );
}

export default App;
