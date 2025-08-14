import React from 'react';
import '../styles/Pages.css';


const Careers = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">💼 Careers at Watchtower</h1>
      <p className="page-description">
        Join our passionate team and help us bring the world of cinema closer to everyone.
      </p>

      <div className="job-list">
        <div className="job-card">
          <h3>🎨 UI/UX Designer</h3>
          <p>Design beautiful and user-friendly experiences for movie lovers.</p>
          <button className="btn-red">Apply Now</button>
        </div>
        <div className="job-card">
          <h3>💻 Frontend Developer (React)</h3>
          <p>Help build and maintain our cutting-edge movie platform.</p>
          <button className="btn-red">Apply Now</button>
        </div>
        <div className="job-card">
          <h3>📢 Social Media Manager</h3>
          <p>Engage our audience with creative campaigns and updates.</p>
          <button className="btn-red">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
