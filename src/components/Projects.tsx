import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Bot, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    { 
      icon: Cpu, 
      title: "Robocoupler AI/ML Projects", 
      description: "Full-stack AI/ML development from Robocoupler internship featuring computer vision solutions: object detection system trained on Roboflow datasets for high-accuracy classification, and face recognition security module built with Caffe deep learning framework.", 
      tags: ["Python", "Computer Vision", "Roboflow", "Caffe", "Deep Learning"]
    },
    { 
      icon: Globe, 
      title: "CodeAlpha Frontend Projects", 
      description: "Comprehensive frontend development portfolio including an interactive calculator with advanced functions, dynamic image gallery with filtering, and responsive portfolio website with modern animations.", 
      tags: ["JavaScript", "React", "HTML", "CSS", "Frontend"],
      github: "https://github.com/Muralikonala/Codec-technologies"
    },
    { 
      icon: Bot, 
      title: "Codec Technologies Python Projects", 
      description: "Diverse Python development projects including CLI calculator, real-time stock market web dashboard with data visualization, and AI-powered web assistant using Google's Gemini for natural language processing.", 
      tags: ["Python", "AI", "Web", "Finance", "Gemini"],
      github: "https://github.com/Muralikonala/CodeAlpha"
    },
    { 
      icon: Cpu, 
      title: "UptoSkills-HRMS Dashboard", 
      description: "Designed and developed a responsive HRMS dashboard using the MERN Stack and Tailwind CSS. Bridged the gap between design and engineering by translating complex Figma layouts into interactive React components while collaborating with a remote team to manage workflows and deliver milestones.", 
      tags: ["MERN", "AI", "Figma", "PostgreSQL", "React"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 relative perspective-1000">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-4 md:right-20 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-4 md:left-20 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tl from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Showcasing innovative projects from internships and personal development</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50, scale: 0.9 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              whileHover={{ translateY: -10, scale: 1.02 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }} 
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm group-hover:blur-md" />
              
              <div className="h-full bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl relative z-10 flex flex-col overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full" />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/20 rounded-xl flex items-center justify-center shadow-inner">
                    <p.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">{p.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg flex-grow relative z-10">{p.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8 relative z-10 mt-auto">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold shadow-sm hover:border-blue-400 transition-colors">{tag}</span>
                  ))}
                </div>
                
                {/* Conditional Rendering for GitHub Button */}
                {p.github && (
                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-xl text-base font-bold transition-all shadow-lg hover:shadow-xl group/btn"
                    >
                      <Github size={20} className="group-hover/btn:-translate-y-1 transition-transform" /> 
                      View Source Code
                    </a>
                  </div>
                )}
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;