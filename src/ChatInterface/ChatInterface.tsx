import React from 'react';
import './ChatInterface.css';

const Chatinterface: React.FC = () => {
  return (
    <div className="chatinterface-container">
      <div className="chat-content">
        <h1 className="chat-heading">welcome, ask AI!</h1>
        <div className="input-wrapper">
          <input type="text" className="chat-input" placeholder="Ask Anything" />
          <button className="send-button">➤</button>
        </div>
      </div>
    </div>
  );
};

export default Chatinterface;
