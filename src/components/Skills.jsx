// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skillCategories = {
    "Programming Languages": ["Java", "Python", "C++"],
    "Web Technologies": ["HTML", "CSS", "JavaScript", "React"],
    "Other Skills": ["Data Analysis", "AWS DevOps", "Git"]
  };

  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="skills-section"
    >
      <h2>Skills</h2>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="skill-category">
          