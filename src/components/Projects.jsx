// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/yourusername/ecommerce-project"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets",
      technologies: ["Python", "Dash", "Plotly", "Pandas"],
      link: "https://github.com/yourusername/data-viz-dashboard"
    },
    // Add more projects as needed
  ];

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="projects-section"
    >
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;