
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="App-header">
      <Link to="/" className="logo-text">
        Cosmic Portfolio
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="nav desktop-nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
          About
        </Link>
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""}>
          Portfolio
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          Contact
        </Link>
        <ThemeToggle />
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            <motion.nav
              className="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
              <Link to="/about" onClick={closeMobileMenu}>About</Link>
              <Link to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link>
              <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
              <div className="mobile-theme-toggle">
                <ThemeToggle />
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
