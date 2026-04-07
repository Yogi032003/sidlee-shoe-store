import React from 'react';

const Footer = () => {
  return (
    <footer className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* Newsletter / CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24 items-end">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none mb-8">
              Immortalize<br />Your Obsession.
            </h2>
            <p className="text-sm font-medium opacity-60 max-w-sm mb-12">
              Join our newsletter to receive updates on the latest drops, archive selections, and culture-driven artifacts.
            </p>
            <div className="flex space-x-4 max-w-sm">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="flex-1 border-b-2 border-black py-4 text-xs font-black uppercase tracking-widest outline-none focus:italic transition-all"
              />
              <button className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-8 py-4 hover:italic transition-all">
                Submit
              </button>
            </div>
          </div>
          
          <div className="hidden lg:grid grid-cols-3 gap-12 text-right">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest block mb-8 opacity-40">Socials</span>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:italic transition-all">Instagram</a></li>
                <li><a href="#" className="hover:italic transition-all">Vimeo</a></li>
                <li><a href="#" className="hover:italic transition-all">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest block mb-8 opacity-40">Shop</span>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:italic transition-all">Archive</a></li>
                <li><a href="#" className="hover:italic transition-all">Originals</a></li>
                <li><a href="#" className="hover:italic transition-all">Drops</a></li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest block mb-8 opacity-40">Info</span>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:italic transition-all">Shipping</a></li>
                <li><a href="#" className="hover:italic transition-all">FAQ</a></li>
                <li><a href="#" className="hover:italic transition-all">Returns</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-12 space-y-6 md:space-y-0">
          <div className="text-xl font-black uppercase tracking-tighter leading-none">
            Sid Store
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
            Sid Lee Collective © 2026. All Rights Reserved.
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest opacity-80 flex space-x-8">
            <a href="#" className="hover:opacity-50">Privacy Policy</a>
            <a href="#" className="hover:opacity-50">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
