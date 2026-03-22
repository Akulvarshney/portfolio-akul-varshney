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

  return (
    <>
      <nav>
        <div className="nav-logo">akul<span>.</span>dev</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Stack</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: '1px solid var(--line2)',
              color: 'var(--c1)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'none',
              fontSize: '18px',
              transition: 'all 0.2s ease',
              outline: 'none'
            }}
            title="Toggle Theme"
          >
            {isDark ? '☾' : '☀'}
          </button>
          <a className="nav-hire" href={resume} download="Akul_Varshney_Resume.pdf" style={{ borderColor: 'var(--c2)', color: 'var(--c2)' }}>resume.pdf</a>
          <a className="nav-hire" href="mailto:akulv.work@gmail.com">hire_me();</a>
        </div>
      </nav>
    </>
  );
}
