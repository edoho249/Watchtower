import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logos.png" alt="Watchtower" />
        </Link>
      </div>
      <div className={`menu ${open ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
