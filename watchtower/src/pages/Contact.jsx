import React from 'react';
import '../styles/Pages.css';


const Contact = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">📞 Contact Us</h1>
      <p className="page-description">
        Got questions, feedback, or partnership ideas? The Watchtower team would love to hear from you!
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn-red">Send Message</button>
      </form>

      <div className="contact-info">
        <p>📍 123 Watchtower Street, Lagos, Nigeria</p>
        <p>📧 support@watchtower.com</p>
        <p>📱 +234 800 123 4567</p>
      </div>
    </div>
  );
};

export default Contact;
