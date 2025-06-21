
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="page about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1>About Me</h1>
      <p>
        I'm a visual alchemist — blending gothic elegance, digital ink, and modern minimalism.
        My work lives at the intersection of beauty and shadow.
      </p>
    </motion.div>
  );
};

export default About;t;
