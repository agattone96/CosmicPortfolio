import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { HelmetProvider } from 'react-helmet-async';

function HomePage() {
  return (
    <motion.div
      className="page home-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Enter the Archive</h1>
      <p>Welcome to my portfolio. Elegant. Gothic. Modern.</p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ marginTop: '2rem' }}
      >
        <p style={{ fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
          Explore my work, discover my skills, and let's create something extraordinary together.
        </p>
      </motion.div>
    </motion.div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />

      <main className="App-main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;