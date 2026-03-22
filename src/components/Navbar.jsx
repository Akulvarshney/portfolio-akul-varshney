import React from 'react';

export default function Navbar() {
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
        <a className="nav-hire" href="mailto:akulv.work@gmail.com">hire_me();</a>
    </nav>
    </>
  );
}
