
// components/Nav.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <header className="App-header">
      <img src={logo} alt="Site Logo" className="logo" />
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Nav;
