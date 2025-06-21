
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  const skills = [
    { name: "Frontend Development", description: "React, Vue, Angular" },
    { name: "Backend Development", description: "Node.js, Python, Java" },
    { name: "UI/UX Design", description: "Figma, Adobe Creative Suite" },
    { name: "Mobile Development", description: "React Native, Flutter" }
  ];

  return (
    <>
      <Helmet>
        <title>About | Cosmic Portfolio</title>
        <meta name="description" content="Learn about my journey as a creative professional, exploring the intersection of art, technology, and design." />
        <meta property="og:title" content="About | Cosmic Portfolio" />
        <meta property="og:description" content="Creative professional exploring art, technology, and design." />
        <meta property="og:image" content="/og-banner.png" />
      </Helmet>
      <motion.div
        className="page about-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I'm a visual alchemist — blending gothic elegance, digital ink, and modern minimalism.
          My work lives at the intersection of beauty and shadow, creating experiences that 
          captivate and inspire.
        </p>
        <p>
          With years of experience in web development and design, I specialize in creating
          immersive digital experiences that tell stories and solve real problems.
        </p>
        
        <h2 style={{ marginTop: '3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default About;
