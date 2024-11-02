// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero"
    >
      <div className="hero-content">
        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Rishikesh Kale
        </motion.h1>
        <motion.h2
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full Stack Developer & Data Analyst
        </motion.h2>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-buttons"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cta-button primary"
            onClick={() => document.getElementById('projects').scrollIntoView()}
          >
            View My Work
          </motion.button>
          <motion.a 
            href="/assets/resume.pdf"
            download
            className="cta-button secondary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;