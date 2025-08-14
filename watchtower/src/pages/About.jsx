import React, { useEffect } from "react";
import "../styles/AboutUs.css";
import founder1 from "../assets/founder1.jpeg";
import founder2 from "../assets/founder2.jpeg";
import founder3 from "../assets/founder3.jpeg";

const teamMembers = [
  { name: "Praise Edoho", role: "CEO & Founder", photo: founder1 },
  { name: "Jane Doe", role: "CTO", photo: founder2 },
  { name: "John Smith", role: "COO", photo: founder3 },
];

const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero hidden">
        <div className="hero-overlay">
          <h1>About Watchtower</h1>
          <p>Streaming movies and shows anytime, anywhere.</p>
        </div>
      </section>

      <section className="company-story hidden">
        <h2>Our Story</h2>
        <p>
          Watchtower started with a simple mission: to make entertainment accessible
          to everyone, everywhere. From classic movies to the latest hits, we provide
          a seamless streaming experience across all devices.
        </p>
        <p>
          Our team is passionate about delivering high-quality content with intuitive
          interfaces, personalized recommendations, and a commitment to your privacy.
        </p>
      </section>

      <section className="team-section hidden">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.photo} alt={member.name} className="team-photo" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section hidden">
        <h2>Our Values</h2>
        <div className="values-cards">
          <div className="value-card">
            <h3>Customer First</h3>
            <p>Everything we do is focused on creating the best experience for our users.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We continuously improve our platform to deliver cutting-edge streaming technology.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>Transparency, honesty, and respect guide all our decisions and partnerships.</p>
          </div>
        </div>
      </section>

      <section className="join-form hidden">
        <h2>Join Watchtower Today</h2>
        <p>Enter your email to start streaming:</p>
        <div className="form-wrapper">
          <input type="email" placeholder="Email address" />
          <button>Get Started</button>
        </div>
      </section>

      <section className="footer hidden">
        <div className="footer-top">
          <h2>Watchtower</h2>
          <p>Stream your favorite movies and shows anytime, anywhere.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Watchtower. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
