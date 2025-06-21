import React from 'react';
import Header from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/contact.css';

function Contact() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-section">
          <h1>⸻ Contact Me ⸻</h1>
          <p>Have a project, collaboration, or cosmic alignment in mind? Reach out below.</p>
          <form className="contact-form" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button type="submit" className="cta">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
