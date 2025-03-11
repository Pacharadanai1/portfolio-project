// filepath: c:\Select Work Portfolio\portfolio-project\src\components\Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ textAlign: "center" }}>
        <p>&copy; {new Date().getFullYear()}  All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;