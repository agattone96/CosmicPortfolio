import React, { useEffect, useState } from "react";
import "../App.css";
import projects from "../data/projects.json"; // Ensure your JSON file includes title, description, tags, image

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.tags?.map((t) => t.toLowerCase()).includes(filter)
        );

  return (
    <div className="portfolio cosmic-theme">
      {/* 🚀 Page Hero */}
      <section className="portfolio-hero">
        <h1 className="headline-glow">The Work That Hits</h1>
        <p className="subheading-glitch">
          Branding systems, launch kits, stickers, UI kits, and aesthetic anarchy.
        </p>
      </section>

      {/* 🎛 Filter Bar */}
      <section className="portfolio-filter">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          ✦ All
        </button>
        <button
          className={filter === "branding" ? "active" : ""}
          onClick={() => setFilter("branding")}
        >
          Logos & Identity
        </button>
        <button
          className={filter === "packaging" ? "active" : ""}
          onClick={() => setFilter("packaging")}
        >
          Packaging
        </button>
        <button
          className={filter === "automation" ? "active" : ""}
          onClick={() => setFilter("automation")}
        >
          Automations
        </button>
        <button
          className={filter === "campaign" ? "active" : ""}
          onClick={() => setFilter("campaign")}
        >
          Campaigns
        </button>
      </section>

      {/* 🖼️ Project Gallery */}
      <section className="project-gallery">
        {filteredProjects.map((project, i) => (
          <div className="project-card cosmic-card" key={i}>
            <div
              className="project-image"
              style={{
                backgroundImage: `url(${project.image || "/placeholder.png"})`,
              }}
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags?.map((tag, idx) => (
                  <span key={idx} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <div className="no-results">
            <p>🪐 Nothing in this galaxy yet... try a different filter.</p>
          </div>
        )}
      </section>

      {/* ✨ Call to Action */}
      <section className="portfolio-cta cosmic-gradient">
        <h2>Want to See What Your Brand Could Look Like?</h2>
        <p>I do bold. I do weird. I do unforgettable. Let’s make it real.</p>
        <a href="/contact" className="button large glow">Request a Custom Sample</a>
      </section>
    </div>
  );
}
