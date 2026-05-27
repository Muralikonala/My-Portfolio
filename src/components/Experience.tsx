import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      company: "UptoSkills",
      role: "MERN Stack Developer Intern",
      date: "Oct 2025 - Jan 2026",
      location: "Remote",
      description: "Translated complex Figma UI/UX designs into fully functional, responsive React components for an enterprise HRMS Dashboard. Collaborated with remote engineering teams to manage workflows and deliver full-stack milestones.",
      tech: ["MERN Stack", "React.js", "Tailwind CSS", "Figma", "Node.js"]
    },
    {
      company: "Codec Technologies",
      role: "Python Developer Intern",
      date: "Sept 2025 - Nov 2025",
      location: "Remote",
      description: "Built scalable backend services and dynamic Python applications. Developed a real-time stock market dashboard with data visualization and integrated Google's Gemini LLM to create an intelligent natural language web assistant.",
      tech: ["Python", "API Integration", "Data Visualization", "Gemini AI"]
    },
    {
      company: "CodeAlpha",
      role: "Frontend Development Intern",
      date: "Sept 2025 - Oct 2025",
      location: "Remote",
      description: "Designed and deployed comprehensive frontend interfaces. Created an interactive financial calculator, a dynamic image filtering gallery, and responsive web components focusing on optimal user experience.",
      tech: ["JavaScript", "React", "HTML5", "CSS3"]
    },
    {
      company: "Robocoupler Private Limited",
      role: "Full Stack AI Developer Intern",
      date: "May 2025 - July 2025",
      location: "Visakhapatnam",
      description: "Engineered full-stack applications integrated with artificial intelligence. Developed and trained advanced object detection models using YOLOv8 on custom Roboflow datasets, and built a Face Recognition security module utilizing the Caffe deep learning framework.",
      tech: ["Full Stack", "Python", "YOLOv8", "OpenCV", "AI/ML"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10" ref={containerRef}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Experience</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">My journey in software engineering and AI development.</p>
        </motion.div>

        <div className="relative">
          {/* THE BACKGROUND LINE */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2" />
          
          {/* THE GLOWING ANIMATED LINE */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-400 to-purple-500 transform md:-translate-x-1/2 z-0 origin-top" 
          />

          <div className="flex flex-col gap-12 relative z-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} group relative`}>
                  
                  <div className="hidden md:block md:w-1/2" />
                  
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 mt-7 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-900 bg-gray-300 dark:bg-gray-700 transition-all duration-500 group-hover:bg-blue-500 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] z-20" />

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-full pl-16 md:w-1/2 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}
                  >
                    <div className="p-6 md:p-8 bg-white/60 dark:bg-gray-800/40 backdrop-blur-md border border-gray-100 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all duration-300 group-hover:-translate-y-1">
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className={`flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <Briefcase size={16} className="text-blue-500" />
                        <span>{exp.company}</span>
                      </div>

                      <div className={`flex flex-wrap items-center gap-2 mb-5 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100/80 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-md border border-gray-200/50 dark:border-gray-700/50">
                          <Calendar size={12} className="text-gray-500" /> {exp.date}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100/80 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-md border border-gray-200/50 dark:border-gray-700/50">
                          <MapPin size={12} className="text-gray-500" /> {exp.location}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        {exp.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;