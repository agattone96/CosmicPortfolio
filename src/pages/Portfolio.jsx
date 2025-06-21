
import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Gothic Web Design",
      description: "A dark, elegant website with modern gothic aesthetics and smooth animations.",
      image: "https://via.placeholder.com/400x200/1a1a1a/a86ad2?text=Gothic+Web+Design"
    },
    {
      id: 2,
      title: "Digital Art Portfolio",
      description: "Interactive portfolio showcasing digital artwork with immersive user experience.",
      image: "https://via.placeholder.com/400x200/1a1a1a/a86ad2?text=Digital+Art+Portfolio"
    },
    {
      id: 3,
      title: "Minimalist App Interface",
      description: "Clean, minimal interface design focusing on user experience and functionality.",
      image: "https://via.placeholder.com/400x200/1a1a1a/a86ad2?text=Minimalist+App"
    }
  ];

  return (
    <motion.div
      className="page portfolio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1>⸻ Portfolio ⸻</h1>
      <p>A collection of my recent work in digital design and development.</p>
      
      <div className="project-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="project-image"
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
