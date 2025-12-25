import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-slate-400 selection:bg-blue-500/30 overflow-x-hidden font-sans">
      {/* Aurora Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] max-w-[400px] max-h-[400px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] max-w-[350px] max-h-[350px] rounded-full bg-indigo-600/5 blur-[120px]" />
      </div>

      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;