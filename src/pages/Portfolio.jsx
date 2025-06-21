
// pages/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      className="page portfolio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1>Selected Works</h1>
      <p>Coming soon: a gallery of darkness, spark, and soul.</p>
    </motion.div>
  );
};

export default Portfolio;
