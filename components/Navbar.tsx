
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PlaneIcon } from '../constants';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-vice-dark/95 backdrop-blur-md border-b border-vice-cyan/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <PlaneIcon className="w-8 h-8 text-vice-cyan group-hover:text-vice-pink transition-colors duration-300" />
          <span className="text-2xl font-bold tracking-tighter text-white">
            LAUNCH<span className="text-vice-cyan opacity-80">PAD</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Terminal', path: '/' },
            { name: 'Exchange', path: '/marketplace' },
            { name: 'Upload', path: '/submit' },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 relative py-1
                ${isActive(link.path) ? 'text-vice-cyan' : 'text-gray-500 hover:text-white'}`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vice-cyan shadow-neon-cyan"></span>
              )}
            </Link>
          ))}
        </div>

        <Link
          to="/submit"
          className="bg-vice-cyan hover:bg-vice-pink text-vice-dark px-6 py-2 rounded font-black uppercase text-[10px] tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          New Launch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
