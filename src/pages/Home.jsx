import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import metalxLogo from '../assets/images/metalx.jpg';
import { FaRocket, FaUsers, FaArrowRight, FaTrophy, FaMedal, FaCalendarAlt } from 'react-icons/fa';
import { projects } from '../data/projects';
import { awards } from '../data/awards';

const sloganList = [
  "L'intelligence artificielle au service de solutions concrètes.",
  "Architectures scalables, résilientes et sécurisées par conception.",
  "De la recherche polytechnicienne à l'impact industriel."
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
      }, 40);
    } else if (typing && displayed.length === sloganList[sloganIndex].length) {
      timeout = setTimeout(() => setTyping(false), 1400);
    } else if (!typing) {
      timeout = setTimeout(() => {
        setTyping(true);
        setDisplayed('');
        setSloganIndex((prev) => (prev + 1) % sloganList.length);
      }, 800);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, sloganIndex]);

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-slate-50 via-indigo-50/20 to-white relative overflow-hidden min-h-screen">
      
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 lg:pt-16 lg:pb-20 flex items-center min-h-[calc(100vh-6rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          
          {/* Left Column: Headline, Typewriter, Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              L'Ingénierie de Pointe avec{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                MetalX
              </span>
            </h1>

            {/* Dynamic Typewriter Slogan */}
            <div className="min-h-[2.75rem] flex items-center justify-center lg:justify-start w-full">
              <p className="text-base sm:text-lg font-mono font-medium text-indigo-700 bg-indigo-50/90 px-3.5 py-1.5 rounded-lg border-l-4 border-indigo-600 shadow-sm inline-block">
                {displayed}
                <span className="inline-block w-2 bg-indigo-600 ml-1 animate-pulse">|</span>
              </p>
            </div>

            {/* Natural, professional pitch */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal mx-auto lg:mx-0">
              Pôle d'ingénieurs diplômés d'élite en informatique et télécommunications. 
              Nous concevons des architectures d'<strong>IA agentique (LLM)</strong>, des 
              systèmes distribués haute résilience, des dispositifs <strong>IoT industriels</strong> et des plateformes MedTech sécurisées pour des acteurs de référence comme la <strong>Sonatel</strong> et <strong>Petrosen</strong>.
            </p>

            {/* Action Buttons: Centered on small/medium, left-aligned on large */}
            <div className="pt-2 flex flex-wrap gap-4 items-center justify-center lg:justify-start w-full">
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <FaRocket className="text-sm" />
                <span>Explorer nos Projets</span>
              </Link>

              <Link
                to="/team"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <FaUsers className="text-slate-500" />
                <span>Découvrir l'Équipe</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Clean & Perfectly Framed Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center items-center w-full"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white border border-slate-200/80 shadow-xl rounded-2xl p-4 sm:p-5 transition-transform duration-300 hover:shadow-2xl">
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-inner">
                <img
                  src={metalxLogo}
                  alt="MetalX Emblem"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Featured Projects Highlight Strip */}
      <section className="bg-white py-16 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between mb-10 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Innovations Majeures</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Nos Projets d'Impact Stratégique</h2>
            </div>
            <Link
              to="/projects"
              className="mt-4 sm:mt-0 inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <span>Voir tout le catalogue ({projects.length} projets)</span>
              <FaArrowRight className="ml-2 text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-44 rounded-xl overflow-hidden mb-4 bg-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-indigo-100 text-indigo-700 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {project.tag || "Projet certifié"}
                  </span>
                  <Link
                    to="/projects"
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <span>Détails</span>
                    <FaArrowRight className="ml-1 text-[10px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinctions & Awards Section */}
      <section id="distinctions" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              <FaTrophy className="text-amber-600 text-xs" />
              <span>Palmarès & Récompenses</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Distinctions & Prix d'Excellence
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
              Les innovations conçues par la <strong>Team Metal-X</strong> récompensées lors des hackathons et compétitions technologiques d'envergure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {awards.map((award) => {
              const isFirst = award.rank.includes("1");
              return (
                <div
                  key={award.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Award Image if available */}
                    {award.image && (
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                        {award.prize && (
                          <div className="absolute bottom-3 left-3 bg-emerald-600/95 text-white px-3 py-1 rounded-full text-xs font-black shadow-lg flex items-center space-x-1.5 border border-emerald-400/30 backdrop-blur-sm">
                            <span>🏆 Chèque Gagnant : {award.prize}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-6 sm:p-7 pb-0">
                      {/* Top Row: Rank Badge & Year */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide ${
                          isFirst
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-orange-100 text-orange-900 border border-orange-300'
                        }`}>
                          <FaMedal className={isFirst ? 'text-amber-600' : 'text-orange-600'} />
                          <span>{award.rank}</span>
                        </span>

                        <span className="text-xs font-bold text-slate-500 flex items-center space-x-1">
                          <FaCalendarAlt className="text-slate-400 text-[10px]" />
                          <span>{award.period}</span>
                        </span>
                      </div>

                      {/* Competition Name */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                        {award.title}
                      </h3>

                      {/* Project & Category Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold">
                          {award.category}
                        </span>
                        {award.project && (
                          <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                            {award.project}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {award.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer card */}
                  <div className="p-6 sm:p-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                    <span className="text-indigo-600 font-semibold">{award.team}</span>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Officiel</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;