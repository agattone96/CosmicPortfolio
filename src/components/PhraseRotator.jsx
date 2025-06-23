
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  "Branding Chaos into Cosmos",
  "Neural Pathways to Visual Glory",
  "Dopamine-Driven Design Systems",
  "Aesthetic Anarchy for Alt Brands",
  "Cosmic Identity Architecture"
];

const PhraseRotator = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-20 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentPhrase}
          initial={{ y: 50, opacity: 0, rotateX: 90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -50, opacity: 0, rotateX: -90 }}
          transition={{ 
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="absolute text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
          style={{
            fontFamily: 'Unbounded, sans-serif',
            textShadow: '0 0 30px rgba(138, 43, 226, 0.5)'
          }}
        >
          {phrases[currentPhrase]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default PhraseRotator;
