import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    { icon: Code, title: "Programming Languages", color: "text-blue-600 dark:text-blue-400", skills: [{ name: "Python", level: 90 }, { name: "JavaScript", level: 85 }, { name: "Java", level: 80 }, { name: "C++", level: 75 }, { name: "React", level: 85 }, { name: "Node.js", level: 80 }] },
    { icon: Brain, title: "AI/ML Technologies", color: "text-purple-600 dark:text-purple-400", skills: [{ name: "Machine Learning", level: 85 }, { name: "Computer Vision", level: 80 }, { name: "TensorFlow", level: 65 }, { name: "Caffe", level: 70 }, { name: "Roboflow", level: 75 }, { name: "Deep Learning", level: 75 }] },
    { icon: Wrench, title: "Development Tools", color: "text-emerald-600 dark:text-emerald-400", skills: [{ name: "Git", level: 85 }, { name: "Linux", level: 80 }, { name: "Docker", level: 70 }, { name: "VS Code", level: 90 }, { name: "GitHub", level: 85 }, { name: "AWS", level: 60 }] }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-6 relative">
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-4 md:right-20 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-4 md:left-20 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tl from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A comprehensive overview of my technical expertise and proficiency levels</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.2 }} className="group relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 dark:border-gray-600 relative z-10 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"><cat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" /></div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{cat.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {cat.skills.map((s, idx) => (
                      <div key={s.name} className="space-y-2">
                        <div className="flex justify-between items-center"><span className="text-sm font-medium text-gray-700 dark:text-gray-300">{s.name}</span><span className={`text-xs font-bold ${cat.color}`}>{s.level}%</span></div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"><motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1.5, delay: idx * 0.1 }} className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;