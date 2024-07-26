import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./ChatBot.css";
import ChatHeader from "./ChatHeader";
import gptProfile from "../assets/chatProfile.png";
import sendIcon from "../assets/message-sendIcnBlue.png";

const ChatBot = ({ messages, setMessages }) => {
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false); // 챗봇 입력 중 상태 추가
  const messagesEndRef = useRef(null); // 스크롤 ref

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "질문을 입력해주세요.",
      });
      return; // 입력이 비어있으면 전송하지 않음
    }
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    setInput("");
    setIsBotTyping(true); // 챗봇이 입력 중임을 표시

    const response = await getChatbotResponse([...messages, userMessage]);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: response },
    ]);
    setIsBotTyping(false); // 챗봇이 입력 완료되었음을 표시
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-container">
      <ChatHeader />
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
              />
            )}
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
        {isBotTyping && (
          <div className="message bot-message">
            <img src={gptProfile} alt="GPT Profile" className="profile-image" />
            <div className="message-content typing-indicator">
              답변을 입력 중입니다...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="chat-input"
          placeholder="질문을 입력하세요"
        />
        {input.trim() !== "" && (
          <button onClick={handleSendMessage} className="send-button">
            <img src={sendIcon} alt="Send" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
