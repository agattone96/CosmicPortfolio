
// components/Nav.jsx
import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  return (
    <header className="App-header">
      <div className="logo-text">Cosmic Portfolio</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Nav;
