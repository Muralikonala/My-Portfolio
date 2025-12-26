import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
{ name: 'Certificates', href: '#certificates' }, // New navigation item
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-white/95 via-blue-50/95 to-purple-50/95 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-700/95 backdrop-blur-md border-b border-blue-200/50 dark:border-gray-800 shadow-lg shadow-blue-500/10 dark:shadow-gray-900/50'
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md md:bg-white/80 md:dark:bg-gray-900/80'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#hero"
            className={`text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent hover:from-purple-600 hover:via-blue-600 hover:to-purple-800 dark:hover:from-purple-400 dark:hover:via-blue-400 dark:hover:to-purple-300 transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
          >
            Muralikonala
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-800 dark:text-gray-100'} hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text font-medium transition-all duration-300 relative group`}
                whileHover={{ y: -2, scale: 1.02 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Resume Download */}
            <motion.a
              href="/Konala S V Murali Ramakrishna Reddy-Resume.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-3 rounded-lg transition-colors ${
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all block"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Konala S V Murali Ramakrishna Reddy-Resume.pdf"
                download
                className="sm:hidden flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;