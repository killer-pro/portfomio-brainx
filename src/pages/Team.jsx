import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/team';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Team() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Talented software engineers from École Polytechnique de Thiès
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-200 hover:scale-105"
            >
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="w-full h-64 object-cover"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-lg text-indigo-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex space-x-6 mb-6">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                    title="Email"
                  >
                    <FaEnvelope size={24} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                    title="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
                <Link
                  to={`/portfolio/${member.id}`}
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;