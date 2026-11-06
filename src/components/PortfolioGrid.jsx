import React, { useState } from 'react';
import { portfolioProjects, categories } from '../data/portfolioData';
import { Camera, Aperture, Eye, Video, ArrowUpRight, Sparkles, Filter } from 'lucide-react';

export default function PortfolioGrid({ onSelectProject, playShutterSound }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory);

  const getCategoryCount = (catId) => {
    if (catId === 'all') return portfolioProjects.length;
    return portfolioProjects.filter(p => p.category === catId).length;
  };

  const handleCardClick = (project) => {
    if (playShutterSound) playShutterSound();
    onSelectProject(project);
  };

  return (
    <section id="portfolio" className="py-24 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider mb-2">
              <Camera size={13} />
              <span>Commercial & Cinematic Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Selected Works & Case Studies
            </h2>
          </div>
          <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-md">
            Every frame is lit with purpose, calibrated for accurate brand colors, and composed to produce measurable consumer engagement.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (playShutterSound) playShutterSound();
                  setSelectedCategory(cat.id);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#E8C98A] text-black font-semibold shadow-md shadow-[#E8C98A]/20 scale-102'
                    : 'bg-[#141414] text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-neutral-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(project)}
                className="group relative rounded-xl overflow-hidden bg-[#111111] border border-white/10 hover:border-[#E8C98A]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#E8C98A]/10 flex flex-col"
              >
                {/* Media Container */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-black/60">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#E8C98A] border border-[#E8C98A]/30">
                      {project.client}
                    </span>
                    {project.videoUrl && (
                      <span className="p-1.5 rounded-full bg-red-600/80 text-white backdrop-blur-md">
                        <Video size={13} />
                      </span>
                    )}
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-[#E8C98A]/50 text-white text-xs font-mono flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye size={14} className="text-[#E8C98A]" />
                      <span>Inspect Shot & EXIF</span>
                    </div>
                  </div>

                  {/* Bottom Technical Tag */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono text-neutral-300">
                    <span className="flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                      <Aperture size={12} className="text-[#E8C98A]" />
                      {project.lens}
                    </span>
                    <span className="bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 text-[#E8C98A]">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Information Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1">
                      <span>{project.role}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#E8C98A] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-sans mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Deliverable pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {project.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
