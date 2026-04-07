import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop" 
          alt="Hero Shoe" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4 block">
            Collective Artifacts / Issue No. 001
          </span>
          <h1 className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter italic mb-8">
            Collect<br />The Culture
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-lg font-medium opacity-80 mb-12 text-balance">
            A cross between archive storytelling and e-commerce. Immortalizing Sid Lee's creative history through physical artifacts.
          </p>
          <button className="bg-white text-black px-10 py-5 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
            Shop The Drop
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center"
      >
        <span className="text-[8px] font-black uppercase tracking-widest mb-2">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
