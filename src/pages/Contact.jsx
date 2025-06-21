
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
        <form className="contact-form" name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit" className="cta">Send Message</button>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
