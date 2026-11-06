import React, { useState, useEffect, useRef } from 'react';
import { portfolioProjects, categories, personalInfo } from '../data/portfolioData';
import { ArrowLeft, Search, Eye, Aperture, Filter, MessageCircle, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './Navbar';
import gsap from 'gsap';

export default function AllWorksPage({ onBackHome, onSelectProject, playShutterSound }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const gridRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filter projects
  const filteredProjects = portfolioProjects.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catId) => {
    if (catId === 'all') return portfolioProjects.length;
    return portfolioProjects.filter(p => p.category === catId).length;
  };

  const handleCardClick = (project) => {
    if (playShutterSound) playShutterSound();
    onSelectProject(project);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F5F0] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-10">
          <button
            onClick={() => {
              if (playShutterSound) playShutterSound();
              onBackHome();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-mono uppercase tracking-wider transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-[#E8C98A]">
            <span>Archive View</span>
            <span className="text-white/40">/</span>
            <span>{filteredProjects.length} Works Showing</span>
          </div>
        </div>

        {/* Page Title & Mission */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
            <Sparkles size={13} />
            <span>Comprehensive Client Gallery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            The Complete Works Archive
          </h1>
          <p className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed">
            Every shoot represents a tailor-made creative collaboration. Explore high-speed athletics, artisan Indian sweets, e-commerce cosmetic packshots, and streetwear lookbooks.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 bg-[#121212] p-4 rounded-2xl border border-white/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
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
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#E8C98A] text-black font-semibold shadow-md shadow-[#E8C98A]/20'
                      : 'bg-[#181818] text-neutral-400 hover:text-white border border-white/5'
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

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Search projects or clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181818] border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-[#E8C98A]"
            />
          </div>

        </div>

        {/* Grid of All Filtered Works */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-[#111111] rounded-2xl border border-white/10">
            <p className="text-neutral-400 font-serif text-lg">No projects match your filter or search.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-mono text-[#E8C98A] uppercase tracking-wider underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleCardClick(project)}
                className="group relative rounded-2xl overflow-hidden bg-[#111111] border border-white/10 hover:border-[#E8C98A]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#E8C98A]/10 flex flex-col"
              >
                {/* Media Container */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-black/60">
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
                      <span>Inspect Shot</span>
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
        )}

        {/* Bottom Booking Banner */}
        <div className="mt-20 rounded-2xl p-8 bg-[#121212] border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-white">
            Ready to Create Visuals That Move Your Brand Forward?
          </h3>
          <p className="text-xs font-sans text-neutral-400 max-w-md mx-auto">
            Book an on-location shoot day or send your products directly to our studio.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I%20explored%20your%20entire%20portfolio%20archive%20and%20want%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <WhatsAppIcon size={16} />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
