// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Site Logo" className="logo" />
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Portfolio</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main className="App-main">
          <h1>Enter the Archive</h1>
          <p>Welcome to my portfolio. Elegant. Gothic. Modern.</p>
        </main>

        <footer className="App-footer">
          <p>Built in shadow, polished in light.</p>
          <small>© 2025 YourNameHere</small>
        </footer>
      </div>
    </Router>
  );
}

export default App;