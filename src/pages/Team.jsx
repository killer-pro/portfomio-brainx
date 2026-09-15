import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/team';
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

function Team() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-4">
            <FaGraduationCap className="text-sm" />
            <span>Excellence Polytechnique</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Notre Équipe d'Ingénieurs
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Ingénieurs diplômés de conception en informatique et télécommunications de l'<strong>École Polytechnique de Thiès (EPT)</strong>. Spécialistes en intelligence artificielle, systèmes distribués, sécurité et cloud.
          </p>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Photo Container */}
                <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-80" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-indigo-700 shadow-md backdrop-blur-sm">
                      <FaCheckCircle className="text-emerald-500 text-[10px]" />
                      <span>Ingénieur Diplômé EPT</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-xl font-bold tracking-tight">{member.name}</h2>
                    <p className="text-xs font-medium text-indigo-300">{member.role}</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Skills Highlights */}
                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Domaines d'expertise
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.slice(0, 5).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 5 && (
                        <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md text-xs font-bold">
                          +{member.skills.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Social Links & Profile Action */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Réseaux</span>
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      title="Envoyer un email"
                    >
                      <FaEnvelope size={15} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      title="Profil LinkedIn"
                    >
                      <FaLinkedin size={15} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      title="Profil GitHub"
                    >
                      <FaGithub size={15} />
                    </a>
                  </div>
                </div>

                <Link
                  to={`/portfolio/${member.id}`}
                  className="w-full inline-flex justify-center items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200"
                >
                  <span>Consulter le profil complet</span>
                  <FaArrowRight className="text-xs" />
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
