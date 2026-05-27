import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShieldCheck, X, Eye, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  const certificates = [
    { title: "Full Stack AI Internship", issuer: "Robocoupler Pvt Ltd", date: "July 2025", type: "Professional", file: "/Robocoupler certificate.jpg" },
    { title: "Frontend Development Internship", issuer: "CodeAlpha", date: "Oct 2025", type: "Professional", file: "/CodeAlpha  certificate.jpg" },
    { title: "Python Development Internship", issuer: "Codec Technologies", date: "Nov 2025", type: "Professional", file: "/Codec tech Internship Certificate.jpg" },
    { title: "MERN Full Stack Development Internship", issuer: "Uptoskills", date: "Jan 2026", type: "Professional", file: "/Uptoskills Certificate.jpg" },
    { title: "Microsoft Security Foundations", issuer: "Microsoft", date: "2025", type: "Security", file: "/Microsoft Security Foundations Certificate.jpg" },
    { title: "SIH Hackathon Participation", issuer: "Smart India Hackathon", date: "2025", type: "Achievement", file: "/SIH Hackaton certificate.jpg" },
    { title: "Basics Of Artificial Intelligence", issuer: "Simplilearn", date: "2025", type: "Course", file: "/Simple learn -AI certificate.jpg" },
    { title: "Python Basics", issuer: "Skill India", date: "2025", type: "Certification", file: "/Skill india Python certificate.jpg" },
    { title: "Quantum Fundamentals", issuer: "Qubitech,wiser", date: "2026", type: "Certification", file: "/Quantum govt.jpg" }
  ];

  return (
    <section id="certificates" className="py-20 relative">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-4 md:right-20 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-4 md:left-20 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tl from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      </div>

      {/* TEXT CONTENT: Kept centered with max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Slide to view all certificates</p>
        </motion.div>
      </div>

      {/* HORIZONTAL SLIDER: Pulled outside of max-w-7xl so it spans edge-to-edge */}
      <div className="w-full relative z-10">
        {/* We add px-4 md:px-[calc((100vw-80rem)/2)] to align the first card with the title, but let it scroll to the edges */}
        <div className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 md:px-[max(1.5rem,calc((100vw-80rem)/2))] snap-x snap-mandatory 
                        [&::-webkit-scrollbar]:h-2.5 
                        [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-track]:dark:bg-gray-800 
                        [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-500 hover:[&::-webkit-scrollbar-thumb]:bg-blue-600">
          
          {certificates.map((cert, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              
              // REFINED HOVER EFFECT
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                rotateZ: index % 2 === 0 ? 1 : -1 
              }}
              whileTap={{ scale: 0.98 }} 
              
              // PREMIUM SPRING PHYSICS
              transition={{ 
                type: "spring", 
                stiffness: 350, 
                damping: 15, 
                mass: 0.8
              }} 
              
              className="group relative cursor-pointer min-w-[280px] md:min-w-[340px] shrink-0 snap-center"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="h-full bg-white dark:bg-gray-800/80 p-1.5 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-shadow duration-300 border border-gray-100 dark:border-gray-700/50 flex flex-col">
                <div className="h-48 overflow-hidden rounded-xl relative bg-gray-100 dark:bg-gray-900">
                   <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                   
                   {/* FLYING IMAGE - SLIDER SIDE */}
                   <motion.img 
                     layoutId={`cert-img-${cert.title}`} 
                     src={cert.file} 
                     alt={cert.title} 
                     className="w-full h-full object-cover origin-center" 
                   />
                </div>
                
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 transition-colors">{cert.title}</h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">{cert.issuer}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4 border-t border-gray-100 dark:border-gray-700 pt-3">
                    <div className="flex items-center gap-2 text-xs text-gray-500"><Calendar size={12} /><span>{cert.date}</span></div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400"><Eye size={14} /> View</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Add a spacer at the end so the last card doesn't get stuck to the edge */}
          <div className="min-w-[1rem] shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* FULL SCREEN MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 } }} 
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md" 
            onClick={() => setSelectedCert(null)}
          >
            {/* Header Text & Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="w-full max-w-5xl flex justify-between items-center mb-6 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                  <h3 className="font-bold text-white text-xl md:text-2xl drop-shadow-lg">{selectedCert.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 drop-shadow-md">{selectedCert.issuer}</p>
              </div>
              <div className="flex gap-3">
                  <a href={selectedCert.file} target="_blank" rel="noreferrer" className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white transition-colors border border-white/10">
                    <ExternalLink size={20} />
                  </a>
                  <button onClick={() => setSelectedCert(null)} className="p-3 bg-red-500/80 hover:bg-red-500 backdrop-blur-xl text-white rounded-full transition-colors border border-red-400/20">
                    <X size={20} />
                  </button>
              </div>
            </motion.div>

            {/* FLYING IMAGE - MODAL SIDE */}
            <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center pointer-events-none">
              <motion.img 
                layoutId={`cert-img-${selectedCert.title}`} 
                src={selectedCert.file} 
                alt={selectedCert.title} 
                className="max-h-full max-w-full object-contain rounded-xl shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;