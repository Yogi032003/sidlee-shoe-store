import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section id="culture" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 block mb-8">Culture / Narrative</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Beyond<br />The Box
            </h2>
            <div className="space-y-6 text-lg font-medium opacity-80 max-w-lg">
              <p>
                Sid Lee isn't just an agency; it's a creative playground. The Sid Store is where our extracurricular passions find a physical home.
              </p>
              <p>
                From limited edition footwear to artifacts salvaged from our global offices, every item is a piece of the Sid Lee soul.
              </p>
            </div>
            <button className="mt-12 text-[10px] font-black uppercase tracking-widest border-b-2 border-white pb-2 hover:opacity-50 transition-all">
              Read Our Manifesto
            </button>
          </motion.div>

          {/* Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-square bg-white/5 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=2070&auto=format&fit=crop" 
                alt="Studio Shot" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 bg-white text-black p-8 font-black uppercase text-xl leading-none italic shadow-2xl hidden md:block"
            >
              Creative<br />Obsession
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
