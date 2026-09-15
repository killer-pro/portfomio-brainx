import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaRocket, FaCode, FaUsers, FaEnvelope, FaHome, FaTrophy } from 'react-icons/fa';
import metalxLogo from '../assets/images/metalx.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/', icon: FaHome },
    { name: 'Projets', path: '/projects', icon: FaCode },
    { name: 'Distinctions', path: '/#distinctions', icon: FaTrophy },
    { name: 'Équipe', path: '/team', icon: FaUsers },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
  ];

  const handleLinkClick = (e, path) => {
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    if (path.startsWith('/#')) return location.hash === path.replace('/', '');
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-gray-200/70 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-indigo-100 border border-indigo-100 group-hover:scale-105 transition-transform duration-200">
              <img 
                src={metalxLogo} 
                alt="MetalX Emblem" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 bg-clip-text text-transparent tracking-tight">
                MetalX
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
                Ingénieurs EPT
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-gray-100/70 p-1.5 rounded-full border border-gray-200/60 shadow-inner">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`flex items-center space-x-2 px-4 lg:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-white/60'
                  }`}
                >
                  <Icon className={`text-xs ${active ? 'text-indigo-600' : 'text-gray-400'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button on Right */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md shadow-indigo-200 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <FaRocket className="text-xs" />
              <span>Explorer nos Réalisations</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-xl transition-all animate-fadeIn">
          <div className="px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    active
                      ? 'bg-indigo-50 text-indigo-600 font-bold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                  }`}
                >
                  <Icon className={`text-base ${active ? 'text-indigo-600' : 'text-gray-400'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
            <div className="pt-2 border-t border-gray-100">
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
              >
                <FaRocket className="text-xs" />
                <span>Voir nos Projets</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;