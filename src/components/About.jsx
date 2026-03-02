import { useEffect, useRef } from 'react';

function About() {
  const headRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    if (headRef.current) obs.observe(headRef.current);
    if (bodyRef.current) obs.observe(bodyRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-sidebar">
        <span className="about-sidebar-text">01 — About</span>
      </div>
      <div className="about-main">
        {/* Left: image + big heading */}
        <div className="about-left">
          <div className="about-img-wrap">
            <img src="/images/sidd image 2.jpeg" alt="Siddharth Dwivedi" className="about-img" />
          </div>
          <div className="about-heading-wrap" ref={headRef}>
            <span className="about-heading">Who<br />I Am.</span>
          </div>
        </div>

        {/* Right: bio + stats */}
        <div className="about-body sr" ref={bodyRef}>
          <p>
            I&apos;m <strong>Siddharth Dwivedi</strong>, a detail-oriented full-stack developer
            with a strong passion for technology and digital creation.
            I believe in writing <strong>clean, efficient code</strong> and
            crafting interfaces that feel natural to use.
          </p>
          <p>
            Always eager to learn new technologies and best practices, I focus on
            continuous improvement and staying adaptable in a fast-paced
            environment. When I&apos;m not coding, you&apos;ll find me exploring design trends
            or contributing to open-source.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-num">10+</span>
              <span className="about-stat-label">Projects Built</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-num">2+</span>
              <span className="about-stat-label">Years Learning</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-num"></span>
              <span className="about-stat-label">Curiosity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
