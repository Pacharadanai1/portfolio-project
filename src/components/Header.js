// filepath: c:\Select Work Portfolio\portfolio-project\src\components\Header.js
import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
      <div className="header-image">
          <img src="/petch.jpg" alt="Profile" className="profile-image" />
        </div>
        <div className="header-content">
          <h1>Pacharadanai Srimueng</h1>
          {/* <p>Discover my work and projects</p> */}
          <a href="/CV/Resume.pdf" className="btn btn-primary" download>
            Resume
          </a>
        </div>
        
      </div>
    </header>
  );
}

export default Header;