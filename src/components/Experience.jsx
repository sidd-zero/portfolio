import { useEffect, useRef } from 'react';

const EXPERIENCES = [
  {
    num: '01',
    role: 'Web Development Intern',
    company: 'GODAEON Studio',
    period: 'Dec 2025 — May 2026',
    type: 'Internship',
    bullets: [
      'Enhancing and maintaining the official GODAEON website as part of the studio\'s digital ecosystem.',
      'Improving UI/UX design to better represent game projects and elevate the user experience.',
      'Optimising site performance and SEO, while managing CMS updates and responsive design workflows.',
    ],
    tags: ['Web Dev', 'UI/UX', 'SEO', 'CMS'],
  },
  {
    num: '02',
    role: 'Web Development Intern',
    company: 'FinEd · RCOEM-TBI',
    period: 'Dec 2025 — Feb 2026',
    type: 'Internship',
    bullets: [
      'Contributing to new feature development for the FinEd platform, supporting the technical foundation of the MVP.',
      'Collaborating with product and content teams to improve user experience and overall journey for platform users.',
      'Handling technical maintenance to ensure stability and growth of the web presence at an incubated startup.',
    ],
    tags: ['Web Dev', 'Feature Dev', 'UX', 'MVP'],
  },
];

function Experience() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    itemRefs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="exp-section" id="experience">
      {/* Header */}
      <div className="exp-header">
        <h2 className="exp-title">Experience</h2>
        <span className="exp-count">{EXPERIENCES.length} Roles</span>
      </div>

      {/* Entries */}
      {EXPERIENCES.map((exp, i) => (
        <div
          key={exp.num}
          className="exp-item sr"
          ref={(el) => (itemRefs.current[i] = el)}
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          {/* Left: number */}
          <span className="exp-num">{exp.num}</span>

          {/* Middle: content */}
          <div className="exp-body">
            <div className="exp-top">
              <h3 className="exp-role">{exp.role}</h3>
              <span className="exp-company">{exp.company}</span>
            </div>
            <ul className="exp-bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div className="exp-tags">
              {exp.tags.map((t) => (
                <span key={t} className="exp-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: period + type */}
          <div className="exp-meta-col">
            <span className="exp-period">{exp.period}</span>
            <span className="exp-type">{exp.type}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
