import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { ThemeContext } from './themeContext';

const MOBILE_LITE_MQ = '(max-width: 900px), (pointer: coarse)';

function subscribeMobileLite(onChange) {
  const mq = window.matchMedia(MOBILE_LITE_MQ);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

function getMobileLiteSnapshot() {
  return window.matchMedia(MOBILE_LITE_MQ).matches;
}

function getMobileLiteServerSnapshot() {
  return false;
}

export function ThemeProvider({ children }) {
  const mobileLite = useSyncExternalStore(
    subscribeMobileLite,
    getMobileLiteSnapshot,
    getMobileLiteServerSnapshot
  );

  const [dark, setDark] = useState(() => {
    if (typeof localStorage === 'undefined') return true;
    const saved = localStorage.getItem('theme');
    if (saved === 'light') return false;
    if (saved === 'dark') return true;
    return true;
  });

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggleTheme = () => setDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme, mobileLite }}>
      {children}
    </ThemeContext.Provider>
  );
}
