import React, { useState, useEffect, useRef } from 'react';
import './Achievements.css';

const achievements = [
  {
    id: 0,
    title: "Certificate of Excellence & Merit Scholarship",
    organization: "Academic Performance Award",
    date: "February 2025",
    image: "/images/Screenshot 2026-05-10 223926.png",
    description: "Awarded for outstanding academic performance during the 2024-25 session, including a ₹10,000 scholarship. Recognized for dedication, consistency, and exceptional academic record."
  },
  {
    id: 1,
    title: "Ideathon '25 - Merit (Technology Startup)",
    organization: "RCOEM TBI Foundation & RBU E-Cell",
    date: "March 2025",
    image: "/images/tbi merit technology startup.png",
    description: "Received for participating in Ideathon '25 - Idea Pitching Competition. Recognized for innovation, entrepreneurial thinking, and problem-solving skills in the Technology Startup category."
  },
  {
    id: 2,
    title: "Project Demonstration Competition - 2nd Place",
    organization: "IBM Nagpur",
    date: "March 2026",
    image: "/images/ibm.jpeg",
    description: "Secured 2nd position in a Project Demonstration Competition organized by IBM Nagpur for presenting the project 'Kairos – No Interaction Hub.' Recognized for innovation, presentation skills, teamwork alongside Swaraj Lakhe, Pushkar Wankhede and Yash Daryani, and effective problem-solving through the project demonstration."
  },
  {
    id: 3,
    title: "Best Innovation — TECH-CARVAAN 2026",
    organization: "Government College of Engineering, Jalgaon (Jain Hills)",
    date: "April 2026",
    image: "/images/jalgaon certificate.jpeg",
    description: "Recognized for the \"Best Innovation\" award at TECH-CARVAAN 2026, a National Level Technical Fest hosted by the Government College of Engineering, Jalgaon at Jain Hills. For the project \"Kairos – No Interaction Hub,\" our team emerged as a Top 8 Finalist from an initial pool of over 40 national teams after two rigorous selection rounds, eventually securing a cash prize of ₹7,500 for excellence in technical execution and creative problem-solving."
  },
  {
    id: 4,
    title: "ENNOVATE' 26 — 3rd Place",
    organization: "Ramdeobaba University, Nagpur",
    date: "2026",
    image: "/images/ennovate 26.jpeg",
    description: "Secured 3rd position in ENNOVATE’ 26, a National Level Project Competition organized by the Department of Electronics Engineering and Eletrolitz Students’ Society at Ramdeobaba University, Nagpur. Presented the project \"Kairos – No Interaction Hub\" and was awarded a cash prize of ₹3,000 for the hardware implementation and design."
  },
  {
    id: 5,
    title: "IDEATHON’26 — 1st Place",
    organization: "RCOEM-TBI & E-Cell RBU",
    date: "April 2026",
    image: "/images/ideathon 26.jpeg",
    description: "Secured 1st place at IDEATHON’26, a national-level innovation platform hosted by RCOEM-TBI and E-Cell RBU. Competing as team \"Gesture Squad,\" we were awarded a ₹10,000 cash prize and selected for incubation support and future funding opportunities.\n\nAchievement: Won the top position for presenting an impactful startup idea, gaining access to the RCOEM TBI startup ecosystem and expert mentorship.\n\nTeam Collaboration: Achieved this milestone through the combined efforts of Swaraj Lakhe, Yash Daryani, and Pushkar Wankhede."
  }
];

