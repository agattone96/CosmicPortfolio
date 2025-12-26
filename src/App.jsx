
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HelmetProvider } from 'react-helmet-async';
import "./App.css";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContactPanel from "./components/ContactPanel";
import CosmicCanvas from "./rendering/CosmicCanvas";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// Hooks
import { useTheme } from "./hooks/useTheme";

export function AppContent() {
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { currentTheme } = useTheme();

  return (
    <div className={`App min-h-screen relative theme-${currentTheme}`}>
      <CosmicCanvas />
      
      <div className="relative z-10">
        <Nav onContactClick={() => setIsContactOpen(true)} />

        <main className="App-main pt-20">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>

      <ContactPanel 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
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
