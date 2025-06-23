
import { useState, useEffect } from 'react';

const themes = {
  cosmic: {
    name: 'Cosmic',
    primary: '#8A2BE2',
    secondary: '#FF1493',
    accent: '#00FFFF',
    background: '#0a051a',
    surface: '#1a0d2e',
    text: '#ffffff'
  },
  neon: {
    name: 'Neon',
    primary: '#00FF41',
    secondary: '#FF0080',
    accent: '#FFFF00',
    background: '#000000',
    surface: '#111111',
    text: '#00FF41'
  },
  bloodGlitch: {
    name: 'Blood Glitch',
    primary: '#FF0000',
    secondary: '#8B0000',
    accent: '#FFD700',
    background: '#0D0000',
    surface: '#1A0000',
    text: '#FF6B6B'
  },
  divineLight: {
    name: 'Divine Light',
    primary: '#FFD700',
    secondary: '#FFA500',
    accent: '#FFFFFF',
    background: '#FFF8DC',
    surface: '#FFFACD',
    text: '#8B4513'
  }
};

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('cosmic');

  useEffect(() => {
    const savedTheme = localStorage.getItem('cosmicTheme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;
    
    Object.entries(theme).forEach(([key, value]) => {
      if (key !== 'name') {
        root.style.setProperty(`--color-${key}`, value);
      }
    });
    
    localStorage.setItem('cosmicTheme', currentTheme);
  }, [currentTheme]);

  const switchTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  return {
    currentTheme,
    theme: themes[currentTheme],
    availableThemes: Object.keys(themes),
    switchTheme
  };
};
