function SplitWord({ word, className }) {
  return (
    <span className={className}>
      {word.split('').map((ch, i) => (
        <span className="hero-letter" key={i}>{ch}</span>
      ))}
    </span>
  );
}

function Hero({ scrollToSection }) {
  return (
    <section className="hero" id="home">
      {/* Left sidebar — rotated quote */}
      <div className="hero-sidebar">
        <span className="hero-sidebar-text">
          Full Stack Developer &nbsp;&mdash;&nbsp; Open to Opportunities
        </span>
      </div>

      {/* Right main */}
      <div className="hero-main">
        {/* Mobile-only portrait */}
        <div className="hero-mobile-photo">
          <img src="/images/sidd image 2.jpeg" alt="Siddharth Dwivedi" />
        </div>

        <div className="hero-line">
          <SplitWord word="SIDDHARTH" className="hero-line-inner" />
        </div>
        <div className="hero-line">
          <SplitWord word="DWIVEDI" className="hero-line-inner" />
        </div>
        <div className="hero-line">
          <SplitWord word="DEVELOPER." className="hero-line-inner hero-line-inner--dim" />
        </div>

        <div className="hero-meta">
          <span className="hero-role">Full Stack Developer</span>
          <span className="hero-dot" />
          <span className="hero-role">React &nbsp;/ &nbsp;Python</span>
          <div className="hero-scroll-hint">
            <span>scroll</span>
            <div className="hero-scroll-line" />
          </div>
        </div>

        <div className="hero-ctas">
          <button className="hero-link-btn primary" onClick={() => scrollToSection('projects')}>
            View Projects
          </button>
          <button className="hero-link-btn" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </button>
          <a
            href="https://github.com/sidd-zero"
            target="_blank" rel="noopener noreferrer"
            className="hero-link-btn"
          >
            GitHub 
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
