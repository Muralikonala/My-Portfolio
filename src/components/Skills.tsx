import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Brain, Cpu, Cloud } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-blue-600 dark:text-blue-400",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 }
      ]
    },
    {
      icon: Brain,
      title: "AI/ML Technologies",
      color: "text-purple-600 dark:text-purple-400",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "TensorFlow", level: 65 },
        { name: "Caffe", level: 70 },
        { name: "Roboflow", level: 75 },
        { name: "Deep Learning", level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: "Development Tools",
      color: "text-emerald-600 dark:text-emerald-400",
      skills: [
        { name: "Git", level: 85 },
        { name: "Linux", level: 80 },
        { name: "Docker", level: 70 },
        { name: "VS Code", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "AWS", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-sm border border-emerald-100 dark:border-gray-600"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className={`text-xs font-bold ${category.color}`}>
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                        className={`h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;