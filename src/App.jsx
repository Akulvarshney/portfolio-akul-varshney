import React, { useEffect } from 'react';
import './index.css';

import Cursor from './components/Cursor';
import HeroCanvas from './components/HeroCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Reveal Observer
    const revealEls = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // For Impact counters
          if (e.target.classList.contains('impact-grid')) {
            const nums = e.target.querySelectorAll('.imp-n');
            const data = [['0', '↓', 1200], ['40', '%', 1400], ['500', '+', 1000], ['3', '×', 800]];
            nums.forEach((n, i) => {
              animateCount(n, parseInt(data[i][0]), data[i][1], data[i][2]);
            });
          }
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => obs.observe(el));

    // Experience Tab Setup logic moved to Experience.jsx natively
    // 3D Card tilt logic moved to Projects.jsx or kept here? We can keep it here, but it's cleaner in Projects.jsx.

    // Glitch Hero Name On Hover
    const heroName = document.querySelector('.hero-name');
    let glitching = false;
    let glitchInterval;
    const origTextShadow = heroName ? heroName.style.textShadow : '';
    const onEnterHero = () => {
      if (!heroName || glitching) return;
      glitching = true;
      let count = 0;
      glitchInterval = setInterval(() => {
        const x = (Math.random() - 0.5) * 6;
        const y = (Math.random() - 0.5) * 4;
        heroName.style.textShadow = `${x}px ${y}px 0 var(--c1),${-x}px ${-y}px 0 var(--c4)`;
        heroName.style.transform = `skew(${(Math.random() - 0.5) * 2}deg)`;
        count++;
        if (count > 10) {
          clearInterval(glitchInterval);
          heroName.style.textShadow = origTextShadow;
          heroName.style.transform = '';
          glitching = false;
        }
      }, 60);
    };
    if (heroName) {
      heroName.addEventListener('mouseenter', onEnterHero);
    }

    // Parallax
    const onScroll = () => {
      const sy = window.scrollY;
      const heroC = document.querySelector('.hero-content');
      const heroImg = document.querySelector('.hero-img-wrap');
      if (heroC) heroC.style.transform = `translateY(${sy * 0.3}px)`;
      if (heroImg) heroImg.style.transform = `translateY(calc(-50% + ${sy * 0.18}px))`;
    };
    window.addEventListener('scroll', onScroll);

    function animateCount(el, target, suffix, duration) {
      let start = null;
      const isFloat = target % 1 !== 0;
      function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = isFloat ? (target * ease).toFixed(1) : Math.floor(target * ease);
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    // Smart Mailto Interceptor
    const handleMailTo = (e) => {
      const target = e.target.closest('a[href^="mailto:"]');
      if (target) {
        e.preventDefault();
        const email = target.getAttribute('href').replace('mailto:', '');
        // Copy to clipboard
        navigator.clipboard.writeText(email).catch(err => console.error('Clipboard failed', err));

        // Create premium toast notification
        const toast = document.createElement('div');
        toast.textContent = `Copied ${email} to clipboard!`;
        Object.assign(toast.style, {
          position: 'fixed', bottom: '40px', left: '50%',
          transform: 'translateX(-50%) translateY(20px)',
          background: 'var(--c1)', color: 'var(--white)',
          padding: '12px 24px', borderRadius: '50px',
          fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 'bold',
          zIndex: '10000', opacity: '0', pointerEvents: 'none',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        });
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
          toast.style.opacity = '1';
          toast.style.transform = 'translateX(-50%) translateY(0)';
        });

        setTimeout(() => {
          toast.style.opacity = '0';
          toast.style.transform = 'translateX(-50%) translateY(20px)';
          setTimeout(() => toast.remove(), 300);
        }, 3000);

        // Fallback attempt to open default mail client
        window.location.href = target.getAttribute('href');
      }
    };
    document.addEventListener('click', handleMailTo);

    return () => {
      obs.disconnect();
      if (heroName) heroName.removeEventListener('mouseenter', onEnterHero);
      clearInterval(glitchInterval);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', handleMailTo);
    };
  }, []);

  return (
    <div>
      <Cursor />
      <HeroCanvas />
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
