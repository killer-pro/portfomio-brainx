import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import metalxBg from '../assets/images/metalx.jpg';

const sloganList = [
  "L'innovation au service du numérique.",
  "Des solutions sur-mesure pour vos projets.",
  "L'excellence, notre engagement."
];

function Home() {
  const [sloganIndex, setSloganIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing && displayed.length < sloganList[sloganIndex].length) {
      timeout = setTimeout(() => {
        setDisplayed(sloganList[sloganIndex].slice(0, displayed.length + 1));
      }, 50);
    } else if (typing && displayed.length === sloganList[sloganIndex].length) {
      timeout = setTimeout(() => setTyping(false), 1200);
    } else if (!typing) {
      timeout = setTimeout(() => {
        setTyping(true);
        setDisplayed('');
        setSloganIndex((prev) => (prev + 1) % sloganList.length);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, sloganIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl mb-4"
          >
            Bienvenue chez <span className="text-indigo-600 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">MetalX</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="h-8 mb-4 flex justify-center items-center"
          >
            <span className="text-lg sm:text-xl md:text-2xl text-indigo-700 font-semibold font-mono border-l-4 border-indigo-400 pl-3 animate-pulse">
              {displayed}
              <span className="animate-blink">|</span>
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-3 max-w-md mx-auto text-xl text-gray-600 sm:text-2xl md:mt-5 md:max-w-3xl"
          >
            Une équipe d'élevés ingénieurs innovants en 4e années de l'École Polytechnique de Thiès, spécialisée en informatique et télécommunications.
          </motion.p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 gap-4">
            <motion.div
              whileHover={{ rotate: -2, scale: 1.07, boxShadow: '0 8px 32px 0 rgba(99,102,241,0.25)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-indigo-400"
              >
                Voir nos projets
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ rotate: 2, scale: 1.07, boxShadow: '0 8px 32px 0 rgba(99,102,241,0.25)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/team"
                className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-gray-50 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-indigo-200"
              >
                Rencontrer l'équipe
              </Link>
            </motion.div>
          </div>
          <motion.img
            src={metalxBg}
            alt="MetalX IT Services logo"
            className="mx-auto mt-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: [1, 1.05, 1], opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            style={{ boxShadow: '0 0 32px 0 rgba(99,102,241,0.15)' }}
          />
        </motion.div>
      </div>
      {/* Flèche scroll down animée */}
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
                  </motion.div>
      </div>
      {/* Animation de fond subtile */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-tr from-indigo-100/40 via-white/0 to-purple-100/40 animate-gradient-move"></div>
      </div>
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 1s step-end infinite; }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;