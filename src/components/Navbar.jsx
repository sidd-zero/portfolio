import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Stack', id: 'stack' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  const go = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div
        className="nav-logo"
        onClick={goHome}
        role="button" tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && goHome()}
      >
        SD
      </div>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <li key={l.id}>
            <button onClick={() => go(l.id)}>{l.label}</button>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{ cursor: 'pointer' }}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}

export default Navbar;
