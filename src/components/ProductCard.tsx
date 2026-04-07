import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 mb-6">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
          <button className="bg-white text-black p-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all">
            <Plus size={20} strokeWidth={3} />
          </button>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/80 drop-shadow-md">
            Add to Bag
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-1">
            {product.brand} / {product.category}
          </span>
          <h3 className="text-lg font-black uppercase tracking-tighter leading-none group-hover:italic transition-all">
            {product.name}
          </h3>
        </div>
        <span className="text-sm font-bold opacity-80">${product.price}</span>
      </div>
      
      {/* Story (Hidden until hover on some designs, or just always there) */}
      <p className="mt-4 text-xs font-medium opacity-60 leading-relaxed max-w-[85%] group-hover:opacity-100 transition-opacity">
        {product.story}
      </p>
    </motion.div>
  );
};

export default ProductCard;
