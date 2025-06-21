
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: 'Popping Peppers',
    description: 'A spicy, artisanal hot sauce brand built with attitude and alt-food rebellion.',
    image: '/assets/images/peppers.jpg',
  },
  {
    title: 'Cosmic Chaos Studio',
    description: 'My personal branding system: rebellious stickercore, gothic elegance, cosmic aesthetic.',
    image: '/assets/images/cosmic.jpg',
  },
  {
    title: 'Artful Curator',
    description: 'A SaaS platform for AI-driven image metadata tagging and archive curation.',
    image: '/assets/images/curator.jpg',
  }
];

const Portfolio = () => {
  return (
    <motion.div
      className="page portfolio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1>⸻ Portfolio Archive ⸻</h1>
      <section className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Portfolio;
