import React from 'react';
import { portfolioProjects } from '../data/portfolioData';
import { Camera, Eye, ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedGrid({ onSelectProject, onExploreAll, playShutterSound }) {
  // Select top 6 flagship works for the Home Page
  const featuredWorks = portfolioProjects.filter(p => p.featured).slice(0, 6);

  const handleCardClick = (project) => {
    if (playShutterSound) playShutterSound();
    onSelectProject(project);
  };

  return (
    <section id="featured" className="py-24 relative bg-[#070707] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider mb-2">
              <Camera size={13} />
              <span>Curated Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Selected Commercial Works
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-neutral-400 font-sans text-sm max-w-sm">
              A curated snapshot of recent culinary styling, cosmetic packshots, and visual campaigns.
            </p>
            <button
              onClick={() => {
                if (playShutterSound) playShutterSound();
                onExploreAll();
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#E8C98A]/10 hover:bg-[#E8C98A] text-[#E8C98A] hover:text-black border border-[#E8C98A]/40 text-xs font-mono uppercase tracking-wider transition-all duration-200 shrink-0"
            >
              <span>View All 55+ Works</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* 6 Featured Works Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredWorks.map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className="group relative rounded-2xl overflow-hidden bg-[#111111] border border-white/10 hover:border-[#E8C98A]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#E8C98A]/10 flex flex-col"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black/60">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#E8C98A] border border-[#E8C98A]/30">
                    {project.client}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-white/80 border border-white/10">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Inspect Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-[#E8C98A]/50 text-white text-xs font-mono flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye size={14} className="text-[#E8C98A]" />
                    <span>View Shot Details</span>
                  </div>
                </div>

                {/* Bottom Metadata */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono text-neutral-300">
                  <span className="bg-black/75 px-2.5 py-0.5 rounded backdrop-blur-sm border border-white/10">
                    {project.lens}
                  </span>
                  <span className="bg-black/75 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 text-[#E8C98A]">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Information Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#E8C98A] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

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
          ))}
        </div>

        {/* Editorial "View Full Archive" Banner */}
        <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#141414] via-[#1A1A1A] to-[#141414] border border-[#E8C98A]/25 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Extensive Commercial Library</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Explore The Complete 55+ Project Archive
            </h3>
            <p className="text-sm text-neutral-300 font-sans leading-relaxed">
              Browse through all our high-speed sports captures, streetwear fashion lookbooks, culinary sweets, and commercial cosmetic packshots.
            </p>
          </div>

          <button
            onClick={() => {
              if (playShutterSound) playShutterSound();
              onExploreAll();
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E8C98A] text-black font-mono text-xs uppercase tracking-wider font-bold shadow-xl shadow-[#E8C98A]/20 hover:bg-[#F5DEB3] hover:scale-105 transition-all duration-300 shrink-0"
          >
            <span>Open All Works Page</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
