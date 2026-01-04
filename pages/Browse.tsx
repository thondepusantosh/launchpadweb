
import React, { useState, useMemo } from 'react';
import { Product, Category } from '../types';
import { INITIAL_PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';

const Browse: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'Trending' | 'New' | 'Upvoted'>('Trending');

  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS
      .filter(p => {
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              p.tagline.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'Upvoted') return b.stats.upvotes - a.stats.upvotes;
        if (sortBy === 'New') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        return b.stats.views - a.stats.views; // Trending
      });
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <header className="mb-12 text-center md:text-left">
        <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase text-white">
          Active <span className="text-vice-cyan animate-glow">Departures</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl font-medium">
          The central hub for new tech launches. Real-time data on the latest startups 
          entering the ecosystem.
        </p>
      </header>

      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 bg-vice-card/80 p-6 rounded-xl border border-vice-cyan/10 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-1.5 rounded text-[10px] font-black uppercase transition-all tracking-widest
              ${selectedCategory === 'All' ? 'bg-vice-cyan text-vice-dark' : 'bg-vice-dark text-gray-500 border border-white/5 hover:text-white'}`}
          >
            All Sectors
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded text-[10px] font-black uppercase transition-all tracking-widest
                ${selectedCategory === cat ? 'bg-vice-cyan text-vice-dark' : 'bg-vice-dark text-gray-500 border border-white/5 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <input 
            type="text"
            placeholder="Search manifests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 bg-vice-dark border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-vice-cyan transition-colors text-white"
          />
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="w-full sm:w-auto bg-vice-dark border border-white/10 rounded px-4 py-2 text-xs focus:outline-none text-white font-black uppercase tracking-widest"
          >
            <option value="Trending">Trending</option>
            <option value="New">Recent</option>
            <option value="Upvoted">High Rated</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-24 opacity-30">
          <p className="text-2xl font-black uppercase tracking-[0.5em]">No Signal</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest">Adjust your frequency filters</p>
        </div>
      )}
    </div>
  );
};

export default Browse;
