function Navbar() {
  const goHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={goHome} style={{ cursor: 'pointer' }}>
        Siddharth
      </div>
      <button className="nav-home-btn" onClick={goHome} aria-label="Go to home">
        Home
      </button>
    </nav>
  );
}

export default Navbar;