const Achievements = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pinMode, setPinMode] = useState('before'); // before | pinned | after
  const [cardStates, setCardStates] = useState(
    achievements.map(() => ({
      translateY: 0,
      scale: 0.9,
      brightness: 0.55,
      zIndex: 0,
      opacity: 1
    }))
  );

  const numCards = achievements.length;
  const transitions = Math.max(1, numCards - 1);

  // Dynamic scroll height based on number of transitions.
  // Keeping this too large makes the section end with empty black space.
  const scrollHeight = Math.max(220, 110 + transitions * 55);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const navbarHeight = document.querySelector('.navbar')?.offsetHeight ?? 70;

      const sectionRect = containerRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + sectionRect.top;
      const sectionHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Pin the viewport while scrolling inside the section.
      // This prevents a "black dead zone" if CSS `position: sticky` is unreliable.
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const stickyHeight = sectionRef.current?.getBoundingClientRect().height
        ?? (windowHeight - navbarHeight);
      const pinStartY = sectionTop + headerHeight - navbarHeight;
      // End pinning when the sticky viewport would naturally reach the bottom
      // of the section. This prevents the next section from scrolling under it.
      const pinEndY = sectionTop + sectionHeight - stickyHeight - navbarHeight - 1;

      if (window.scrollY < pinStartY) {
        setPinMode('before');
      } else if (window.scrollY > pinEndY) {
        setPinMode('after');
      } else {
        setPinMode('pinned');
      }

      // Calculate scroll progress: 0 to 1 across the entire section
      let scrollProgress = (window.scrollY - sectionTop) / Math.max(1, (sectionHeight - windowHeight));
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));

      // We only "peel" through the first (numCards - 1) cards.
      // The last card should remain visible at the end (no empty viewport).
      const segmentSize = 1 / transitions;
      const canPeel = numCards > 1;
      const peelIdx = canPeel
        ? Math.min(Math.floor(scrollProgress / segmentSize), numCards - 2)
        : 0;

      const peelProgressRaw = (scrollProgress - peelIdx * segmentSize) / segmentSize;
      const peelProgress = canPeel ? Math.max(0, Math.min(1, peelProgressRaw)) : 0;

      const visibleIdx = canPeel
        ? Math.min(peelIdx + (peelProgress >= 0.5 ? 1 : 0), numCards - 1)
        : 0;
      setActiveIndex(visibleIdx);

      // Calculate new card states
      const newCardStates = achievements.map((_, i) => {
        let translateY = 0;
        let scale = 0.92;
        let brightness = 0.8;
        let zIndex = numCards - i;
        let opacity = 1;

        if (i < peelIdx) {
          // Card has already been peeled off - send it up and hide it
          translateY = -130;
          scale = 0.9;
          brightness = 0.6;
          zIndex = 0;
          opacity = 0;
        } else if (i === peelIdx) {
          // THIS IS THE CARD CURRENTLY PEELING
          translateY = peelProgress * -105;
          scale = 1;
          brightness = 1;
          zIndex = 100 + (numCards - i);
          // Fade out earlier so the peeling card doesn't overlap the next card's text
          opacity = peelProgress < 0.5 ? 1 : Math.max(0, 1 - ((peelProgress - 0.5) / 0.35));
        } else if (i === peelIdx + 1) {
          // NEXT CARD - rises into place as the active card peels
          scale = 0.94 + (peelProgress * 0.06);
          brightness = 0.88 + (peelProgress * 0.12);
          zIndex = 50;
          opacity = 1;
        } else {
          // Cards further below - stacked and ready
          const depth = i - (peelIdx + 1);
          scale = Math.max(0.86, 0.94 - (depth * 0.02));
          brightness = Math.max(0.72, 0.88 - (depth * 0.05));
          zIndex = Math.max(1, numCards - i - depth);
          opacity = 1;
        }

        return { translateY, scale, brightness, zIndex, opacity };
      });

      setCardStates(newCardStates);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarHeight = typeof window !== 'undefined'
    ? (document.querySelector('.navbar')?.offsetHeight ?? 70)
    : 70;

  const stickyStyle = (() => {
    if (pinMode === 'pinned') {
      return {
        position: 'fixed',
        top: `${navbarHeight}px`,
        left: 0,
        right: 0,
        height: `calc(100vh - ${navbarHeight}px)`,
      };
    }

    if (pinMode === 'after') {
      return {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 'auto',
        height: `calc(100vh - ${navbarHeight}px)`,
      };
    }

    return {
      position: 'relative',
      top: 'auto',
      height: `calc(100vh - ${navbarHeight}px)`,
    };
  })();

  return (
    <section 
      className="achievements-scroller" 
      ref={containerRef} 
      id="achievements"
      style={{ height: `${scrollHeight}vh` }}
    >
      {/* Header */}
      <div className="achievements-header" ref={headerRef}>
        <h2 className="achievements-title">Achievements</h2>
        <span className="achievements-count">{achievements.length} Certificates</span>
      </div>

      {/* Sticky Container */}
      <div className={`sticky-container ${pinMode}`} ref={sectionRef} style={stickyStyle}>
        {/* Side Pagination */}
        <div className="side-pagination">
          {achievements.map((_, i) => (
            <div key={i} className={`page-num ${i === activeIndex ? 'active' : ''}`}>
              0{i + 1}
            </div>
          ))}
        </div>

        {/* Cards Viewport */}
        <div className="cards-viewport">
          {achievements.map((card, i) => {
            const state = cardStates[i];

            return (
              <div
                key={card.id}
                className="peel-card"
                style={{
                  transform: `translateY(${state.translateY}vh) scale(${state.scale})`,
                  filter: `brightness(${state.brightness})`,
                  zIndex: state.zIndex,
                  opacity: state.opacity,
                }}
              >
                <div className="card-content-wrapper">
                  {/* Certificate Image */}
                  <div className="card-image-area">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="cert-img-hero"
                      onError={(e) => {
                        e.target.src = '/images/certificate-placeholder.svg';
                      }}
                    />
                  </div>

                  {/* Content Area */}
                  <div className="card-info-area">
                    <div className="info-header">
                      <div className="title-group">
                        <h3 className="cert-title">{card.title}</h3>
                        <p className="cert-org">{card.organization}</p>
                      </div>
                      <span className="cert-date">{card.date}</span>
                    </div>

                    <p className="cert-description">"{card.description}"</p>

                    <div className="info-footer">
                      <a
                        href={card.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-cert-link"
                      >
                        VIEW CERTIFICATE →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
