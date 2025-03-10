// filepath: c:\Select Work Portfolio\portfolio-project\src\components\Header.js
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Pacharadanai Srimueng</h1>
        {/* <p>Discover my work and projects</p> */}
        <a href="/CV/Resume.pdf" className="btn btn-primary" download>
          Download Resume
        </a>
      </div>
    </header>
  );
}

export default Header;