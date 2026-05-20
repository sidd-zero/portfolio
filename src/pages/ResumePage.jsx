import Navbar from "../components/Navbar";
import CircularMenu from "../components/CircularMenu";
import '../index.css';

function ResumePage() {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'GODAEON Studio',
      period: 'Dec 2025 — Present',
      bullets: [
        'Enhancing and maintaining official digital ecosystems.',
        'Improving UI/UX design for gaming projects.',
        'Optimising site performance and SEO.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'FinEd · RCOEM-TBI',
      period: 'Dec 2025 — Feb 2026',
      bullets: [
        'Developing MVP features for startup incubation.',
        'Collaborating on user journey improvements.',
        'Handling technical maintenance and stability.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Swasthya AI',
      desc: 'AI-powered healthcare chatbot with Supabase backend.'
    },
    {
      title: 'KAIROS',
      desc: 'No-touch gesture interaction hub (Award Winner).'
    }
  ];

  return (
    <>
      <Navbar />
      <CircularMenu />
      <main className="resume-page-main">
        <section className="resume-content-wrap">
          <header className="resume-page-header">
            <h1 className="resume-page-title">Resume</h1>
            <p className="resume-page-subtitle">Siddharth Dwivedi — Software Developer</p>
          </header>

          <div className="resume-grid">
            <div className="resume-column">
              <h3 className="resume-cat-title">Experience</h3>
              {experiences.map((exp, i) => (
                <div key={i} className="resume-item">
                  <div className="resume-item-header">
                    <h4>{exp.role}</h4>
                    <span>{exp.period}</span>
                  </div>
                  <p className="resume-company">{exp.company}</p>
                  <ul className="resume-bullets">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div className="resume-column">
              <h3 className="resume-cat-title">Skills</h3>
              <div className="resume-skills-grid">
                <span>React</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Python</span>
                <span>IoT</span>
                <span>C++</span>
                <span>Node.js</span>
                <span>SEO</span>
              </div>

              <h3 className="resume-cat-title" style={{ marginTop: '3rem' }}>Key Projects</h3>
              {projects.map((p, i) => (
                <div key={i} className="resume-item">
                  <h4>{p.title}</h4>
                  <p className="resume-item-desc-small">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-download-footer">
            <a href="/Siddharth_Resume.pdf" download="Siddharth_Resume.pdf" className="hero-link-btn primary">
              Download PDF Version
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default ResumePage;
