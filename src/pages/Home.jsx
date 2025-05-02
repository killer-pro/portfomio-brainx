import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl mb-8">
            Welcome to <span className="text-indigo-600 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">MetalX</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-gray-600 sm:text-2xl md:mt-5 md:max-w-3xl">
            A team of innovative engineers from École Polytechnique de Thiès, specializing in computer science and telecommunications.
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 gap-4">
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Our Projects
            </Link>
            <Link
              to="/team"
              className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-gray-50 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Meet The Team
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;