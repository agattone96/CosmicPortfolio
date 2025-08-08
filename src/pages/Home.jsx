import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="home">
      {/* Modern Hero Section */}
      <section className="hero-section">
        <div className="hero-background" role="presentation" aria-hidden="true">
          <div className="particle-bg" role="presentation"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-icon"></div>
            Available for projects
          </div>
          <h1 className="display-lg hero-title">
            Branding <span className="highlight gradient-text">Chaos</span> into <span className="highlight gradient-text">Cosmos</span>
          </h1>
          <p className="body-xl hero-description">
            I build cosmic identities, neurodivergent brand systems, and unholy good automations for the overstimulated entrepreneur.
          </p>
          <div className="hero-cta">
            <Link to="/portfolio" className="btn btn-primary btn-lg">
              ✨ View My Work
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Summon Me
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider with-icon" role="presentation" aria-hidden="true"></div>

      {/* About Section */}
      <section className="section">
        <div className="section-header">
          <div className="section-badge">👋 Introduction</div>
          <h2 className="heading-xl section-title">Hey, I'm Alli.</h2>
          <p className="body-lg section-subtitle">Designer, strategist, chaos wrangler.</p>
        </div>
        <p className="body-xl" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          I help alt brands, neurodivergent creators, and emotionally intelligent founders build unforgettable identities—not just with visuals, but with strategy, automation, and obsession-worthy detail.
        </p>
      </section>

      <div className="section-divider" role="presentation" aria-hidden="true"></div>

      {/* Services Section */}
      <section className="section section-alt">
        <div className="section-header">
          <div className="section-badge">🧠 Expertise</div>
          <h2 className="heading-xl section-title">I Specialize In</h2>
        </div>
        <div className="grid grid-auto">
          <div className="card service-card" tabIndex="0">
            <div className="icon">⚡</div>
            <h3 className="heading-md">Brand Systems</h3>
            <p className="body-md">Full-stack visual language: logos, typography, palette, tone, motion, and more.</p>
          </div>
          <div className="card service-card" tabIndex="0">
            <div className="icon">🧬</div>
            <h3 className="heading-md">Automation Design</h3>
            <p className="body-md">Workflow blueprints & AI-powered systems to unclog your brain and reclaim your time.</p>
          </div>
          <div className="card service-card" tabIndex="0">
            <div className="icon">🛰️</div>
            <h3 className="heading-md">Creative Ops</h3>
            <p className="body-md">Remote team workflows, CRM optimization, and asset delivery pipelines that actually work.</p>
          </div>
          <div className="card service-card" tabIndex="0">
            <div className="icon">💌</div>
            <h3 className="heading-md">Launch Support</h3>
            <p className="body-md">Email sequences, social kits, and campaign planning for client-ready rollouts.</p>
          </div>
        </div>
      </section>

      <div className="section-divider" role="presentation" aria-hidden="true"></div>

      {/* Featured Work */}
      <section className="section">
        <div className="section-header">
          <div className="section-badge">🔥 Portfolio</div>
          <h2 className="heading-xl section-title">Featured Drops</h2>
        </div>
        <div className="grid grid-auto-lg">
          <Link to="/portfolio" className="project-card" tabIndex="0" role="button" aria-label="View Cosmic Chaos Studio project">
            <div className="project-image">
              <div className="placeholder-icon">🎨</div>
            </div>
            <div className="project-info">
              <h3 className="heading-md">Cosmic Chaos Studio</h3>
              <p className="body-md">Stickercore branding for neurospicy creatives. Loud. Unfiltered. Galactic.</p>
              <div className="project-tags">
                <span className="tag">Branding</span>
                <span className="tag">Identity</span>
                <span className="tag">Visual Design</span>
              </div>
            </div>
          </Link>
          <Link to="/portfolio" className="project-card" tabIndex="0" role="button" aria-label="View Popping Peppers project">
            <div className="project-image">
              <div className="placeholder-icon">🌶️</div>
            </div>
            <div className="project-info">
              <h3 className="heading-md">Popping Peppers</h3>
              <p className="body-md">Identity and product packaging for a Florida-based hot sauce + seed brand.</p>
              <div className="project-tags">
                <span className="tag">Packaging</span>
                <span className="tag">Product Design</span>
                <span className="tag">Brand Identity</span>
              </div>
            </div>
          </Link>
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/portfolio" className="btn btn-secondary btn-md">
            🔍 See Full Portfolio
          </Link>
        </div>
      </section>

      <div className="section-divider" role="presentation" aria-hidden="true"></div>

      {/* Testimonials */}
      <section className="section section-alt">
        <div className="section-header">
          <div className="section-badge">💬 Testimonials</div>
          <h2 className="heading-xl section-title">Client Love</h2>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <p className="testimonial-content">
              "Allison doesn't just make things look good—she makes them work. She's the full creative ops stack."
            </p>
            <div className="testimonial-author">— Luz Fernandez, Beasley Media Group</div>
          </div>
          <div className="testimonial">
            <p className="testimonial-content">
              "Her systems saved me hours a week. Her branding made my audience cry. Hire her."
            </p>
            <div className="testimonial-author">— Cynthia Heathcoe, SCL</div>
          </div>
        </div>
      </section>

      <div className="section-divider" role="presentation" aria-hidden="true"></div>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="heading-xl section-title">Let's make something unignorable.</h2>
        <p className="body-lg section-subtitle">I'm here for the weird, the wild, the wonderful—are you?</p>
        <Link to="/contact" className="btn btn-lg">
          Start a Project
        </Link>
      </section>
    </div>
  );
}