import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShieldCheck, X, Eye, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: "Full Stack AI Internship",
    issuer: "Robocoupler Pvt Ltd",
    date: "July 2025",
    type: "Professional",
    file: "/Robocoupler certificate.jpg"
  },
  {
    title: "Frontend Development Internship",
    issuer: "CodeAlpha",
    date: "Oct 2025",
    type: "Professional",
    file: "/CodeAlpha  certificate.jpg"
  },
  {
    title: "Python Development Internship",
    issuer: "Codec Technologies",
    date: "Nov 2025",
    type: "Professional",
    file: "/Codec tech Internship Certificate.jpg"
  },
  {
    title: "Microsoft Security Foundations",
    issuer: "Microsoft",
    date: "2025",
    type: "Security",
    file: "/Microsoft Security Foundations Certificate.jpg"
  },
  {
    title: "SIH Hackathon Participation",
    issuer: "Smart India Hackathon",
    date: "2025",
    type: "Achievement",
    file: "/SIH Hackaton certificate.jpg"
  },
  {
    title: "Basics Of Artificial Intelligence",
    issuer: "Simplilearn",
    date: "2025",
    type: "Course",
    file: "/Simple learn -AI certificate.jpg"
  },
  {
    title: "Python Basics",
    issuer: "Skill India",
    date: "2025",
    type: "Certification",
    file: "/Skill india Python certificate.jpg"
  }
];

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-20 px-4 md:px-6 bg-slate-50/50 dark:bg-gray-900/50 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-blue-600">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              /* Updated className to match your gradient request */
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 dark:border-gray-600 group flex items-center gap-4 min-h-[90px]"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600/60 dark:text-blue-400/60 whitespace-nowrap bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded">
                    {cert.type}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium truncate">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 mt-1">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs md:text-sm font-semibold transition-all shadow-md shadow-blue-500/20"
                >
                  <Eye size={14} className="md:w-4 md:h-4" />
                  <span>View</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 w-full max-w-5xl h-[85vh] md:h-[90vh] rounded-xl md:rounded-2xl overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                <div className="min-w-0 pr-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-900 dark:text-white truncate">{selectedCert.title}</h3>
                  <p className="text-[10px] md:text-xs text-gray-500 truncate">{selectedCert.issuer}</p>
                </div>
                <div className="flex gap-1 md:gap-2 shrink-0">
                  <a
                    href={selectedCert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-600 dark:text-gray-300"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors rounded-full"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 bg-gray-100 dark:bg-gray-950 flex items-center justify-center overflow-hidden p-2">
                <img
                  src={selectedCert.file}
                  alt={selectedCert.title}
                  className="max-h-full max-w-full object-contain shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;