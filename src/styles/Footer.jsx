import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Built in shadow, polished in light. 🕯️</p>
      <div className="socials">
        <a href="https://linkedin.com">LinkedIn</a> | 
        <a href="mailto:you@example.com">Email</a> | 
        <a href="https://artstation.com">ArtStation</a>
      </div>
      <small>&copy; 2025 Unholy Visions</small>
    </footer>
  );
}

export default Footer;
