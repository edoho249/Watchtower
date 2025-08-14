import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";
import tvIcon from "../assets/tv.png";
import deviceIcon from "../assets/device.png";
import downloadIcon from "../assets/download.png";
import unlimitedIcon from "../assets/unlimited.png";
import profilesIcon from "../assets/profiles.png";
import fourKIcon from "../assets/4k.png";

const reasons = [
  {
    title: "Enjoy on your TV",
    text: "Stream on smart TVs, gaming consoles, or your laptop.",
    icon: tvIcon,
  },
  {
    title: "Watch Anywhere",
    text: "Take your favorite shows with you on any device.",
    icon: deviceIcon,
  },
  {
    title: "Download and Go",
    text: "Save shows offline and watch when you’re not connected.",
    icon: downloadIcon,
  },
  {
    title: "Unlimited Content",
    text: "Access thousands of movies and TV shows with no limits.",
    icon: unlimitedIcon,
  },
  {
    title: "Multiple Profiles",
    text: "Create separate profiles for family members and friends.",
    icon: profilesIcon,
  },
  {
    title: "High-Quality Streaming",
    text: "Enjoy 4K Ultra HD and HDR content on supported devices.",
    icon: fourKIcon,
  },
];

const movies = [
  {
    title: "Tenet",
    image: "https://image.tmdb.org/t/p/original/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    title: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    title: "Black Panther",
    image: "https://image.tmdb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
  },
  {
    title: "Joker",
    image: "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
];

const faqs = [
  { question: "Where can I watch?", answer: "You can watch on any device with our app." },
  { question: "What is Watchtower?", answer: "Watchtower is our streaming platform for movies and series." },
  { question: "Can I cancel anytime?", answer: "Yes, you can cancel your membership anytime." },
  { question: "Is there a free trial?", answer: "Yes, enjoy 7 days of free access." },
  { question: "How many devices can I use?", answer: "Up to 5 devices simultaneously." },
  { question: "Do you offer subtitles?", answer: "Yes, most content comes with subtitles in multiple languages." },
];

// ScrollReveal component
const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cardSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="home-page">

      <ScrollReveal>
        <section className="movie-section">
          <h2>Trending Now</h2>
          <Slider {...cardSettings}>
            {movies.map((movie, index) => (
              <div key={index} className="movie-card">
                <img src={movie.image} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </Slider>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="movie-section">
          <h2>Popular</h2>
          <Slider {...cardSettings}>
            {movies.map((movie, index) => (
              <div key={index} className="movie-card">
                <img src={movie.image} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </Slider>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="movie-section">
          <h2>Top Rated</h2>
          <Slider {...cardSettings}>
            {movies.map((movie, index) => (
              <div key={index} className="movie-card">
                <img src={movie.image} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </Slider>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="reasons-section">
          <h2>More Reasons to Join</h2>
          <div className="reasons-cards">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <img src={reason.icon} alt={reason.title} className="reason-icon" />
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-cards">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-card ${openIndex === index ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-header">
                  <p>{faq.question}</p>
                  <span>{openIndex === index ? "×" : "+"}</span>
                </div>
                {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
          <div className="email-input">
            <p>Ready to join? Enter your email to start:</p>
            <input type="email" placeholder="Email address" />
            <button>Get Started</button>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="footer">
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
      </ScrollReveal>

    </div>
  );
};

export default Home;
