import React from "react";
import { motion } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Gothic Web Design",
      description: "A dark, elegant website with modern gothic aesthetics and smooth animations.",
      image: "https://via.placeholder.com/400x200/1a1a1a/a86ad2?text=Gothic+Web+Design",
      tech: ["React", "CSS3", "Framer Motion"]
    },
    {
      id: 2,
      title: "Digital Art Portfolio",
      description: "Interactive portfolio showcasing digital artwork with immersive user experience.",
      image: "https://via.placeholder.com/400x200/1a1a1a/a86ad2?text=Digital+Art+Portfolio",
      tech: ["Vue.js", "Three.js", "WebGL"]
    },
    {
      id: 3,
      title: "Minimalist App Interface",
      description: "Clean, minimal interface design focusing on user experience and functionality.",
      image: "https://via.placeholder.com/400x200/1a1a1a/a86ad2?text=Minimalist+App",
      tech: ["React Native", "TypeScript", "Expo"]
    }
  ];

const Portfolio = () => {
  const projects = projectsData;

  const handleExportJSON = () => {
    const data = JSON.stringify(projects, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-projects.json';
    a.click();
    URL.revokeObjectURL(url);
  };

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
            {project.tech && (
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    style={{
                      fontSize: '0.8rem',
                      background: 'var(--accent)',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;