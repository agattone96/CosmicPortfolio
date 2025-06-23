import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="home cosmic-theme">
      {/* ⛧ Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="starfield-overlay"></div>
          <div className="nebula-glow"></div>
        </div>
        <div className="hero-content">
          <h1 className="headline-glitch">Branding Chaos into Cosmos</h1>
          <p className="tagline">
            I build cosmic identities, neurodivergent brand systems, and unholy good automations for the overstimulated entrepreneur.
          </p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="button glow">✨ View My Work</Link>
            <Link to="/contact" className="button outline">Summon Me</Link>
          </div>
        </div>
      </section>

      {/* 🪐 Who I Am */}
      <section className="about-blurb">
        <div className="section-heading">
          <h2 className="section-title">Hey, I’m Alli.</h2>
          <p className="section-subtitle">Designer, strategist, chaos wrangler.</p>
        </div>
        <p className="section-body">
          I help alt brands, neurodivergent creators, and emotionally intelligent founders build unforgettable identities—
          not just with visuals, but with strategy, automation, and obsession-worthy detail.
        </p>
      </section>

      {/* 🧩 Core Offerings */}
      <section className="service-grid">
        <h2 className="section-title center">🧠 I Specialize In</h2>
        <div className="card-grid">
          <div className="card cosmic-card">
            <h3>⚡ Brand Systems</h3>
            <p>Full-stack visual language: logos, typography, palette, tone, motion, and more.</p>
          </div>
          <div className="card cosmic-card">
            <h3>🧬 Automation Design</h3>
            <p>Workflow blueprints & AI-powered systems to unclog your brain and reclaim your time.</p>
          </div>
          <div className="card cosmic-card">
            <h3>🛰️ Creative Ops</h3>
            <p>Remote team workflows, CRM optimization, and asset delivery pipelines that actually work.</p>
          </div>
          <div className="card cosmic-card">
            <h3>💌 Launch Support</h3>
            <p>Email sequences, social kits, and campaign planning for client-ready rollouts.</p>
          </div>
        </div>
      </section>

      {/* 🔥 Highlighted Work */}
      <section className="featured-projects">
        <h2 className="section-title center">Featured Drops</h2>
        <div className="project-preview-row">
          <div className="project-card">
            <div className="project-thumbnail shimmer-placeholder"></div>
            <h4>Cosmic Chaos Studio</h4>
            <p>Stickercore branding for neurospicy creatives. Loud. Unfiltered. Galactic.</p>
          </div>
          <div className="project-card">
            <div className="project-thumbnail shimmer-placeholder"></div>
            <h4>Popping Peppers</h4>
            <p>Identity and product packaging for a Florida-based hot sauce + seed brand.</p>
          </div>
        </div>
        <Link to="/portfolio" className="button center">🔍 See Full Portfolio</Link>
      </section>

      {/* 💬 Testimonials */}
      <section className="testimonial-strip">
        <div className="testimonial">
          <p>"Allison doesn’t just make things look good—she makes them work. She's the full creative ops stack."</p>
          <span>— Luz Fernandez, Beasley Media Group</span>
        </div>
        <div className="testimonial">
          <p>"Her systems saved me hours a week. Her branding made my audience cry. Hire her."</p>
          <span>— Cynthia Heathcoe, SCL</span>
        </div>
      </section>

      {/* 🚀 CTA Banner */}
      <section className="cta-banner cosmic-gradient">
        <h2>Let’s make something unignorable.</h2>
        <p>I'm here for the weird, the wild, the wonderful—are you?</p>
        <Link to="/contact" className="button large inverted">Start a Project</Link>
      </section>
    </div>
  );
}
