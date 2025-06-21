
// pages/Contact.jsx
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
      <h1>Get In Touch</h1>
      <p>Email me at <a href="mailto:yourname@example.com">yourname@example.com</a></p>
    </motion.div>
  );
};

export default Contact;
