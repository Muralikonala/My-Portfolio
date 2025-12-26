import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manual Scroll Handler to fix the "1mm move" bug
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Small delay to allow the mobile menu closure to initiate
      setTimeout(() => {
        const offset = 85; // Accounts for the height of your fixed header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-white/95 via-blue-50/95 to-purple-50/95 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-700/95 backdrop-blur-md border-b border-blue-200/50 dark:border-gray-800 shadow-lg'
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md md:bg-white/80 md:dark:bg-gray-900/80'
      }`}
    >
      {/* Scroll Progress Bar - Lowered z-index and added pointer-events-none */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 origin-left z-0 pointer-events-none"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Muralikonala
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
            </motion.button>

            <motion.a
              href="/Konala S V Murali Ramakrishna Reddy-Resume.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              <Download size={16} /> Resume
            </motion.a>

            {/* Hamburger Button: Restored to your original style */}
            <button
              className={`md:hidden p-3 rounded-lg transition-colors relative z-20 ${
                isMenuOpen 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800"
            >
              <nav className="flex flex-col space-y-3 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 block"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/Konala S V Murali Ramakrishna Reddy-Resume.pdf"
                  download
                  className="sm:hidden flex items-center gap-2 px-3 py-3 bg-blue-600 text-white rounded-lg font-medium mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Download className="w-4 h-4" /> Resume
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;