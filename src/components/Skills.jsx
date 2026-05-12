import { useEffect, useRef } from 'react';

const STACK = [
  { word: 'HTML5',       badge: 'Markup'          },
  { word: 'CSS3',        badge: 'Styling'          },
  { word: 'JAVASCRIPT',  badge: 'Language'         },
  { word: 'ES6+',        badge: 'Language'         },
  { word: 'PYTHON',      badge: 'Language'         },
  { word: 'JAVA',        badge: 'Language'         },
  { word: 'C',           badge: 'Language'         },
  { word: 'REACT',       badge: 'Framework'        },
  { word: 'NODE.JS',     badge: 'Runtime'          },
  { word: 'MONGO DB',    badge: 'Database'         },
  { word: 'BOOTSTRAP',   badge: 'UI Framework'     },
  { word: 'GIT',         badge: 'Version Control'  },
  { word: 'NETLIFY',     badge: 'Deployment'       },
  { word: 'VERCEL',      badge: 'Deployment'       },
];

function Skills() {
  const rowRefs   = useRef([]);
  const divRefs   = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.15 }
    );
    rowRefs.current.forEach((r) => r && obs.observe(r));
    divRefs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stack-section" id="stack">
      <div className="stack-section-label">
        <span>02 — Tech Stack</span>
        <div className="stack-rule" />
        <span>{STACK.length} Technologies</span>
      </div>

      <div className="stack-words">
        {STACK.map((item, i) => (
          <div key={item.word}>
            <div
              className="stack-word-row"
              ref={(el) => (rowRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <span className="stack-word">{item.word}</span>
              <span className="stack-badge">{item.badge}</span>
            </div>
            <div
              className="stack-divider"
              ref={(el) => (divRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.04 + 0.1}s` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
