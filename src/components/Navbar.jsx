import { useState, useEffect } from 'react';

function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'About',      id: 'about'      },
    { label: 'Stack',      id: 'stack'      },
    { label: 'Projects',   id: 'projects'   },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact',    id: 'contact'    },
  ];

  const go = (id) => { scrollToSection(id); setMenuOpen(false); };

  return (
    <nav className="navbar">
      <div
        className="nav-logo"
        onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
        role="button" tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top:0, behavior:'smooth' })}
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
        style={{cursor:'pointer'}}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}

export default Navbar;
