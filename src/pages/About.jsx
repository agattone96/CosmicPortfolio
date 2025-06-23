import React from "react";
import "../App.css";

export default function About() {
  return (
    <div className="about cosmic-theme">
      {/* 🌌 Hero Banner */}
      <section className="about-hero">
        <h1 className="headline-glow">So... Who TF Am I?</h1>
        <p className="subheading-glitch">
          I’m Allison. A chaos alchemist. I turn creative overwhelm into strategy, identity, and beautiful systems that scream in color.
        </p>
      </section>

      {/* 🧬 Story */}
      <section className="about-section">
        <h2>🧠 Made of Strategy, Glitter, and Executive Dysfunction</h2>
        <p>
          I’ve never been just one thing. I’m a branding strategist, an operations nerd, an automation witch, and a design feral.
          I’ve led remote teams, launched product lines, built CRMs, designed ad campaigns, and made entire brands from scratch.
          I don’t fit neatly into a title—and I don’t expect your brand to either.
        </p>
        <p>
          My neurospicy brain means I see patterns and possibilities everywhere. I notice what others miss. I design with emotional
          intelligence, and I automate with ruthless precision.
        </p>
      </section>

      {/* 🎒 What I’ve Done */}
      <section className="about-section">
        <h2>🔧 My Multiverse of Skills</h2>
        <ul className="skill-list">
          <li><strong>🖌️ Visual Identity:</strong> Logos, color systems, typography, UI kits, brand books</li>
          <li><strong>🛰️ Creative Ops:</strong> Project management (Monday.com, Asana), remote workflows, asset coordination</li>
          <li><strong>🤖 AI & Automation:</strong> ChatGPT scripting, CRM automations, onboarding flows, Notion systems</li>
          <li><strong>💌 Digital Marketing:</strong> Email campaigns, social media strategy, launch plans, SEO setup</li>
          <li><strong>📦 Brand Execution:</strong> Mockups, ad design, print/web collateral, templates, packaging</li>
        </ul>
      </section>

      {/* 💫 Beliefs */}
      <section className="about-section">
        <h2>🌈 What I Believe</h2>
        <p>
          I believe branding is sacred. It’s how people remember you, feel you, and trust you. I believe systems should serve you—not
          suffocate you. I believe creators deserve workflows that match their brains. I believe in design that makes you feel seen.
        </p>
        <p>
          My work is for the rebels. The queer-led startups. The neurodivergent artists. The kink educators. The healing witches. The
          burned-out freelancers. The ones too weird for agencies and too brilliant to burn out.
        </p>
      </section>

      {/* 💼 Experience */}
      <section className="about-section split">
        <div>
          <h3>🌍 Experience Highlights</h3>
          <ul>
            <li>Senior Customer Support & Branding – <strong>SCLiquidator</strong></li>
            <li>Digital Client Manager – <strong>Beasley Media Group</strong></li>
            <li>Creative Freelancer – <strong>Multiple Industries</strong></li>
            <li>Founder – <strong>Popping Peppers (Hot Sauce Brand)</strong></li>
          </ul>
        </div>
        <div>
          <h3>🏆 Awards & Impact</h3>
          <ul>
            <li>Girl Scouts Gold Award (Leadership & Community Design)</li>
            <li>HubSpot Inbound Marketing Certified</li>
            <li>Built over 25+ visual brand systems and client automation stacks</li>
            <li>Helped increase client retention by up to 20% through ops clarity</li>
          </ul>
        </div>
      </section>

      {/* 🧭 Call to Action */}
      <section className="about-cta cosmic-gradient">
        <h2>✨ Ready to Build a Brand That Feels Like Home?</h2>
        <p>
          I create for the misfits, the dreamers, the dopamine-starved. You don’t need to have it all figured out—just be brave enough to start.
        </p>
        <a href="/contact" className="button large glow">Let’s Co-Create</a>
      </section>
    </div>
  );
}
