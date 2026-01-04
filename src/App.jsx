import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Work from './components/Work';
import Resume from './components/Resume';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import Snowfall from 'react-snowfall';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for loading screen to finish
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app-container ${isLoaded ? 'loaded' : ''}`}>
      <LoadingScreen />
      <Snowfall
        color="#d9c2a6"
        snowflakeCount={50}
        speed={[0.5, 1.5]}
        wind={[-0.5, 0.5]}
        radius={[0.5, 2]}
        opacity={[0.3, 0.6]}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <Navbar />
      <main className="main-content">
        <About />
        <Hero />
        <Skills />
        <Work />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;