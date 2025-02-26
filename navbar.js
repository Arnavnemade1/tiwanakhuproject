import React, { useState } from 'react';
import { Github, Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Tiwanaku</h1>
        </div>
        
        <div className="navbar-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
          </button>
          
          <a 
            href="https://github.com/tiwanaku-project" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
            aria-label="GitHub repository"
          >
            <Github className="icon" />
          </a>
          
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#overview">Overview</a>
          <a href="#history">History</a>
          <a href="#architecture">Architecture</a>
          <a href="#artifacts">Artifacts</a>
          <a href="#agriculture">Agriculture</a>
          <a href="#society">Society</a>
          <a href="#geography">Geography</a>
          <a href="#legacy">Research</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
