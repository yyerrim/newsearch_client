import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) {
      alert("검색어를 입력하세요.");
      setSearch("");
      return;
    }
    onSearch(search);
    setSearch("");
    navigate(`/search`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="menu_search">
      <input
        className="keyword"
        type="text"
        placeholder="news 키워드를 입력하세요."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="search_button" onClick={handleSearch}>🔍</button>
    </div>
  );
};

export default Search;
