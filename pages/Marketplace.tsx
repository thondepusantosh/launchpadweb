
import React from 'react';
import Badge from '../components/Badge';

const DEALS = [
  { id: 1, title: 'Cloud Ocean Hosting', discount: '60% OFF', category: 'SaaS', desc: 'The elite cloud for the fast-paced founder.' },
  { id: 2, title: 'Pink Diamond Analytics', discount: 'LIFETIME ACCESS', category: 'AI', desc: 'Know exactly who is watching your business.' },
  { id: 3, title: 'Electric Blue UI Kit', discount: 'FREE DOWNLOAD', category: 'Design', desc: 'A retro-futuristic component library.' },
  { id: 4, title: 'Sunstate VPN', discount: '80% OFF', category: 'Security', desc: 'Total privacy under the Miami sun.' },
];

const Marketplace: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="h-64 sunset-gradient flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white drop-shadow-lg">
          Black <span className="text-vice-cyan">Market</span>
        </h1>
        <p className="mt-4 text-white/80 font-medium tracking-widest uppercase text-xs">Premium Deals for Elite Founders</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-widest">Available Contracts</h2>
          <button className="bg-vice-dark border border-vice-pink text-vice-pink px-4 py-2 rounded font-bold uppercase text-xs hover:bg-vice-pink hover:text-white transition-all">
            Publish A Deal
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEALS.map(deal => (
            <div 
              key={deal.id}
              className="bg-vice-card border-l-4 border-vice-cyan p-8 rounded-r-2xl relative overflow-hidden group hover:border-vice-pink transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-4">
                <Badge variant="orange">{deal.discount}</Badge>
              </div>
              <div className="mb-4">
                <span className="text-[10px] text-vice-cyan font-bold uppercase tracking-widest">{deal.category}</span>
                <h3 className="text-2xl font-bold mt-1 group-hover:text-vice-cyan transition-colors">{deal.title}</h3>
              </div>
              <p className="text-gray-400 mb-6">{deal.desc}</p>
              <button className="bg-vice-dark border border-gray-700 text-white px-6 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-vice-dark transition-all">
                Redeem Deal
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-vice-dark border border-vice-purple/40 p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <svg className="w-64 h-64 text-vice-purple" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22V12M12 12C12 12 14 7 19 7M12 12C12 12 10 7 5 7M12 12C12 12 15 10 17 15M12 12C12 12 9 10 7 15" /></svg>
          </div>
          <h2 className="text-3xl font-bold uppercase mb-4">Join the Inner Circle</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Get exclusive access to higher discounts, faster exposure, and premium support.
          </p>
          <button className="bg-vice-pink text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest shadow-neon-pink hover:scale-105 transition-transform">
            Go Elite Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
