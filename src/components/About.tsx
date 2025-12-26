import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

const StatCounter = ({ target, label, suffix = "", colorClass = "" }: { target: number, label: string, suffix?: string, colorClass?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target]);

  return (
    <div className="text-center">
      <div className={`text-3xl md:text-4xl font-bold ${colorClass}`}>
        <span ref={nodeRef}>0</span>{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  const highlights = [
    { icon: Target, title: "AI/ML Specialist", description: "Expert in machine learning algorithms, computer vision, and deep learning frameworks like TensorFlow and Caffe." },
    { icon: Lightbulb, title: "Problem Solver", description: "Passionate about transforming complex technical challenges into elegant, scalable solutions." },
    { icon: Users, title: "Team Player", description: "Collaborative developer with experience in cross-functional teams and agile development practices." },
    { icon: Award, title: "Continuous Learner", description: "Always staying updated with the latest technologies and industry best practices." }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-6 relative">
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-4 md:right-20 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-4 md:left-20 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tl from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A dedicated Computer Science Engineer with a passion for AI/ML and innovative technology solutions</p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Passionate Developer & AI Enthusiast</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>I'm Konala S V Murali Ramakrishna Reddy, a Computer Science Engineer currently pursuing my B.Tech at Andhra University.</p>
              <p>Through various internships and projects, I've gained hands-on experience in developing AI-powered solutions, from computer vision applications to backend systems.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <StatCounter target={4} label="Internships" suffix="+" colorClass="text-blue-600 dark:text-blue-400" />
              <StatCounter target={10} label="Projects" suffix="+" colorClass="text-purple-600 dark:text-purple-400" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div key={h.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 dark:border-gray-600 relative z-10 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <h.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">{h.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{h.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;