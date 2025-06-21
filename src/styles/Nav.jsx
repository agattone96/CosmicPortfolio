import React from 'react';
import './Nav.css';
import logo from '../assets/images/logo.png';

function Nav() {
  return (
    <header className="nav-header">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <button className="theme-toggle" aria-label="Toggle Theme">🌙</button>
      </nav>
    </header>
  );
}

export default Nav;
