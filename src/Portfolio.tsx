import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import ResumeModal from './components/ResumeModal'; // 1. Imported Modal
import { ThemeProvider } from './contexts/ThemeContext';

const Muralikonala: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false); // 2. Modal State

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      {/* FIXED DARK MODE: Changed dark:bg-gray-950 to dark:bg-slate-900 for a beautiful deep blue/gray */}
      <div className="relative min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300 text-slate-800 dark:text-gray-200">
        
        <div
          ref={spotlightRef}
          className="pointer-events-none fixed inset-0 z-50 hidden md:block mix-blend-color-dodge dark:mix-blend-color-dodge"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(59, 130, 246, 0.08), transparent 40%)'
          }}
        />

        <Header onOpenResume={() => setIsResumeOpen(true)} />
        <main className="relative z-10">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certificates />
          <Education />
          <Contact />
          
          <BackToTop />
        </main>

        {/* 3. The Modal Component */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </ThemeProvider>
  );
};

export default Muralikonala;