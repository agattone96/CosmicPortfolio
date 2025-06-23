
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const RippleButton = ({ children, onClick, variant = 'primary', ...props }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now()
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Trigger confetti on cosmic button clicks
    if (variant === 'cosmic') {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { 
          x: (rect.left + x) / window.innerWidth,
          y: (rect.top + y) / window.innerHeight
        },
        colors: ['#8A2BE2', '#FF1493', '#00FFFF', '#FFD700']
      });
    }
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    if (onClick) onClick(e);
  };

  const getButtonStyles = () => {
    const baseStyles = "relative overflow-hidden px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105";
    
    switch (variant) {
      case 'cosmic':
        return `${baseStyles} bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white shadow-lg hover:shadow-purple-500/50`;
      case 'outline':
        return `${baseStyles} border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white`;
      default:
        return `${baseStyles} bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg`;
    }
  };

  return (
    <motion.button
      className={getButtonStyles()}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default RippleButton;
