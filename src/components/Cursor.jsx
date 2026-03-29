import React, { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const { mobileLite } = useTheme();

  useEffect(() => {
    if (mobileLite) return undefined;

    const onMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top = `${y}px`;
      }
    };
    document.addEventListener('mousemove', onMouseMove);

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        if (cursorRef.current) cursorRef.current.classList.add('hovering');
        if (ringRef.current) ringRef.current.classList.add('hovering');
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        if (cursorRef.current) cursorRef.current.classList.remove('hovering');
        if (ringRef.current) ringRef.current.classList.remove('hovering');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mobileLite]);

  if (mobileLite) return null;

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
