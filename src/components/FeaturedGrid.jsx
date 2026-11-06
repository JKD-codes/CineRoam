import React, { useEffect, useRef } from 'react';
import { portfolioProjects } from '../data/portfolioData';
import { Camera, Eye, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedGrid({ onSelectProject, onExploreAll, playShutterSound }) {
  // Select top 6 flagship works for the Home Page
  const featuredWorks = portfolioProjects.filter(p => p.featured).slice(0, 6);

  const sectionRef = useRef(null);
  const gridCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridCardsRef.current.length > 0) {
        gsap.fromTo(
          gridCardsRef.current,
          { opacity: 0, y: 50, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (project) => {
    if (playShutterSound) playShutterSound();
    onSelectProject(project);
  };

  return (
    <section ref={sectionRef} id="featured" className="py-24 relative bg-[#070707] border-t border-white/5">
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
              Flagship commercial visual productions highlighting texture, product luster, and dynamic pacing.
            </p>
            <button
              onClick={() => {
                if (playShutterSound) playShutterSound();
                onExploreAll();
              }}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] hover:text-[#F5DEB3] uppercase tracking-wider px-4 py-2 rounded-full border border-[#E8C98A]/30 hover:border-[#E8C98A] hover:bg-[#E8C98A]/10 transition-all shrink-0"
            >
              <span>View All 55+ Works</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* 6 Curated Flagship Grid Items with GSAP Stagger Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (gridCardsRef.current[index] = el)}
              onClick={() => handleCardClick(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#121212] border border-white/10 hover:border-[#E8C98A]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E8C98A]/10 flex flex-col justify-between"
            >
              {/* Media Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Badges on Top */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#E8C98A] border border-[#E8C98A]/30">
                    {project.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/80 text-white/80 border border-white/10 backdrop-blur-md">
                    {project.lens}
                  </span>
                </div>

                {/* Hover Reveal Action Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8C98A] text-black font-mono text-xs uppercase tracking-wider font-semibold shadow-xl">
                    <Eye size={13} />
                    <span>Inspect Details</span>
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>{project.client}</span>
                  <span className="text-[#E8C98A]">{project.year}</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#E8C98A] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-400 line-clamp-2 font-sans">
                  {project.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/5">
                  {project.deliverables?.slice(0, 2).map((deliv, idx) => (
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
              <Camera size={13} />
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
