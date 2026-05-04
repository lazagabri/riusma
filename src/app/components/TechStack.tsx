import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Video, Film, Music, Scissors, Laptop, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ToolColor = 'purple' | 'pink' | 'blue' | 'green';

type Tool = {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: ToolColor;
  media: string;
  type: 'video' | 'audio';
};

const TechStack = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  const tools: Tool[] = [
    { id: 'premiere', name: 'Premiere Pro', icon: Video, color: 'purple', media: '/premier pro.mp4', type: 'video' },
    { id: 'davinci', name: 'DaVinci Resolve', icon: Film, color: 'pink', media: '/Davinci resolve.mp4', type: 'video' },
    { id: 'sound', name: 'Sound Design', icon: Music, color: 'blue', media: '/sound design.m4a', type: 'audio' },
    { id: 'capcut', name: 'CapCut', icon: Scissors, color: 'green', media: '/cupcut.mp4', type: 'video' }
  ];

  const toolStyles: Record<ToolColor, { icon: string; box: string }> = {
    purple: {
      icon: 'text-purple-300 group-hover:text-white',
      box: 'bg-purple-900/30 group-hover:bg-purple-600'
    },
    pink: {
      icon: 'text-pink-300 group-hover:text-white',
      box: 'bg-pink-900/30 group-hover:bg-pink-600'
    },
    blue: {
      icon: 'text-blue-300 group-hover:text-white',
      box: 'bg-blue-900/30 group-hover:bg-blue-600'
    },
    green: {
      icon: 'text-emerald-300 group-hover:text-white',
      box: 'bg-emerald-900/30 group-hover:bg-emerald-600'
    }
  };
  return (
    <section id="expertise" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/10"
        >
          <div className="aspect-square relative">
             <ImageWithFallback
                src="/Ordinateur.jpg"
                alt="Ordinateur"
                className="w-full h-full object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
             
             {/* Netflix-style overlay mockup */}
             <div className="absolute bottom-10 left-10 right-10 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
                    <div className="h-2 w-16 bg-white/10 rounded"></div>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1">
                  <div className="bg-red-600 h-1 rounded-full w-2/3"></div>
                </div>
             </div>

             {/* Experience Badge */}
             <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl text-center">
                <span className="block text-3xl font-bold text-white">2</span>
                <span className="text-[10px] text-gray-300 uppercase tracking-wider">Années D'Exp.</span>
             </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              À Propos & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Tech Stack</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Je m'appelle Laza Marius Gabriel. Je ne me contente pas de coller des clips ensemble, je construis une narrative. Mon flux de travail est optimisé pour la rapidité sans sacrifier la qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.id}
                onClick={() => {
                  setSelectedTool(tool.id);
                  if (tool.type === 'video') {
                    setModalVideo(tool.media);
                  } else {
                    setModalVideo(null);
                  }
                }}
                className={`bg-[#111] p-5 rounded-xl border transition-colors group cursor-pointer ${
                  selectedTool === tool.id
                    ? 'border-pink-500 bg-pink-500/10'
                    : 'border-white/5 hover:border-pink-500/30'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg ${toolStyles[tool.color].box} flex items-center justify-center mb-4 transition-colors`}>
                  <tool.icon className={`w-5 h-5 ${toolStyles[tool.color].icon}`} />
                </div>
                <h3 className="text-white font-bold mb-1">{tool.name}</h3>
              </div>
            ))}
          </div>

          {selectedTool && (() => {
            const activeTool = tools.find((t) => t.id === selectedTool);
            if (!activeTool || activeTool.type !== 'audio') return null;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-[#111] rounded-xl border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-xl">{activeTool.name}</h3>
                  <button
                    onClick={() => setSelectedTool(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <audio controls className="w-full">
                  <source src={activeTool.media} type="audio/mp4" />
                  Votre navigateur ne supporte pas la lecture audio.
                </audio>
              </motion.div>
            );
          })()}
        </div>
      </div>

      {/* Video Modal */}
      {modalVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#111] rounded-2xl border border-white/10 p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-xl">Lecteur Vidéo</h3>
              <button
                onClick={() => setModalVideo(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <video controls autoPlay className="w-full rounded-lg">
              <source src={modalVideo} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechStack;
