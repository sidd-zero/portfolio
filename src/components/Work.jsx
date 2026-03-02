import { useEffect, useRef } from 'react';

const SOFTWARE = [
  {
    num: '01',
    title: 'Portfolio Website',
    desc: 'Personal portfolio built with React and Vite. Features cinematic scroll animations, editorial typography, and a pure black design system.',
    tags: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/sidd-zero',
    demo: '',
  },
  {
    num: '02',
    title: 'Swasthya AI',
    desc: 'AI-powered healthcare chatbot that lets users chat naturally about health concerns and receive instant, 24/7 responses. Built with a secure, privacy-first architecture backed by Supabase, with a clean conversational UI designed to feel accessible and reassuring.',
    tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS', 'shadcn-ui'],
    github: 'https://github.com/sidd-zero/mind-guardian-bot',
    demo: 'https://mind-guardian-bot.vercel.app',
  },
];

const HARDWARE = [
  {
    num: '01',
    title: 'Aura Guide',
    desc: 'AI-powered smart wearable concept designed to assist visually impaired users through real-time obstacle detection, audio-guided navigation, and voice-based hands-free interaction. Built on Arduino with ultrasonic/IR sensors and ML-assisted environment interpretation. Theoretical project — system design & architecture completed.',
    award: '1st Place — IDEATHON, RBU Nagpur',
    image: '/images/auraguide.png',
    tags: ['Arduino', 'Embedded C', 'AI/ML', 'Sensors', 'Audio Processing'],
    github: '',
    demo: '',
  },
  {
    num: '02',
    title: 'KAIROS — No-Touch Interaction Hub',
    desc: 'Standalone gesture-controlled IoT device built on MYOSA (ESP32) that lets users control smart devices through directional hand gestures and haptic taps — no physical contact required. Features real-time OLED feedback, MQTT/HTTP IoT connectivity, and a custom 3D-printed enclosure. Designed for healthcare, accessibility, and industrial use cases.',
    award: 'Top 15 in India — IEEE APSCON 2026, MYOSA Event 4.0',
    image: '/images/20251229_121355.jpg',
    tags: ['ESP32', 'C++', 'Arduino IDE', 'APDS9960', 'MPU6050', 'MQTT', 'I2C'],
    github: '',
    demo: '',
  },
  {
    num: '03',
    title: 'Water Quality Analyzer',
    desc: 'IoT-based device that measures pH, TDS, turbidity, and temperature in real time to support environmental and healthcare monitoring. Built on Arduino UNO with multi-sensor integration, calibrated readings for healthcare-grade reliability, and optional IoT data streaming.',
    award: 'Top Performer – Healthcare Track · ABV-IIITM Gwalior  |  Top 30 · Eu-Reka IEEE Pune',
    tags: ['Arduino UNO', 'C', 'IoT', 'Analog Sensors'],
    github: '',
    demo: '',
  },
];

function ProjItem({ proj, refCb, delay }) {
  return (
    <div
      className="proj-item sr"
      ref={refCb}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="proj-num">{proj.num}</span>
      <div className="proj-item-body">
        <div className="proj-item-text">
          <h3 className="proj-item-title">{proj.title}</h3>
          {proj.award && <span className="proj-award">{proj.award}</span>}
          <p className="proj-item-desc">{proj.desc}</p>
          <div className="proj-tags">
            {proj.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
          </div>
        </div>
        {proj.image && (
          <div className="proj-img-wrap">
            <img src={proj.image} alt={proj.title} className="proj-img" />
          </div>
        )}
      </div>
      <div className="proj-links-col">
        {proj.github && (
          <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-ext-link">
            GitHub 
          </a>
        )}
        {proj.demo && (
          <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="proj-ext-link">
            Live 
          </a>
        )}
      </div>
    </div>
  );
}

function Work() {
  const swRefs = useRef([]);
  const hwRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    [...swRefs.current, ...hwRefs.current].forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects">
      {/* Main header */}
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
        <span className="projects-count">{SOFTWARE.length + HARDWARE.length} Works</span>
        <a
          href="https://github.com/sidd-zero"
          target="_blank" rel="noopener noreferrer"
          className="proj-ext-link" style={{ marginLeft: '1.5rem' }}
        >
          All Repos 
        </a>
      </div>

      {/* Software sub-section */}
      <div className="proj-category-label">
        <span>Software</span>
        <div className="proj-category-rule" />
      </div>
      {SOFTWARE.map((proj, i) => (
        <ProjItem
          key={proj.num + '-sw'}
          proj={proj}
          refCb={(el) => (swRefs.current[i] = el)}
          delay={i * 0.08}
        />
      ))}

      {/* Hardware sub-section */}
      <div className="proj-category-label">
        <span>Hardware</span>
        <div className="proj-category-rule" />
      </div>
      {HARDWARE.map((proj, i) => (
        <ProjItem
          key={proj.num + '-hw'}
          proj={proj}
          refCb={(el) => (hwRefs.current[i] = el)}
          delay={i * 0.08}
        />
      ))}
    </section>
  );
}

export default Work;
