import React from 'react';
import { Github, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Tiwanaku Project</h3>
          <p>A digital exploration of the ancient Andean civilization</p>
        </div>
        
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#artifacts">Artifacts</a></li>
            <li><a href="#agriculture">Agriculture</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="https://github.com/tiwanaku-project" target="_blank" rel="noopener noreferrer">
              <Github className="icon" />
              <span>GitHub</span>
            </a>
            <a href="https://tiwanaku.org" target="_blank" rel="noopener noreferrer">
              <Globe className="icon" />
              <span>Official Site</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Tiwanaku Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
