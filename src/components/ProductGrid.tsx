import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 block mb-4">Current Drop</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
              Archive<br />Selections
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-sm font-medium opacity-60 mb-6 max-w-xs md:ml-auto">
              Each piece is a chapter of our history. Curated from the Sid Lee archive to immortalize our creative obsessions.
            </p>
            <div className="flex space-x-4 md:justify-end">
              {['All', 'Archive', 'Originals', 'Streetwear'].map((filter) => (
                <button 
                  key={filter}
                  className="text-[10px] font-black uppercase tracking-widest hover:italic transition-all border-b border-transparent hover:border-black"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-24 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4">View All Products</span>
            <div className="w-12 h-[1px] bg-black group-hover:w-24 transition-all duration-500"></div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
