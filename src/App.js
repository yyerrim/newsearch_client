import { useState } from "react";
import "./App.css";
import ChatBot from "./components/ChatBot";
import chatIcon from "./assets/chatProfile.png";

import Categories from "./components/Categories";
import Search from "./components/Search";
import MainNews from "./components/MainNews";
import SearchNews from "./components/SearchNews";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("all");
  const [newsList, setNewsList] = useState([]);
  const [search, setSearch] = useState("");
  const fetchNews = async (search) => {
    setSearch(search);
    const url = `http://localhost:8080/naver/data?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    setNewsList(data.items);
  };

  const [showChatBot, setShowChatBot] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "assistant", // 초기 메시지도 assistant 역할로 변경
      content: `안녕하세요? \n저는 gpt4o-mini 기반 챗봇입니다.\n뉴스를 보다가 궁금한 점을 물어보세요!\n(2023년 10월까지의 데이터 기반 답변입니다)`,
    },
  ]);
  const handleButtonClick = () => {
    setShowChatBot(!showChatBot);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div
          className="header"
          style={{ height: "15vh", backgroundColor: "#000060" }}
        ></div>
        <div className="container" style={{ height: "85vh", display: "flex" }}>
          <div className="news" style={{ width: "70vw", height: "100%" }}>
            <div
              className="menu"
              style={{
                width: "100%",
                height: "10%",
                backgroundColor: "lightseagreen",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Categories onCategoryChange={setCategory} />
              <Search onSearch={fetchNews} />
            </div>
            <div
              className="article"
              style={{
                width: "100%",
                height: "90%",
                backgroundColor: "lightskyblue",
              }}
            >
              <Routes>
                <Route path="/" element={<MainNews category={category} />} />
                <Route
                  path="/search"
                  element={<SearchNews newsList={newsList} search={search} />}
                />
              </Routes>
            </div>
          </div>
          <div
            className="chat"
            style={{
              width: "30vw",
              height: "100%",
              backgroundColor: "lightgreen",
            }}
          >
            {/* 버튼에 active 클래스 조건부 적용 */}
            <button
              className={`chatbot-button ${showChatBot ? "active" : ""}`}
              onClick={handleButtonClick}
            >
              <img src={chatIcon} alt="Chat" className="chat-icon" />
            </button>

            {showChatBot && (
              <div className="chatbot-overlay">
                <ChatBot messages={messages} setMessages={setMessages} />
              </div>
            )}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
