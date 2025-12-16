function Navbar() {
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">Siddharth</div>

      {/* Center */}
      <ul className="nav-center">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right (empty for balance) */}
      <div className="nav-right"></div>
    </nav>
  );
}

export default Navbar;
