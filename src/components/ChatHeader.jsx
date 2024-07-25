import React from "react";
import "./ChatHeader.css";
import gptProfile from "../assets/chatProfile.png";
import statusLogin from "../assets/longin-status2.png";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <img src={gptProfile} alt="Profile" className="profile-header-image" />
      <div className="header-info">
        <div className="header-name">ChatBot</div>
        <div className="header-status-container">
          <img src={statusLogin} alt="status" className="status-image" />
          <div className="header-status">Online</div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
