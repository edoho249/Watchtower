import React from 'react';
import '../styles/Pages.css';

const Blog = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">📰 Watchtower Blog</h1>
      <p className="page-description">
        Latest updates, movie reviews, and behind-the-scenes stories from the Watchtower team.
      </p>

      <div className="blog-list">
        <div className="blog-card">
          <h3>🎬 Top 10 Action Movies of 2025</h3>
          <p>Our curated list of the most thrilling action films you can’t miss this year.</p>
          <button className="btn-red">Read More</button>
        </div>
        <div className="blog-card">
          <h3>🍿 How to Build the Perfect Home Cinema</h3>
          <p>From sound systems to lighting, we cover everything you need to upgrade movie night.</p>
          <button className="btn-red">Read More</button>
        </div>
        <div className="blog-card">
          <h3>🎥 Exclusive Interview with a Hollywood Director</h3>
          <p>Go behind the scenes and learn about the creative process of filmmaking.</p>
          <button className="btn-red">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
