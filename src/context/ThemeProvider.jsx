import React, { useEffect, useState } from 'react';
import { ThemeContext } from './themeContext';

export function ThemeProvider({ children }) {
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
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
