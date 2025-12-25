import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  const highlights = [
    {
      icon: Target,
      title: "AI/ML Specialist",
      description: "Expert in machine learning algorithms, computer vision, and deep learning frameworks like TensorFlow and Caffe."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Passionate about transforming complex technical challenges into elegant, scalable solutions."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative developer with experience in cross-functional teams and agile development practices."
    },
    {
      icon: Award,
      title: "Continuous Learner",
      description: "Always staying updated with the latest technologies and industry best practices."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A dedicated Computer Science Engineer with a passion for AI/ML and innovative technology solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Passionate Developer & AI Enthusiast
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm Konala S V Murali Ramakrishna Reddy, a Computer Science Engineer currently pursuing my B.Tech at Andhra University.
                  My journey in technology has been driven by a deep fascination with artificial intelligence and machine learning.
                </p>
                <p>
                  Through various internships and projects, I've gained hands-on experience in developing AI-powered solutions,
                  from computer vision applications to backend systems. I'm particularly passionate about using technology
                  to solve real-world problems and create meaningful impact.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or participating in tech communities. I believe in continuous learning and staying updated with
                  the rapidly evolving field of AI and software development.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 dark:border-gray-600"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;