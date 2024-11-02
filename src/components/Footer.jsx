// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:your.email@example.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p>&copy; 2023 Rishikesh Kale. All rights reserved.</p>
    </footer>
  );
}

export default Footer;