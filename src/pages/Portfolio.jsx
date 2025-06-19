import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/team';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

function Portfolio() {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === parseInt(id));

  if (!member) {
    return <div>Membre non trouvé</div>;
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={member.image}
                alt={member.name}
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900">{member.name}</h1>
              <p className="mt-2 text-xl text-indigo-600">{member.role}</p>
              <p className="mt-4 text-gray-600">{member.bio}</p>
              
              <div className="mt-6 flex space-x-4">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center text-gray-600 hover:text-indigo-600"
                >
                  <FaEnvelope className="mr-2" />
                  Email
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-indigo-600"
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-indigo-600"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
                <a
                  href={`/cv/${member.id}`}
                  className="flex items-center text-gray-600 hover:text-indigo-600"
                >
                  <FaDownload className="mr-2" />
                  Télécharger le CV
                </a>
              </div>
            </div>
          </div>

          {member.biography && (
            <div className="p-8 border-t border-gray-200 bg-gradient-to-r from-indigo-50 to-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ma motivation et mon parcours</h2>
              <div className="prose prose-indigo max-w-none">
                {member.biography.map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-800 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          <div className="p-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compétences</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {member.skills?.map((skill, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-800">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expérience</h2>
            {member.experience?.map((exp, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-indigo-600">{exp.company}</p>
                <p className="text-gray-600">{exp.period}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="p-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Éducation</h2>
            {member.education?.map((edu, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-indigo-600">{edu.school}</p>
                <p className="text-gray-600">{edu.period}</p>
                <p className="mt-2 text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>

          {member.projects && (
            <div className="p-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Projets</h2>
              {member.projects.map((project, index) => (
                <div key={index} className="mb-6">
                  <p className="text-gray-700">{project}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
