
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Nav = ({ onContactClick }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleContactClick = (e) => {
    if (onContactClick) {
      e.preventDefault();
      onContactClick();
      closeMobileMenu();
    }
  };

  return (
    <header className="App-header">
      <div className="nav-container">
        <Link to="/" className="logo-text">
          Cosmic Portfolio
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>
            About
          </Link>
          <Link to="/portfolio" className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}>
            Portfolio
          </Link>
          <ThemeToggle />
          <Link 
            to="/contact" 
            className="nav-contact-btn"
            onClick={handleContactClick}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            <motion.nav
              className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`mobile-nav-link ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={`mobile-nav-link ${location.pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
              <Link 
                to="/portfolio" 
                onClick={closeMobileMenu}
                className={`mobile-nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}
              >
                Portfolio
              </Link>
              <Link 
                to="/contact" 
                onClick={(e) => {
                  handleContactClick(e);
                  if (!onContactClick) closeMobileMenu();
                }}
                className={`mobile-nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              >
                Contact
              </Link>
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
