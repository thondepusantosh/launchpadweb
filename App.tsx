
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Browse from './pages/Browse';
import ProductDetail from './pages/ProductDetail';
import Submit from './pages/Submit';
import Marketplace from './pages/Marketplace';
import { PlaneIcon } from './constants';

const Footer: React.FC = () => (
  <footer className="bg-vice-dark border-t border-white/5 pt-24 pb-12 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-3 mb-6">
          <PlaneIcon className="w-10 h-10 text-vice-cyan" />
          <span className="text-3xl font-black tracking-tighter text-white">
            LAUNCH<span className="text-vice-cyan/80">PAD</span>
          </span>
        </div>
        <p className="text-gray-500 text-sm max-w-xs text-center md:text-left font-medium leading-relaxed uppercase tracking-wider">
          Providing high-altitude exposure for next-generation technology assets. Clear skies ahead.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-16 w-full md:w-auto">
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-2">NETWORK</h4>
          <a href="#" className="text-gray-500 hover:text-vice-cyan text-xs uppercase font-black tracking-widest transition-colors">TERMINAL</a>
          <a href="#" className="text-gray-500 hover:text-vice-cyan text-xs uppercase font-black tracking-widest transition-colors">EXCHANGE</a>
          <a href="#" className="text-gray-500 hover:text-vice-cyan text-xs uppercase font-black tracking-widest transition-colors">MANIFEST</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-2">SYSTEMS</h4>
          <a href="#" className="text-gray-500 hover:text-vice-cyan text-xs uppercase font-black tracking-widest transition-colors">DOCUMENTATION</a>
          <a href="#" className="text-gray-500 hover:text-vice-cyan text-xs uppercase font-black tracking-widest transition-colors">TELEMETRY</a>
          <a href="#" className="text-gray-500 hover:text-vice-cyan text-xs uppercase font-black tracking-widest transition-colors">SECURITY</a>
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-2">CONTROL</h4>
          <a href="#" className="text-gray-500 hover:text-vice-cyan text-xs uppercase font-black tracking-widest transition-colors">CONTACT</a>
          <a href="#" className="text-gray-500 hover:text-vice-cyan text-xs uppercase font-black tracking-widest transition-colors">CLEARANCE</a>
        </div>
      </div>
    </div>
    
    <div className="mt-24 pt-10 border-t border-white/5 text-center text-[9px] text-gray-600 uppercase font-black tracking-[0.5em]">
      EST. 1986 // LAUNCHPAD AERO DIVISION // COORDINATES: 25.7617° N, 80.1918° W
    </div>
    
    {/* Decorative aviation markers */}
    <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 pointer-events-none"></div>
    <div className="absolute top-0 right-1/4 w-px h-full bg-white/5 pointer-events-none"></div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/marketplace" element={<Marketplace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
