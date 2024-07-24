// src/components/ChatBot.jsx
import React, { useState } from "react";
import axios from "axios";
import "./ChatBot.css";
import gptProfile from "../assets/chatProfile.png"; // GPT 프로필 이미지 경로를 알맞게 수정하세요

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant", // 초기 메시지도 assistant 역할로 변경
      content:
        "뉴스를 보다가 궁금한 점을 물어보세요!(2023년 10월까지의 데이터 기반 답변입니다)",
    },
  ]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return; // 입력이 비어있으면 전송하지 않음
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    const response = await getChatbotResponse([...messages, userMessage]);
    const botMessage = { role: "assistant", content: response };
    setMessages([...messages, userMessage, botMessage]);

    setInput("");
  };

  const getChatbotResponse = async (messageHistory) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.post(
        API_URL,
        {
          model: "gpt-4o-mini",
          messages: messageHistory,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      console.log("API response:", response);
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      console.error(
        "Error details:",
        error.response ? error.response.data : error.message
      );
      return "Sorry, something went wrong. Please try again.";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.role === "user" ? "user-message" : "bot-message"
            }`}
          >
            {msg.role === "assistant" && (
              <img
                src={gptProfile}
                alt="GPT Profile"
                className="profile-image"
              /> // GPT 프로필 이미지 추가
            )}
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage} className="send-button"></button>
      </div>
    </div>
  );
};

export default ChatBot;
