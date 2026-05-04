import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    category: 'COMMERCIAL',
    year: '2025',
    title: 'Neon City Walk',
    image: '/laza.jpg',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: 2,
    category: 'MUSIC VIDEO',
    year: '2024',
    title: 'Echoes in Studio',
    image: '/Mr.jpg',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 3,
    category: 'DOCUMENTARY',
    year: '2024',
    title: 'Wild Madagascar',
    image: '/Portable.jpg',
    color: 'from-orange-500/20 to-red-500/20'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('Tout');
  const filters = ['Tout', 'Commercial', 'Music'];
  const categoryMap: Record<string, string | null> = {
    Tout: null,
    Commercial: 'COMMERCIAL',
    Music: 'MUSIC VIDEO',
  };

  const filteredProjects = filter === 'Tout'
    ? projects
    : projects.filter((project) => project.category === categoryMap[filter]);

  return (
    <section id="projets" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sélection de Projets</h2>
          <p className="text-gray-400 max-w-xl">
            Une approche moderne du montage vidéo, alliant technique et créativité.
          </p>
        </div>
        
        <div className="flex gap-2 p-1 bg-white/5 rounded-full border border-white/10 self-start md:self-end">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                filter === item 
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-900/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-white/10 bg-[#111] p-10 text-center text-gray-400">
            Aucun projet ne correspond à ce filtre.
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/5 hover:border-white/10 transition-colors"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-100 transition-opacity z-10`} />
              <ImageWithFallback 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
