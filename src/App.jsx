import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Work from './components/Work';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

/* Cursor ball that follows the mouse */
function CursorBall() {
  const ballRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', move);

    const tick = () => {
      if (ballRef.current) {
        ballRef.current.style.left = pos.current.x + 'px';
        ballRef.current.style.top = pos.current.y + 'px';
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    const addHover = () => ballRef.current?.classList.add('hovered');
    const rmHover = () => ballRef.current?.classList.remove('hovered');
    const interactables = document.querySelectorAll('a, button, [role="button"]');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', rmHover);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div className="cursor-ball" ref={ballRef} />;
}

/* Generic scroll-reveal wiring for .sr elements */
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.sr').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function MainLayout() {
  useScrollReveal();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Resume />
      <Contact />
      <footer className="site-footer">
        <span className="footer-left">Designed &amp; built by Siddharth Dwivedi &mdash; 2026</span>
        <div className="footer-right">
          <a href="https://github.com/sidd-zero" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sidd-zero/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <LoadingScreen />
      <CursorBall />
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
