
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INITIAL_PRODUCTS, PoliceStarIcon, PlaneIcon } from '../constants';
import { Product, Comment } from '../types';
import Badge from '../components/Badge';
import { GoogleGenAI } from "@google/genai";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [upvoted, setUpvoted] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [aiReview, setAiReview] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const found = INITIAL_PRODUCTS.find(p => p.id === id);
    if (found) setProduct(found);
    window.scrollTo(0, 0);
  }, [id]);

  const handleAiPitch = async () => {
    if (!product) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act like a senior aviation analyst and venture capitalist. Give a sharp, professional, yet inspiring review for a startup called "${product.name}". The startup description is: "${product.description}". Keep it under 100 words. Use metaphors related to flight, navigation, and clear skies.`,
      });
      setAiReview(response.text || 'Communication lines are down. Please check back later.');
    } catch (error) {
      console.error(error);
      setAiReview('Radar interference detected. Unable to generate report.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!product) return <div className="p-20 text-center uppercase tracking-widest font-black opacity-30">Scrambling signal...</div>;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[450px] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-vice-dark">
          <div className="absolute inset-0 grid-pattern"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-vice-dark via-vice-dark/60 to-transparent"></div>
          <img 
            src={product.logo} 
            alt="Background" 
            className="w-full h-full object-cover opacity-10 blur-2xl scale-125"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto w-full px-6 pb-16 flex flex-col md:flex-row items-end gap-10">
          <div className="relative group">
            <img 
              src={product.logo} 
              alt={product.name} 
              className="w-40 h-40 md:w-56 md:h-56 rounded-lg border border-vice-cyan/30 shadow-2xl object-cover bg-vice-card"
            />
            <div className="absolute -top-3 -left-3 bg-vice-cyan text-vice-dark p-2 rounded shadow-lg">
              <PlaneIcon className="w-5 h-5" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="cyan">{product.category}</Badge>
              {product.isPremium && <Badge variant="orange">Strategic Asset</Badge>}
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-3 text-white">
              {product.name}
            </h1>
            <p className="text-xl text-vice-cyan font-bold tracking-wide">LEVEL: {product.tagline}</p>
          </div>
          
          <div className="flex flex-col items-center gap-6 bg-vice-card/50 backdrop-blur-xl p-8 rounded-lg border border-white/5">
            <div className="text-center">
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black mb-1">Time to Entry</p>
              <p className="text-5xl font-black text-white">{product.stats.daysLeft}d</p>
            </div>
            <button 
              onClick={() => setUpvoted(!upvoted)}
              className={`flex flex-col items-center gap-2 group transition-all transform active:scale-90
                ${upvoted ? 'text-vice-cyan' : 'text-gray-600 hover:text-vice-cyan'}`}
            >
              <PoliceStarIcon className="w-12 h-12" filled={upvoted} />
              <span className="text-[10px] font-black uppercase tracking-widest">{product.stats.upvotes + (upvoted ? 1 : 0)} Points</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Column: Description */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.5em] mb-8 text-gray-500 flex items-center gap-4">
              <span className="w-12 h-px bg-vice-cyan/30"></span> MISSION BRIEFING
            </h2>
            <div className="text-gray-400 leading-relaxed space-y-6 text-xl bg-vice-card/40 p-10 rounded border border-white/5 font-medium">
              {product.description}
            </div>
          </section>

          {/* AI Feature */}
          <section className="bg-vice-purple/20 border border-vice-cyan/10 rounded-lg p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
               <PlaneIcon className="w-48 h-48" />
            </div>
            <h3 className="text-xs font-black text-vice-cyan uppercase mb-6 tracking-[0.3em]">FLIGHT ANALYST REPORT</h3>
            {aiReview ? (
              <p className="text-white text-lg leading-relaxed relative z-10 font-medium italic border-l-2 border-vice-cyan pl-6">"{aiReview}"</p>
            ) : (
              <button 
                onClick={handleAiPitch}
                disabled={isGenerating}
                className="bg-vice-cyan text-vice-dark px-8 py-4 rounded text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all disabled:opacity-50"
              >
                {isGenerating ? 'ANALYZING TELEMETRY...' : 'GENERATE PERFORMANCE REPORT'}
              </button>
            )}
          </section>

          <section>
             <h2 className="text-sm font-black uppercase tracking-[0.5em] mb-8 text-gray-500 flex items-center gap-4">
              <span className="w-12 h-px bg-vice-cyan/30"></span> COMM CHANNEL
            </h2>
            <div className="space-y-6">
              <div className="bg-vice-card p-8 rounded border border-white/5">
                <textarea 
                  className="w-full bg-vice-dark border border-white/10 rounded p-4 text-sm focus:outline-none focus:border-vice-cyan transition-colors text-white"
                  placeholder="Enter transmission content..."
                  rows={4}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                ></textarea>
                <div className="flex justify-end mt-4">
                  <button className="bg-vice-dark border border-vice-cyan text-vice-cyan px-8 py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-vice-cyan hover:text-vice-dark transition-all">
                    SEND TRANSMISSION
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-12">
          <div className="bg-vice-card p-8 rounded border border-white/5">
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">CHIEF ENGINEER</h3>
            <div className="flex items-center gap-5 mb-8">
              <img src={product.founder.avatar} className="w-16 h-16 rounded border border-vice-cyan/20" alt={product.founder.name} />
              <div>
                <p className="font-black text-lg text-white">{product.founder.name}</p>
                <p className="text-xs text-vice-cyan font-bold tracking-widest">{product.founder.social}</p>
              </div>
            </div>
            <a 
              href={product.website} 
              target="_blank" 
              className="block w-full text-center bg-white text-vice-dark font-black py-4 rounded uppercase text-[10px] tracking-[0.2em] hover:bg-vice-cyan transition-all mb-4"
            >
              ACCESS DASHBOARD
            </a>
          </div>

          <div className="bg-gradient-to-br from-vice-cyan/10 to-transparent p-8 rounded border border-vice-cyan/10">
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">TELEMETRY DATA</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-vice-dark/50 p-4 rounded">
                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Total Impressions</p>
                <p className="text-3xl font-black text-white">{product.stats.views.toLocaleString()}</p>
              </div>
              <div className="bg-vice-dark/50 p-4 rounded">
                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Clearance Level</p>
                <p className="text-3xl font-black text-vice-cyan">SIG-9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
