import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Education: React.FC = () => {
  const { theme } = useTheme();

  const educationData = [
    {
      degree: "B.Tech, Computer Science",
      institution: "Andhra University",
      period: "2023 — 2027",
      location: "Visakhapatnam,Ap,India",
      status: "Current",
      gpa: "Pursuing",
      highlights: [
        "Specialized coursework in Data Structures, Algorithms, and Software Engineering",
        "Active participation in technical workshops and coding competitions",
        "Focus on AI/ML and Computer Vision applications"
      ]
    },
    {
      degree: "Intermediate Education (MPC)",
      institution: "Ascent Junior College",
      period: "2021 — 2023",
      location: "Visakhapatnam,Ap,India",
      status: "Completed",
      gpa: "87.7%",
      highlights: [
        "Mathematics, Physics, Chemistry specialization",
        "Strong foundation in STEM subjects",
        "Consistent academic performance"
      ]
    },
    {
      degree: "High School Education",
      institution: "Bhashyam High School",
      period: "2016 — 2021",
      location: "Srikakulam,Ap,India",
      status: "Completed",
      gpa: "100%",
      highlights: [
        "Comprehensive secondary education",
        "Developed interest in technology and programming",
        "Active in extracurricular activities"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Background
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building a strong foundation through academic excellence.
          </p>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 dark:border-gray-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex gap-4">
                   <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl h-fit">
                      <GraduationCap className="text-purple-600 dark:text-purple-400" size={24} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                  <div className={`w-fit px-2 py-1 rounded-full text-xs font-medium ${edu.status === 'Current' ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300' : 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'}`}>
                    {edu.status}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Grade: {edu.gpa}
                </span>
              </div>

              <ul className="space-y-2">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;