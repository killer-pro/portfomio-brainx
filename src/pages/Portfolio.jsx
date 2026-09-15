import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/team';
import { projects } from '../data/projects';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaCheckCircle, FaAward, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

function Portfolio() {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Membre non trouvé</h2>
          <Link to="/team" className="text-indigo-600 font-semibold hover:underline">
            Retourner à l'équipe
          </Link>
        </div>
      </div>
    );
  }

  // Find featured thesis project for Mouhamadou Diouf CISSE (id 2)
  const thesisProject = member.id === 2 ? projects.find(p => p.id === 1) : null;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden"
        >
          {/* Header Profile Section */}
          <div className="p-8 sm:p-10 border-b border-slate-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white relative">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              
              {/* Avatar Photo */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0">
                <img
                  className="w-full h-full object-cover object-top"
                  src={member.image}
                  alt={member.name}
                />
              </div>

              {/* Identity & Bio */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/40 text-indigo-200 text-xs font-bold uppercase tracking-wider mb-3">
                  <FaCheckCircle className="text-emerald-400 text-xs" />
                  <span>Ingénieur Diplômé EPT</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                  {member.name}
                </h1>
                
                <p className="text-base sm:text-lg text-indigo-300 font-medium mb-4">
                  {member.role}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  {member.bio}
                </p>

                {/* Social Buttons */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
                  >
                    <FaEnvelope className="mr-2" />
                    Email direct
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                  >
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={`mailto:${member.email}?subject=Demande de CV - ${encodeURIComponent(member.name)}`}
                    className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                  >
                    <FaFilePdf className="mr-2" />
                    Demander le CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Thesis Section for Mouhamadou Diouf CISSE */}
          {thesisProject && (
            <div className="p-8 sm:p-10 bg-indigo-50/60 border-b border-indigo-100">
              <div className="flex items-center space-x-2 text-indigo-700 text-xs font-black uppercase tracking-wider mb-3">
                <FaAward className="text-base text-amber-500" />
                <span>Projet de Fin d'Études (Mémoire d'Ingénieur)</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {thesisProject.title}
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                {thesisProject.description}
              </p>

              {/* Metrics Grid */}
              {thesisProject.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
                  {thesisProject.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-xl shadow-sm border border-indigo-100 text-center">
                      <div className="text-base font-black text-indigo-700">{m.value}</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
                >
                  <FaPlay className="mr-2 text-[10px]" />
                  Voir la démo vidéo dans les projets
                </Link>
              </div>
            </div>
          )}

          {/* Biography & Motivation */}
          {member.biography && (
            <div className="p-8 sm:p-10 border-b border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Parcours & Vision d'Ingénieur</h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {member.biography.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* Skills Grid */}
          <div className="p-8 sm:p-10 border-b border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Expertises Techniques</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {member.skills?.map((skill, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-center">
                  <p className="text-slate-800 font-semibold text-xs sm:text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="p-8 sm:p-10 border-b border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Expérience Professionnelle</h2>
            <div className="space-y-6">
              {member.experience?.map((exp, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full w-fit mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">{exp.company}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Diplôme & Formation</h2>
            <div className="space-y-6">
              {member.education?.map((edu, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full w-fit mt-1 sm:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">{edu.school}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
