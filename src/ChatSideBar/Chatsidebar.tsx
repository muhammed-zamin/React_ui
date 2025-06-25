import React from 'react';
import './Chatsidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatsidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Close button for mobile */}
      <button className="close-sidebar-btn" onClick={onClose}>
        ×
      </button>

      <div className="logo-section">
        <h4>Logo</h4>
      </div>
      <button className="sidebar-button">New chat +</button>

      <div className="chat-section">
        <h3 className="chat-title">Chats</h3>
        <ul className="chat-list">
          <li className="chat-item">how to make react UI</li>
        </ul>
      </div>
    </div>
  );
};

export default Chatsidebar;
