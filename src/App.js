import { useState } from "react";
import "./App.css";
import ChatBot from "./components/ChatBot";
import chatIcon from "./assets/chatProfile.png"; // 이미지 경로를 알맞게 수정하세요

function App() {
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
    <div className="App">
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
  );
}

export default App;
