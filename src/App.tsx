import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import StorySection from './components/StorySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      {/* Dynamic Header */}
      <Header />

      <main>
        {/* Full-screen Hero */}
        <Hero />

        {/* Featured Products Selection */}
        <ProductGrid />

        {/* Culture/Story Section */}
        <StorySection />

        {/* Collection Teaser (Extra Story Section) */}
        <section className="py-24 bg-white container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.85] mb-8">
              Immortalizing<br />Creativity.
            </h2>
            <p className="text-lg font-medium opacity-60 mb-12 max-w-sm">
              We believe in the power of physical artifacts to tell stories that digital experiences can't. Every shoe in this collection is a piece of our DNA.
            </p>
            <button className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-10 py-5 hover:italic transition-all">
              Discover The Full Archive
            </button>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2070&auto=format&fit=crop" 
              alt="Editorial Shot" 
              className="w-full h-[600px] object-cover"
            />
          </div>
        </section>
      </main>

      {/* Typographic Footer */}
      <Footer />
    </div>
  );
}

export default App;
