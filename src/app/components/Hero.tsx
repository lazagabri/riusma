import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 flex flex-col items-center text-center max-w-7xl mx-auto">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-purple-900/20 via-black to-black -z-10 blur-3xl rounded-full opacity-50 pointer-events-none" />

      {/* Tag */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-pink-900/30 border border-pink-500/30"
      >
        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
        <span className="text-[10px] font-bold tracking-widest text-pink-300 uppercase">DISPONIBLE POUR FREELANCE</span>
      </motion.div>

      {/* Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 max-w-4xl"
      >
        Donnez vie à vos idées avec <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Impact & Émotion.
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
      >
        Vidéaste et monteur passionné. Je transforme des séquences brutes en récits captivants grâce à un montage rythmé et un sound design immersif.
      </motion.p>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-20"
      >
        <a href="#projets" className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full transition-colors flex items-center gap-2">
          Voir mes réalisations
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a href="#contact" className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-colors">
          Me Contacter
        </a>
      </motion.div>

      {/* Showreel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 group cursor-pointer"
      >
        {/* Video Background */}
        <video
          className="w-full h-full object-cover"
          controls
          preload="metadata"
        >
          <source src="/VIDEO.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>

        {/* Overlay Text */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
          <div className="text-left">
          </div>
          <div className="font-mono text-white text-sm bg-black/50 px-3 py-1 rounded">
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
