// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <main className="App-main">
          <Routes>
            <Route path="/" element={
              <>
                <h1>Enter the Archive</h1>
                <p>Welcome to my portfolio. Elegant. Gothic. Modern.</p>
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;