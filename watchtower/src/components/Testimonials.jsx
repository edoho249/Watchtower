import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  { name: 'Alice', text: 'Watchtower helped me discover amazing movies!' },
  { name: 'Bob', text: 'The design is clean and super easy to use.' },
  { name: 'Charlie', text: 'I love the trending section! Always up-to-date.' },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Users Say</h2>
      <div className="cards">
        {testimonials.map((t, i) => (
          <div className="card" key={i}>
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
