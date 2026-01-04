
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { PoliceStarIcon } from '../constants';
import Badge from './Badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block bg-vice-card border border-vice-purple/20 rounded-xl overflow-hidden hover:border-vice-cyan/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-neon-cyan/20"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.logo} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vice-dark to-transparent opacity-60"></div>
        <div className="absolute top-4 right-4 flex gap-2">
          {product.isPremium && <Badge variant="pink">Premium</Badge>}
          <Badge variant="cyan">{product.category}</Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white group-hover:text-vice-cyan transition-colors">{product.name}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
          {product.tagline}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-vice-purple/10">
          <div className="flex items-center gap-2">
            <PoliceStarIcon className="w-4 h-4 text-vice-orange" filled />
            <span className="text-xs font-bold text-vice-orange uppercase">{product.stats.upvotes} Stars</span>
          </div>
          <div className="text-[10px] font-bold text-vice-pink uppercase tracking-widest bg-vice-pink/10 px-2 py-1 rounded">
            {product.stats.daysLeft} Days Remaining
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
