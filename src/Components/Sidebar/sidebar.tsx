import React, { useState } from 'react';
import './sidebar.css'; // Import CSS file for styling

const Sidebar = ({setCurrentPage,sendToggle}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <body>
    <div>
    <button className={`toggle-button ${isOpen ? 'open' : ''}`} onClick={() => {toggleSidebar(); sendToggle(isOpen)}}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="sidebar-menu">
        <li onClick={() => setCurrentPage('DashBoard')}>DASHBOARD</li>
        <li>LESSONS</li>
        <li onClick={() => setCurrentPage('Assessment')}>ASSESSMENT</li>
      </ul>
    </div>
    </body>
  );
};

export default Sidebar;
