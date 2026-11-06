import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Sun, Layers, ArrowUpRight } from 'lucide-react';
import { portfolioProjects, personalInfo } from '../data/portfolioData';
import { InstagramIcon, WhatsAppIcon } from './CustomIcons';

export default function LightboxModal({ project, onClose, onSelectProject, playShutterSound }) {
  if (!project) return null;

  const currentIndex = portfolioProjects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? portfolioProjects[currentIndex - 1] : portfolioProjects[portfolioProjects.length - 1];
  const nextProject = currentIndex < portfolioProjects.length - 1 ? portfolioProjects[currentIndex + 1] : portfolioProjects[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        if (playShutterSound) playShutterSound();
        onSelectProject(prevProject);
      }
      if (e.key === 'ArrowRight') {
        if (playShutterSound) playShutterSound();
        onSelectProject(nextProject);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, prevProject, nextProject, onClose, onSelectProject]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200">
      
      {/* Top Close & Navigation bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 text-white">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg font-bold text-[#E8C98A]">
            CineRoam <span className="text-white/60 font-sans text-xs">Exhibition</span>
          </span>
          <span className="text-white/40">/</span>
          <span className="text-xs font-mono text-neutral-400">
            {currentIndex + 1} of {portfolioProjects.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (playShutterSound) playShutterSound();
              onSelectProject(prevProject);
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-[#E8C98A] hover:text-black transition-colors"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => {
              if (playShutterSound) playShutterSound();
              onSelectProject(nextProject);
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-[#E8C98A] hover:text-black transition-colors"
            title="Next (Right Arrow)"
          >
            <ChevronRight size={18} />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-red-500/80 text-white transition-colors ml-2"
            title="Close (Esc)"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Content Modal Container */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#0E0E0E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row mt-10">
        
        {/* Left Side: Photo or Exact Instagram Reel Video */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[360px] lg:min-h-[560px] p-4 group">
          {project.embedUrl ? (
            <div className="w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#111111]">
              <iframe
                src={project.embedUrl}
                title={project.title}
                className="w-full h-full border-0 rounded-2xl"
                allowTransparency="true"
                allow="encrypted-media"
                scrolling="no"
                frameBorder="0"
              />
            </div>
          ) : (
            <img
              src={project.coverImage}
              alt={project.title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
          )}

          {/* Viewfinder crosshairs */}
          <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-white/30 pointer-events-none"></div>
          <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-white/30 pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-white/30 pointer-events-none"></div>
          <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-white/30 pointer-events-none"></div>
        </div>

        {/* Right Side: Details & Actions */}
        <div className="w-full lg:w-[420px] bg-[#121212] border-t lg:border-t-0 lg:border-l border-white/10 p-6 sm:p-7 overflow-y-auto space-y-6">
          
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#E8C98A] mb-1">
              <span>{project.client}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-white leading-tight">
              {project.title}
            </h2>
            <p className="text-xs font-mono text-neutral-400 mt-1">
              {project.role}
            </p>
          </div>

          <p className="text-xs text-neutral-300 font-sans leading-relaxed">
            {project.description}
          </p>

          {/* If Instagram link exists, show Instagram Button */}
          {project.instagramUrl && (
            <a
              href={project.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:opacity-95 shadow-lg shadow-pink-500/20 transition-all"
            >
              <InstagramIcon size={16} />
              <span>View Original Reel on Instagram</span>
              <ArrowUpRight size={14} />
            </a>
          )}

          {/* Technical Camera & Lighting Details */}
          <div className="space-y-3 bg-[#1A1A1A] p-4 rounded-xl border border-white/5 font-mono text-xs">
            <div className="text-[11px] text-[#E8C98A] uppercase tracking-wider font-semibold border-b border-white/10 pb-2 flex items-center gap-2">
              <Camera size={13} />
              <span>Shot & Gear Specifications</span>
            </div>

            <div className="space-y-2 text-neutral-300">
              <div className="flex justify-between">
                <span className="text-neutral-500">Camera:</span>
                <span className="text-white font-medium">{project.camera}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Optics:</span>
                <span className="text-white font-medium">{project.lens}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Specs:</span>
                <span className="text-[#E8C98A] font-medium">{project.specs}</span>
              </div>
            </div>

            {project.lighting && (
              <div className="pt-2 border-t border-white/5 space-y-1">
                <span className="text-neutral-500 text-[10px] uppercase flex items-center gap-1">
                  <Sun size={11} className="text-amber-400" />
                  Lighting Setup:
                </span>
                <p className="text-[11px] text-neutral-300 font-sans">
                  {project.lighting}
                </p>
              </div>
            )}
          </div>

          {/* Deliverables */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers size={13} />
              <span>Deliverables for Brand</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-white/5 text-xs font-mono text-neutral-200 border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="pt-3 border-t border-white/10">
            <a
              href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I'm%20interested%20in%20a%20commercial%20shoot%20similar%20to%20your%20'${encodeURIComponent(project.title)}'%20project.`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E8C98A] hover:bg-[#F5DEB3] transition-all shadow-lg shadow-[#E8C98A]/20"
            >
              <WhatsAppIcon size={16} />
              <span>Book Shoot Like This</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
