import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Phone, ExternalLink, Download, 
  Code2, Briefcase, GraduationCap, Award, Cpu, Zap, 
  Menu, X, Sparkles, Terminal, ShieldCheck, ChevronRight,
  Globe, Database, Layout, Smartphone
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const experience = [
    {
      title: "Web Development Intern",
      company: "UptoSkills (Remote)",
      date: "OCT 2025 — JAN 2026",
      details: [
        "Developing responsive web pages and dynamic interfaces using React and Tailwind CSS.",
        "Collaborating with the design team to implement UI/UX enhancements.",
        "Participating in weekly reviews to improve performance and code quality."
      ]
    },
    {
      title: "Python Developer Intern",
      company: "Codec Technologies",
      date: "SEP 15, 2025 — NOV 15, 2025",
      details: [
        "Spearheaded backend logic development and modular code design using Python.",
        "Conducted performance optimization for data-driven modules and backend scripts."
      ]
    },
    {
      title: "Frontend Development Intern",
      company: "CodeAlpha (Remote)",
      date: "SEP 2025 — OCT 2025",
      details: [
        "Created modern, interactive frontends with optimized HTML, CSS, and JavaScript.",
        "Enhanced website speed and responsiveness, improving user experience.",
        "Refined code structure and UI consistency based on professional mentor feedback."
      ]
    },
    {
      title: "AI/ML Intern",
      company: "Robocoupler Pvt Ltd",
      date: "MAY 2025 — JULY 2025",
      details: [
        "Developed and trained custom object detection models using Python and Roboflow.",
        "Implemented face recognition modules with Caffe deep learning frameworks.",
        "Collaborated on initial development phases for high-performance mobile applications."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-400 selection:bg-blue-500/30 overflow-x-hidden font-sans">
      {/* Aurora Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/5 blur-[120px]" />
      </div>

      {/* FIXED NAVIGATION */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a href="#" className="text-xl font-black text-white tracking-tighter hover:text-blue-500 transition-colors">
            MURALIKONALA
          </motion.a>
          
          <nav className="hidden lg:flex space-x-8 text-[10px] font-black uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-500 hover:text-white transition-all">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a href="/Konala S V Murali Ramakrishna Reddy-CSE-AUCE.pdf" download className="hidden sm:flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all text-[10px] font-black uppercase tracking-widest">
              <Download size={12} /> CV
            </a>
            <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO SECTION: Scaled and Balanced */}
        <section id="hero" className="min-h-[85vh] flex items-center pt-20 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-blue-500"></span>
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">CSE @ Andhra University</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                Konala S V Murali <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent italic leading-[1.2]">Ramakrishna Reddy</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                Innovative software engineer specializing in Computer Vision and Scalable Architectures. Focused on building production-ready AI solutions.
              </p>
              <div className="flex flex-wrap gap-5">
                <a href="#projects" className="px-8 py-4 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-2">
                  View Innovation <Zap size={14} fill="currentColor" />
                </a>
                <div className="flex gap-3">
                  <a href="https://github.com/Muralikonala" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-blue-500/50 transition-all text-white"><Github size={20} /></a>
                  <a href="https://www.linkedin.com/in/s-v-murali-ramakrishna-reddy-konala-535a04297/" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-blue-500/50 transition-all text-white"><Linkedin size={20} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SUMMARY & QUICK STATS */}
        <section id="about" className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.4em] mb-6">Summary</h2>
              <h3 className="text-3xl font-bold text-white mb-8 leading-tight">
                Engineering software that bridges AI theory and real-world application.
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Motivated B.Tech CSE student with practical experience in AI and Machine Learning. I specialize in developing software solutions using Python, Java, and C++, with a core focus on Computer Vision and full-stack integration.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-10 rounded-[2.5rem] bg-[#0A0F1E] border border-white/10">
                <h4 className="text-4xl font-black text-white mb-2">04</h4>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Internships</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-[#0A0F1E] border border-white/10">
                <h4 className="text-4xl font-black text-white mb-2">09+</h4>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Languages</p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE: Vertical Timeline */}
        <section id="experience" className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-20 text-center tracking-widest uppercase">Experience</h2>
            <div className="space-y-24">
              {experience.map((exp, i) => (
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} key={i} className="group relative grid md:grid-cols-4 gap-12">
                  <div className="md:col-span-1">
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] block mb-4 italic">{exp.date}</span>
                    <div className="h-1 w-10 bg-blue-600 rounded-full" />
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tight">{exp.title}</h3>
                    <p className="text-blue-500 font-black text-xs uppercase tracking-widest mb-6">{exp.company}</p>
                    <ul className="space-y-4">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-slate-400 text-sm flex gap-4 leading-relaxed italic">
                          <ChevronRight className="text-blue-500 shrink-0 mt-0.5" size={16} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS BENTO */}
        <section id="skills" className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-16 flex items-center gap-4 uppercase tracking-tighter">
              <Terminal className="text-blue-500" /> Skills Matrix
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-10 rounded-[2.5rem] bg-[#0A0F1E] border border-white/10">
                <h4 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-8">Languages</h4>
                <div className="flex flex-wrap gap-3 font-mono">
                  {["Python", "Java", "C++", "C", "HTML", "CSS", "JavaScript", "React", "Node"].map(s => <span key={s} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[11px] font-bold text-slate-300">{s}</span>)}
                </div>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-[#0A0F1E] border border-white/10">
                <h4 className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em] mb-8">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {["AI/ML Concepts", "Computer Vision", "Caffe", "Roboflow", "MongoDB"].map(s => <span key={s} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[11px] font-bold text-slate-300">{s}</span>)}
                </div>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-[#0A0F1E] border border-white/10">
                <h4 className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.3em] mb-8">Dev Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {["Linux", "Git", "GitHub"].map(s => <span key={s} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[11px] font-bold text-slate-300">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-20 text-center tracking-tighter">Innovations</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="p-10 rounded-[3rem] bg-[#0A0F1E] border border-white/10 hover:border-blue-500/50 transition-all">
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 w-fit mb-8"><Cpu size={32} /></div>
                <h3 className="text-2xl font-bold text-white mb-4">Object Detection System</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8">
                  Training models on Roboflow datasets for high-accuracy object classification. Managed data preprocessing and performance analysis.
                </p>
                <div className="flex gap-3">
                  {["Python", "Roboflow", "Vision"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="p-10 rounded-[3rem] bg-[#0A0F1E] border border-white/10 hover:border-indigo-500/50 transition-all">
                <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400 w-fit mb-8"><ShieldCheck size={32} /></div>
                <h3 className="text-2xl font-bold text-white mb-4">Face Recognition Module</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8">
                  Practical security application built using Caffe deep learning framework to implement verification tasks.
                </p>
                <div className="flex gap-3">
                  {["Caffe", "Deep Learning", "Security"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTS */}
        <section id="education" className="py-32 px-6 bg-white/[0.01] border-t border-white/5">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-2xl font-black text-white mb-12 flex items-center gap-4 uppercase"><GraduationCap className="text-blue-500" /> Education</h2>
              <div className="space-y-12">
                <div className="relative pl-8 border-l border-blue-600/30">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-600" />
                  <h4 className="text-xl font-bold text-white leading-tight">B.Tech, Computer Science</h4>
                  <p className="text-blue-500 text-[10px] font-black mt-2 uppercase tracking-widest">Andhra University | Expected 2027</p>
                </div>
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-600" />
                  <h4 className="text-xl font-bold text-white leading-tight opacity-60 font-medium">Intermediate Education</h4>
                  <p className="text-slate-500 text-[10px] font-black mt-1 uppercase tracking-widest leading-loose">Ascent Junior College | 2021-2023</p>
                </div>
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-600" />
                  <h4 className="text-xl font-bold text-white leading-tight opacity-60 font-medium">High School Education</h4>
                  <p className="text-slate-500 text-[10px] font-black mt-1 uppercase tracking-widest leading-loose">Bhashyam High School | 2016-2021</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-12 flex items-center gap-4 uppercase"><Award className="text-blue-500" /> Credentials</h2>
              <div className="grid gap-3">
                {[
                  "Basics Of Artificial Intelligence - Simplelearn",
                  "Basics Of Machine Learning - Simplelearn",
                  "Python Basics - Simplelearn",
                  "Full Stack AI Internship - Robocoupler",
                  "Frontend Development Internship - CodeAlpha"
                ].map(cert => (
                  <div key={cert} className="p-5 rounded-2xl bg-[#0A0F1E] border border-white/10 text-[10px] font-black uppercase tracking-[0.1em] flex items-center gap-4">
                    <Award size={16} className="text-blue-500" /> {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COLLABORATE SECTION (Address User Request) */}
        <footer id="contact" className="py-40 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32">
              <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
                Let's <span className="text-blue-600 italic">Collaborate.</span>
              </motion.h2>
              <p className="text-slate-500 text-lg uppercase tracking-[0.3em] font-black">Building the future of software, together.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 mb-32">
              <a href="mailto:konalamurali2006@gmail.com" className="group p-12 rounded-[4rem] bg-[#0A0F1E] border border-white/10 flex flex-col items-center gap-6 hover:border-blue-500/50 transition-all">
                <Mail className="text-blue-500 group-hover:scale-110 transition-transform" size={48} />
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Direct Email</p>
                <p className="text-2xl text-white font-bold tracking-tight">konalamurali2006@gmail.com</p>
              </a>
              <a href="tel:+919492054444" className="group p-12 rounded-[4rem] bg-[#0A0F1E] border border-white/10 flex flex-col items-center gap-6 hover:border-emerald-500/50 transition-all">
                <Phone className="text-emerald-500 group-hover:scale-110 transition-transform" size={48} />
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Phone Number</p>
                <p className="text-2xl text-white font-bold tracking-tight">+91 9492054444</p>
              </a>
            </div>

            <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex gap-10">
                <a href="https://github.com/Muralikonala" className="text-slate-600 hover:text-white transition-colors"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/s-v-murali-ramakrishna-reddy-konala-535a04297/" className="text-slate-600 hover:text-white transition-colors"><Linkedin size={24} /></a>
              </div>
              <p className="text-[10px] font-black text-slate-800 uppercase tracking-[0.6em]">© 2025 Konala S V Murali Reddy</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;