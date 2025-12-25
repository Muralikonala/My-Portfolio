import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor follower */}
      <motion.div
        className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference`}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          scale: { duration: 0.2 }
        }}
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
        }}
      />

      {/* Secondary glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          scale: { duration: 0.3 }
        }}
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.03) 50%, transparent 100%)',
          filter: 'blur(20px)'
        }}
      />

      {/* Ripple effect on click */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: [0, 2, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 2
        }}
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 100%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 100%)'
        }}
      />
    </>
  );
};

export default MouseFollower;