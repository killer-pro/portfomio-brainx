import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import metalxLogo from '../assets/images/metalx.jpg';
import { FaRocket, FaUsers, FaCheckCircle, FaBrain, FaShieldAlt, FaServer, FaArrowRight } from 'react-icons/fa';
import { projects } from '../data/projects';

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
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section: perfectly calibrated to fit above the fold */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16 flex items-center min-h-[calc(100vh-6rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-800 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <span>Ingénieurs Diplômés de l'École Polytechnique de Thiès</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              L'Ingénierie de Pointe avec{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                MetalX
              </span>
            </h1>

            {/* Dynamic Typewriter Slogan */}
            <div className="min-h-[3rem] flex items-center">
              <p className="text-lg sm:text-xl font-mono font-medium text-indigo-700 bg-indigo-50/80 px-3 py-1.5 rounded-lg border-l-4 border-indigo-600 shadow-sm inline-block">
                {displayed}
                <span className="inline-block w-2 bg-indigo-600 ml-1 animate-pulse">|</span>
              </p>
            </div>

            {/* Professional Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Pôle d'ingénieurs diplômés d'élite en informatique et télécommunications. 
              Nous concevons des architectures d'<strong>IA agentique (LLM)</strong>, des 
              systèmes distribués haute résilience, des dispositifs <strong>IoT industriels</strong> et des plateformes MedTech sécurisées pour des leaders comme la <strong>Sonatel</strong> et <strong>Petrosen</strong>.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
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

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg">
              <div>
                <div className="text-2xl font-black text-indigo-600">100%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Ingénieurs EPT</div>
              </div>
              <div>
                <div className="text-2xl font-black text-indigo-600">12+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Projets Réalisés</div>
              </div>
              <div>
                <div className="text-2xl font-black text-indigo-600">98.4%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Fiabilité IA</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Perfectly Calibrated Logo & Visual Identity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl filter blur-2xl transform scale-105 -z-10" />

            {/* Main Logo Card */}
            <div className="w-full max-w-sm sm:max-w-md bg-white/80 backdrop-blur-xl border border-white/80 shadow-2xl rounded-3xl p-6 relative overflow-visible">
              
              {/* Floating Pill Badges */}
              <div className="absolute -top-3 -left-3 bg-white/95 border border-indigo-100 shadow-md px-3 py-1.5 rounded-full flex items-center space-x-1.5 text-xs font-bold text-indigo-700 animate-bounce">
                <FaBrain className="text-indigo-600" />
                <span>Agentic AI & LLMs</span>
              </div>

              <div className="absolute -bottom-3 -right-3 bg-white/95 border border-purple-100 shadow-md px-3 py-1.5 rounded-full flex items-center space-x-1.5 text-xs font-bold text-purple-700">
                <FaShieldAlt className="text-purple-600" />
                <span>Sécurité & FinTech</span>
              </div>

              {/* Logo Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-inner group">
                <img
                  src={metalxLogo}
                  alt="MetalX Engineering & IT Services"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-widest text-indigo-300 font-bold">Cabinet d'Ingénierie</div>
                  <div className="text-lg font-black tracking-tight">MetalX IT Solutions</div>
                </div>
              </div>

              {/* Mini highlights under logo */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1">
                  <FaCheckCircle className="text-emerald-500" />
                  <span>Diplôme d'Ingénieur DIC</span>
                </span>
                <span className="flex items-center space-x-1">
                  <FaServer className="text-indigo-500" />
                  <span>Haute Disponibilité</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Featured Projects Highlight Strip */}
      <section className="bg-white py-16 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
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

    </div>
  );
}

export default Home;