import React from 'react';
import Header from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/about.css';

function About() {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="bio">
          <h1>⸻ The Artist ⸻</h1>
          <p className="dropcap">
            My name is Allison Gattone. I design for the dopamine-deprived and dream in nebulae. This portfolio is a digital altar to duality — professionalism wrapped in aesthetic rebellion, cosmic madness, and design systems made for those who don't fit inside boxes.
          </p>
          <p>
            I build brands, rituals, and interfaces. My work lives at the edge of functionality and visual subversion. I speak fluent meltdown. I render visual identity systems that seduce the eye and soothe overstimulated souls.
          </p>
          <p>
            Tools I wield include React, Procreate, Canva, Adobe CC, Vite, Tailwind, and my own chaos engine. My aesthetic leans femme goth-core, cosmic sticker grunge, and hauntingly structured UI. Welcome to my archive.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
