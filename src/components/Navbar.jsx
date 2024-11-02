// src/components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="logo">
        <motion.span 
          whileHover={{ scale: 1.2 }}
          className="logo-text"
        >
          RK
        </motion.span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button 
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>
    </motion.nav>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
};

export default Navbar;