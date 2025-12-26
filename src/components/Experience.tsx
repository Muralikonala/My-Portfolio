import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, MapPin, Briefcase } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  type: string;
  details: string[];
  technologies: string[];
}

const experience: ExperienceItem[] = [
  {
    title: "Web Development Intern",
    company: "UptoSkills",
    date: "OCT 2025 — JAN 2026",
    location: "Remote",
    type: "Full-time",
    details: [
      "Developing responsive web pages and dynamic interfaces using React and Tailwind CSS.",
      "Collaborating with the design team to implement UI/UX enhancements.",
      "Participating in weekly reviews to improve performance and code quality."
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "Git"]
  },
  {
    title: "Python Developer Intern",
    company: "Codec Technologies",
    date: "SEP 15, 2025 — NOV 15, 2025",
    location: "Remote",
    type: "Full-time",
    details: [
      "Spearheaded backend logic development and modular code design using Python.",
      "Conducted performance optimization for data-driven modules and backend scripts."
    ],
    technologies: ["Python", "Backend Development", "Performance Optimization"]
  },
  {
    title: "Frontend Development Intern",
    company: "CodeAlpha",
    date: "SEP 2025 — OCT 2025",
    location: "Remote",
    type: "Full-time",
    details: [
      "Created modern, interactive frontends with optimized HTML, CSS, and JavaScript.",
      "Enhanced website speed and responsiveness, improving user experience.",
      "Refined code structure and UI consistency based on professional mentor feedback."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX"]
  },
  {
    title: "AI/ML Intern",
    company: "Robocoupler Pvt Ltd",
    date: "MAY 2025 — JULY 2025",
    location: "On-site",
    type: "Full-time",
    details: [
      "Developed and trained custom object detection models using Python and Roboflow.",
      "Implemented face recognition modules with Caffe deep learning frameworks.",
      "Collaborated on initial development phases for high-performance mobile applications."
    ],
    technologies: ["Python", "AI/ML", "Computer Vision", "Caffe", "Roboflow"]
  }
];

const Experience: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="experience" className="py-32 px-4 md:px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-10 right-4 md:right-20 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-4 md:left-20 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tl from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/50 dark:to-blue-950/50 border border-emerald-200/50 dark:border-emerald-800/50 mb-6"
          >
            <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Professional Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            Work{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building real-world solutions through hands-on internships and collaborative development
          </p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-blue-50/80 dark:from-gray-900/50 dark:to-gray-800/50 backdrop-blur-sm border border-emerald-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 grid md:grid-cols-3 gap-8">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full shadow-lg shadow-emerald-500/50" />
                    {i < experience.length - 1 && (
                      <div className="absolute top-4 w-px h-full bg-gradient-to-b from-emerald-500/50 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{exp.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <ul className="space-y-3">
                      {exp.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                          <ChevronRight className="text-emerald-500 shrink-0 mt-1" size={16} />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/50 dark:to-blue-950/50 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-200/50 dark:border-emerald-800/50"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;