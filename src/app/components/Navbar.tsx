import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-sm bg-black/20">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Laza Marius Logo" className="w-8 h-8 rounded-md object-contain" />
        <span className="text-white font-bold text-lg tracking-wide">Laza Marius</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#projets" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Projets</a>
        <a href="#expertise" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Expertise</a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contact</a>
      </div>
      
      <a href="#contact" className="px-5 py-2 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
        Devis Gratuit
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
    </nav>
  );
};

export default Navbar;
