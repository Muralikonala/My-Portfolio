import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Bot, ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const { theme } = useTheme();

  const projects = [
    {
      icon: Cpu,
      title: "Robocoupler AI/ML Projects",
      description: "Full-stack AI/ML development from Robocoupler internship featuring computer vision solutions: object detection system trained on Roboflow datasets for high-accuracy classification, and face recognition security module built with Caffe deep learning framework.",
      tags: ["Python", "Computer Vision", "Roboflow", "Caffe", "Deep Learning"],
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Globe,
      title: "CodeAlpha Frontend Projects",
      description: "Comprehensive frontend development portfolio including an interactive calculator with advanced functions, dynamic image gallery with filtering, and responsive portfolio website with modern animations.",
      tags: ["JavaScript", "React", "HTML", "CSS", "Frontend"],
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: Bot,
      title: "Codec Technologies Python Projects",
      description: "Diverse Python development projects including CLI calculator, real-time stock market web dashboard with data visualization, and AI-powered web assistant using Google's Gemini for natural language processing.",
      tags: ["Python", "AI", "Web", "Finance", "Gemini"],
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative projects from internships and personal development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              /* Updated className below to match your requested style */
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 dark:border-gray-600"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <project.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors">
                  <Github size={16} />
                  Code
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                  <ExternalLink size={16} />
                  Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            <span>Let's Build Something Amazing</span>
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;