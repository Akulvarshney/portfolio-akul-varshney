import React, { useEffect } from 'react';
import { App as AntdApp, ConfigProvider } from 'antd';
import { useTheme } from './hooks/useTheme';
import { getAntdTheme } from './theme/antdConfig';

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

function Portfolio() {
  const { message } = AntdApp.useApp();

  useEffect(() => {
    const handleMailTo = (e) => {
      const target = e.target.closest('a[href^="mailto:"]');
      if (!target) return;
      e.preventDefault();
      const email = target.getAttribute('href').replace('mailto:', '');
      navigator.clipboard.writeText(email).catch(() => {});
      message.success(`Copied ${email}`);
      window.location.href = target.getAttribute('href');
    };

    document.addEventListener('click', handleMailTo);
    return () => document.removeEventListener('click', handleMailTo);
  }, [message]);

  return (
    <>
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
    </>
  );
}

export default function App() {
  const { dark } = useTheme();

  return (
    <ConfigProvider theme={getAntdTheme(dark)}>
      <AntdApp>
        <Portfolio />
      </AntdApp>
    </ConfigProvider>
  );
}
