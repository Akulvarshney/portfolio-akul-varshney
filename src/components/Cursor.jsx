import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const onMouseMove = e => {
      mx = e.clientX; 
      my = e.clientY; 
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px'; 
        cursorRef.current.style.top = my + 'px';
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    
    let reqId;
    function animRing() { 
      rx += (mx - rx) * 0.12; 
      ry += (my - ry) * 0.12; 
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'; 
        ringRef.current.style.top = ry + 'px'; 
      }
      reqId = requestAnimationFrame(animRing); 
    }
    animRing();

    // Fallback for Safari without :has() support or bugs
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
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
