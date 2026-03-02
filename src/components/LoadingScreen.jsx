import { useEffect, useState } from 'react';

function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;
    const duration = 1100;
    function step(ts) {
      if (!start) start = ts;
      const pct = Math.min(Math.floor(((ts - start) / duration) * 100), 100);
      setCount(pct);
      if (pct < 100) requestAnimationFrame(step);
      else setTimeout(() => setDone(true), 120);
    }
    requestAnimationFrame(step);
  }, []);

  return (
    <div className={`loading-screen${done ? ' done' : ''}`}>
      <div className="loading-content">
        <span className="loading-label">Portfolio</span>
        <div className="loading-name">
          <span>Siddharth.</span>
        </div>
        <div className="loading-bar-wrap">
          <div className="loading-bar-fill" />
        </div>
        <span className="loading-counter">{count}%</span>
      </div>
    </div>
  );
}

export default LoadingScreen;
