import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-1">
          <a href="/" className="text-2xl font-black tracking-tighter uppercase leading-none">
            Sid<br />Store
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12 flex-1 justify-center">
          {['Collections', 'Archive', 'Culture', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex-1 flex justify-end items-center space-x-6">
          <button className="hover:scale-110 transition-transform">
            <Search size={20} strokeWidth={2.5} />
          </button>
          <button className="relative hover:scale-110 transition-transform">
            <ShoppingBag size={20} strokeWidth={2.5} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col space-y-8 mt-20">
              {['Collections', 'Archive', 'Culture', 'About'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-black uppercase tracking-tighter hover:italic transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-auto">
              <p className="text-xs font-bold uppercase tracking-widest opacity-50">Sid Lee Collective © 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
