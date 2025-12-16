function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">Siddharth</div>

      <ul className="nav-center">
        <li><a onClick={() => scrollToSection('about')}>About</a></li>
        <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
        <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>

      <div className="nav-right"></div>
    </nav>
  );
}

export default Navbar;
