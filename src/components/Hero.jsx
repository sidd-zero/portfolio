function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-photo">
            <img 
              src="/images/siddharth-profile.jpg" 
              alt="Profile" 
              className="profile-img"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Siddharth Dwivedi</h1>
            <p className="profile-title">Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
