// src/components/Header.js
import React from 'react';
import { Link } from 'lucide-react';// For navigation links
import './header.css'; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="https://via.placeholder.com/150" alt="Company Logo" />
      </div>
      <nav className="header-nav">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/services" className="header-link">Services</Link>
        <Link to="/about" className="header-link">About</Link>
        <Link to="/book-now" className="header-link">Book Now</Link>
      </nav>
    </header>
  );
};

export default Header;
