import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function CircularMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const knobRef = useRef(null);

  const getCurrentSection = () => {
    const path = location.pathname;
    if (path === '/') return 'hero';
    return path.substring(1);
  };

  const currentSection = getCurrentSection();

  const navigateToPage = (path) => {
    setIsOpen(false);
    
    // Add page transition effect
    const pageTransition = document.createElement('div');
    pageTransition.className = 'page-transition';
    document.body.appendChild(pageTransition);
    
    setTimeout(() => {
      navigate(path);
      pageTransition.classList.add('fade-out');
      setTimeout(() => {
        document.body.removeChild(pageTransition);
      }, 600);
    }, 300);
  };

  const goHome = () => {
    navigateToPage('/');
  };

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle keyboard shortcut (X key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'x') {
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle knob mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isOpen || !knobRef.current) return;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const limit = 30;
      const moveX = Math.max(-limit, Math.min(limit, mouseX / 10));
      const moveY = Math.max(-limit, Math.min(limit, mouseY / 10));

      knobRef.current.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isOpen]);

  const menuItems = [
    { path: '/about', label: 'About', color: 'purple', shape: 'triangle' },
    { path: '/projects', label: 'Projects', color: 'blue', shape: 'square' },
    { path: '/contact', label: 'Contact', color: 'pink', shape: 'pentagon' },
    { path: '/resume', label: 'Resume', color: 'cyan', shape: 'hexagon' },
  ];

  const radius = 140;
  const startAngle = -90;

  return (
    <>
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Half Moon Button - Only show on home page */}
      {currentSection === 'hero' && (
        <button
          id="moon-trigger"
          className="half-moon-btn"
          onClick={toggleMenu}
          aria-label="Open circular menu"
        >
          <span className="btn-text">CLICK FOR MORE</span>
          <div className="hamburger">
            <span></span>
            <span></span>
          </div>
        </button>
      )}

      {/* Close Button */}
      <button
        id="close-menu"
        className="close-btn"
        onClick={toggleMenu}
        aria-label="Close menu"
      >
        ✕
      </button>

      {/* Menu Overlay */}
      <div
        id="overlay"
        className={`menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        <div className="menu-container">
          {/* Center Knob */}
          <div className="center-knob" ref={knobRef}>
            <div className="knob-core"></div>
          </div>

          {/* Menu Items */}
          {menuItems.map((item, index) => {
            const angle = startAngle + index * 90;
            const radian = angle * (Math.PI / 180);
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;

            return (
              <div
                key={item.path}
                className="menu-item"
                data-target={item.path}
                data-color={item.color}
                style={{
                  '--final-x': `${x}px`,
                  '--final-y': `${y}px`,
                }}
                onClick={() => navigateToPage(item.path)}
              >
                <div className={`menu-icon shape-${item.shape}`}></div>
                <span className="menu-label">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CircularMenu;
