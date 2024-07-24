// src/components/ChatBot.jsx
import React, { useState } from "react";
import axios from "axios";
import "./ChatBot.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
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
            {msg.content}
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
