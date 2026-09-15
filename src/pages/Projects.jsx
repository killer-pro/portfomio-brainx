import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaTimes, FaLayerGroup, FaCheckCircle, FaAward } from 'react-icons/fa';

const categories = [
  "Tous",
  "Mémoire / PFE",
  "Intelligence Artificielle",
  "Santé & MedTech",
  "IoT & Systèmes",
  "Web3 & FinTech",
  "Applications & Cloud"
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [activeVideoModal, setActiveVideoModal] = useState(null); // url string

  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const openVideo = (url, title) => {
    setActiveVideoModal({ url, title });
  };

  const closeVideo = () => {
    setActiveVideoModal(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <FaAward className="text-sm" />
            <span>Réalisations d'Ingénierie & R&D</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nos Projets & Réalisations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Solutions innovantes à fort impact technologique et économique : agents conversationnels LLM, plateformes MedTech, systèmes IoT critiques et protocoles décentralisés.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const hasValidDemo = Boolean(project.demoUrl && project.demoUrl.trim() !== '#' && project.demoUrl.trim() !== '');
              const hasValidGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== '#' && project.githubUrl.trim() !== '');
              const isVideo = project.isVideoDemo || (project.demoUrl && project.demoUrl.endsWith('.mp4'));

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`bg-white rounded-2xl shadow-md hover:shadow-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    project.featured ? 'border-indigo-200 ring-1 ring-indigo-50' : 'border-slate-200/80'
                  }`}
                >
                  <div>
                    {/* Image Container with Framing & Badges */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/5">
                      <img
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/95 text-indigo-700 shadow-sm backdrop-blur-sm">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
                            ⭐ Projet Phare
                          </span>
                        )}
                      </div>

                      {/* Author badge for Thesis/PFE */}
                      {project.author && (
                        <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold drop-shadow-md">
                          <span className="bg-indigo-900/80 backdrop-blur-md px-2.5 py-1 rounded-md">
                            Mémoire présenté par : {project.author}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-7">
                      <div className="mb-2">
                        {project.subtitle && (
                          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
                            {project.subtitle}
                          </p>
                        )}
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                          {project.title}
                        </h2>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Optional Project Metrics (e.g. for Tontoo) */}
                      {project.metrics && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 p-3 rounded-xl bg-indigo-50/70 border border-indigo-100">
                          {project.metrics.map((m, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-sm font-black text-indigo-700">{m.value}</div>
                              <div className="text-[10px] uppercase font-bold text-slate-500">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technologies Pill Badges */}
                      <div className="mb-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                          Stack Technique
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2.5 py-1 bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 rounded-md text-xs font-semibold transition-colors border border-slate-200/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Only show buttons if valid link exists */}
                  <div className="px-6 sm:px-7 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-3 items-center">
                      
                      {/* Video or External Demo Button */}
                      {hasValidDemo && (
                        isVideo ? (
                          <button
                            onClick={() => openVideo(project.demoUrl, project.title)}
                            className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all transform hover:scale-105"
                          >
                            <FaPlay className="mr-2 text-[10px]" />
                            Voir la démo vidéo
                          </button>
                        ) : (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all transform hover:scale-105"
                          >
                            <FaExternalLinkAlt className="mr-2 text-[10px]" />
                            Démo en ligne
                          </a>
                        )
                      )}

                      {/* Source Code Button */}
                      {hasValidGithub && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all"
                        >
                          <FaGithub className="mr-2 text-sm" />
                          Code source
                        </a>
                      )}

                      {/* Fallback label when no link is public (Internal/Enterprise project) */}
                      {!hasValidDemo && !hasValidGithub && (
                        <span className="inline-flex items-center text-xs font-semibold text-slate-500 space-x-1.5 py-1">
                          <FaCheckCircle className="text-emerald-500" />
                          <span>Projet d'ingénierie validé</span>
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {project.tag || "MetalX R&D"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <FaLayerGroup className="mx-auto text-4xl text-slate-300 mb-3" />
            <p className="text-slate-500 font-semibold">Aucun projet dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950 text-white">
              <h3 className="text-base font-bold truncate pr-4">{activeVideoModal.title}</h3>
              <button
                onClick={closeVideo}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Fermer"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {activeVideoModal.url.includes('youtube.com') || activeVideoModal.url.includes('youtu.be') ? (
                <iframe
                  src={activeVideoModal.url.replace('watch?v=', 'embed/')}
                  title={activeVideoModal.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={activeVideoModal.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Votre navigateur ne supporte pas la lecture de cette vidéo.
                </video>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Projects;