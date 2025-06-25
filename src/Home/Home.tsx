import React, { useState } from 'react';
import Chatsidebar from '../ChatSideBar/Chatsidebar';
import Chatinterface from '../ChatInterface/ChatInterface';
import './Home.css';

const Home: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="home-container">
      {/* Hamburger menu for mobile */}
      {!isSidebarOpen && (
  <button className="hamburger" onClick={toggleSidebar}>
    ☰
  </button>
)}

      <Chatsidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Chatinterface />
    </div>
  );
};

export default Home;
