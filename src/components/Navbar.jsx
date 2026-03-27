import React, { useState, useEffect } from 'react';
import resume from '../assets/resume.pdf';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.body.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="nav-logo">akul<span>.</span>dev</div>
        
        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Stack</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            title="Toggle Theme"
          >
            {isDark ? '☾' : '☀'}
          </button>
          <a className="nav-hire resume-btn" href={resume} download="Akul_Varshney_Resume.pdf">resume.pdf</a>
          <a className="nav-hire hire-btn" href="mailto:akulv.work@gmail.com">contact</a>

          {/* Hamburger Menu Icon */}
          <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-links">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Work</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Stack</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li className="mobile-cta">
            <a className="nav-hire" href={resume} download="Akul_Varshney_Resume.pdf">resume.pdf</a>
          </li>
          <li className="mobile-cta">
            <a className="nav-hire" href="mailto:akulv.work@gmail.com">contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
