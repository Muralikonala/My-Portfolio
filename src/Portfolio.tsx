import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

const Muralikonala: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Highly optimized mouse tracking using CSS variables to prevent re-rendering the whole page
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        // Set CSS variables for the exact mouse coordinates on the screen
        spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        
        {/* THE GLOBAL SPOTLIGHT */}
        {/* pointer-events-none ensures it doesn't block you from clicking buttons */}
        {/* hidden md:block ensures it doesn't run on mobile phones where there is no mouse */}
        <div
          ref={spotlightRef}
          className="pointer-events-none fixed inset-0 z-50 hidden md:block mix-blend-color-dodge dark:mix-blend-color-dodge"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(59, 130, 246, 0.08), transparent 40%)'
          }}
        />

        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certificates />
          <Education />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Muralikonala;