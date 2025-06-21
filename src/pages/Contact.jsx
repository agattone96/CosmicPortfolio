
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <motion.div
      className="page contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="contact-section">
        <h1>⸻ Contact Me ⸻</h1>
        <p>Have a project, collaboration, or cosmic alignment in mind? Reach out below.</p>
        
        {submitMessage && (
          <div style={{ 
            background: 'var(--accent)', 
            color: 'white', 
            padding: '1rem', 
            borderRadius: '8px', 
            marginTop: '1rem' 
          }}>
            {submitMessage}
          </div>
        )}
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </label>
          <label>
            Email
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </label>
          <label>
            Message
            <textarea 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button 
            type="submit" 
            className="cta"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
