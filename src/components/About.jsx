// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="about-section"
    >
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Highly motivated MCA graduate from GITAM University with strong programming 
            skills and passion for technology. Experienced in full-stack development 
            and data analysis with a focus on creating efficient, scalable solutions.
          </p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <motion.div className="education-cards">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="education-card"
            >
              <h4>MCA (Computers)</h4>
              <p>GITAM University</p>
              <p>CGPA: 6.9/10</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="education-card"
            >
              <h4>B.Com</h4>
              <p>Kakatiya University</p>
              <p>Percentage: 59%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;