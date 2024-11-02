// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="contact-section"
    >
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <motion.input 
          whileFocus={{ scale: 1.05 }}
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <motion.input 
          whileFocus={{ scale: 1.05 }}
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <motion.textarea 
          whileFocus={{ scale: 1.05 }}
          name="message" 
          placeholder="Your Message" 
          value={formData.message}
          onChange={handleChange}
          required
        ></motion.textarea>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}

export default Contact;