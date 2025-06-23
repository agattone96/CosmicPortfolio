import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="home cosmic-theme">
      {/* ⛧ Hero Section */}
      <section className="hero-section">
        <div className="hero-background" role="presentation" aria-hidden="true">
          <div className="starfield-css" role="presentation"></div>
        </div>
        <div className="hero-content">
          <h1 className="headline-glitch">Branding Chaos into Cosmos</h1>
          <p className="tagline">
            I build cosmic identities, neurodivergent brand systems, and unholy good automations for the overstimulated entrepreneur.
          </p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="button glow primary-cta">✨ View My Work</Link>
            <Link to="/contact" className="button outline">Summon Me</Link>
          </div>
        </div>
      </section>

      <div className="section-divider" role="presentation" aria-hidden="true"></div>

      {/* 🪐 Who I Am */}
      <section className="about-blurb">
        <div className="section-heading">
          <h2 className="section-title">Hey, I'm Alli.</h2>
          <p className="section-subtitle">Designer, strategist, chaos wrangler.</p>
        </div>
        <p className="section-body accessible-text">
          I help alt brands, neurodivergent creators, and emotionally intelligent founders build unforgettable identities—not just with visuals, but with strategy, automation, and obsession-worthy detail.
        </p>
      </section>

      <div className="section-divider" role="presentation" aria-hidden="true"></div>

      {/* 🧩 Core Offerings */}
      <section className="service-grid alt-bg">
        <h2 className="section-title center">🧠 I Specialize In</h2>
        <div className="card-grid">
          <div className="card cosmic-card" tabIndex="0">
            <h3>⚡ Brand Systems</h3>
            <p className="accessible-text">Full-stack visual language: logos, typography, palette, tone, motion, and more.</p>
          </div>
          <div className="card cosmic-card" tabIndex="0">
            <h3>🧬 Automation Design</h3>
            <p className="accessible-text">Workflow blueprints & AI-powered systems to unclog your brain and reclaim your time.</p>
          </div>
          <div className="card cosmic-card" tabIndex="0">
            <h3>🛰️ Creative Ops</h3>
            <p className="accessible-text">Remote team workflows, CRM optimization, and asset delivery pipelines that actually work.</p>
          </div>
          <div className="card cosmic-card" tabIndex="0">
            <h3>💌 Launch Support</h3>
            <p className="accessible-text">Email sequences, social kits, and campaign planning for client-ready rollouts.</p>
          </div>
        </div>
      </section>

      <div className="section-divider" role="presentation" aria-hidden="true"></div>

      {/* 🔥 Highlighted Work */}
      <section className="featured-projects">
        <h2 className="section-title center">Featured Drops</h2>
        <div className="card-grid">
          <Link to="/portfolio" className="card cosmic-card featured-card" tabIndex="0" role="button" aria-label="View Cosmic Chaos Studio project">
            <div className="project-thumbnail shimmer-placeholder" role="img" aria-label="Cosmic Chaos Studio project preview"></div>
            <div className="project-info">
              <h3>Cosmic Chaos Studio</h3>
              <p className="accessible-text">Stickercore branding for neurospicy creatives. Loud. Unfiltered. Galactic.</p>
            </div>
          </Link>
          <Link to="/portfolio" className="card cosmic-card featured-card" tabIndex="0" role="button" aria-label="View Popping Peppers project">
            <div className="project-thumbnail shimmer-placeholder" role="img" aria-label="Popping Peppers project preview"></div>
            <div className="project-info">
              <h3>Popping Peppers</h3>
              <p className="accessible-text">Identity and product packaging for a Florida-based hot sauce + seed brand.</p>
            </div>
          </Link>
        </div>
        <div className="section-cta">
          <Link to="/portfolio" className="button outline secondary-cta">🔍 See Full Portfolio</Link>
        </div>
      </section>

      <div className="section-divider" role="presentation" aria-hidden="true"></div>

      {/* 💬 Testimonials */}
      <section className="testimonial-strip alt-bg">
        <div className="testimonial">
          <p className="accessible-text">"Allison doesn't just make things look good—she makes them work. She's the full creative ops stack."</p>
          <span>— Luz Fernandez, Beasley Media Group</span>
        </div>
        <div className="testimonial">
          <p className="accessible-text">"Her systems saved me hours a week. Her branding made my audience cry. Hire her."</p>
          <span>— Cynthia Heathcoe, SCL</span>
        </div>
      </section>

      <div className="section-divider" role="presentation" aria-hidden="true"></div>

      {/* 🚀 CTA Banner */}
      <section className="cta-banner cosmic-gradient">
        <h2>Let's make something unignorable.</h2>
        <p className="cta-text">I'm here for the weird, the wild, the wonderful—are you?</p>
        <Link to="/contact" className="button large inverted primary-cta">Start a Project</Link>
      </section>
    </div>
  );
}