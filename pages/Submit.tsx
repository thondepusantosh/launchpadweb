
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Submit: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="w-32 h-32 bg-vice-cyan rounded-full flex items-center justify-center shadow-neon-cyan animate-bounce mb-8">
          <svg className="w-16 h-16 text-vice-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold uppercase tracking-tighter mb-4">Transmission Successful</h1>
        <p className="text-gray-400 max-w-md mb-8">
          Your startup has been uploaded to the mainframe. The 30-day exposure cycle begins now. 
          Welcome to the neon lights.
        </p>
        <Link to="/" className="bg-vice-pink text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest shadow-neon-pink transition-transform hover:scale-105">
          View Mainframe
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold uppercase tracking-tighter mb-4">Go <span className="text-vice-pink">Live</span></h1>
        <p className="text-gray-400">Lock in your 30-day exposure campaign. Give the city what it wants.</p>
      </header>

      <form onSubmit={handleSubmit} className="bg-vice-card p-8 rounded-3xl border border-vice-purple/20 space-y-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-bold text-vice-cyan uppercase tracking-widest">Product Name</label>
            <input 
              required
              className="w-full bg-vice-dark border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-vice-cyan transition-all text-white" 
              placeholder="e.g. Skyline CRM"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-vice-cyan uppercase tracking-widest">Category</label>
            <select className="w-full bg-vice-dark border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-vice-cyan transition-all text-white font-bold uppercase appearance-none">
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-vice-cyan uppercase tracking-widest">One-Liner Hook</label>
          <input 
            required
            className="w-full bg-vice-dark border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-vice-cyan transition-all text-white" 
            placeholder="A punchy tagline that sells the dream..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-vice-cyan uppercase tracking-widest">Full Transmission (Description)</label>
          <textarea 
            required
            className="w-full bg-vice-dark border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-vice-cyan transition-all text-white" 
            rows={5}
            placeholder="Go deep. Features, tech stack, and why the city needs this tool."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-bold text-vice-cyan uppercase tracking-widest">Website URL</label>
            <input 
              required
              className="w-full bg-vice-dark border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-vice-cyan transition-all text-white" 
              placeholder="https://..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-vice-cyan uppercase tracking-widest">Logo (URL for now)</label>
            <input 
              required
              className="w-full bg-vice-dark border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-vice-cyan transition-all text-white" 
              placeholder="https://picsum.photos/..."
            />
          </div>
        </div>

        <div className="pt-6">
          <button 
            type="submit"
            className="w-full bg-vice-pink text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-neon-pink hover:bg-vice-pink/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Launch Campaign
          </button>
          <p className="text-[10px] text-gray-500 mt-4 text-center uppercase tracking-widest italic">
            * By clicking, you agree to 30 days of maximum visibility.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Submit;
