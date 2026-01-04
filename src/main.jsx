import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add smooth scroll with inertia effect
document.addEventListener('DOMContentLoaded', () => {
  let isScrolling = false;
  let scrollVelocity = 0;
  let lastScrollTop = 0;
  let scrollMomentum = null;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    scrollVelocity = scrollTop - lastScrollTop;
    lastScrollTop = scrollTop;
    isScrolling = true;

    if (scrollMomentum) clearTimeout(scrollMomentum);
    scrollMomentum = setTimeout(() => {
      isScrolling = false;
    }, 150);
  }, false);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
