import Navbar from "../components/Navbar";
import CircularMenu from "../components/CircularMenu";

function AboutPage() {
  return (
    <>
      <Navbar />
      <CircularMenu />
      <main>
        <section id="about" className="about">
          <div className="about-container">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I am a motivated and detail-oriented individual with a strong interest in technology, design, and building meaningful digital experiences. I enjoy working at the intersection of logic and creativity, where problem-solving meets clean and thoughtful design. My approach to learning is hands-on and curiosity-driven—I like understanding how things work behind the scenes and improving them step by step.
                </p>
                <p>
                  I believe consistency, adaptability, and continuous learning are essential in today's fast-evolving tech landscape, and I actively work on strengthening these qualities. Whether it's refining a user interface, structuring code for clarity, or exploring new tools, I focus on growth and long-term skill development while maintaining a strong foundation in fundamentals.
                </p>
              </div>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">◆</div>
                  <h3>Problem Solver</h3>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">✦</div>
                  <h3>Creative Thinker</h3>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">◈</div>
                  <h3>Continuous Learner</h3>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">⬥</div>
                  <h3>Detail-Oriented</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
