import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Play, ArrowDown, Sparkles, Film, Camera, Aperture, MessageCircle, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenShowreel, playShutterSound }) {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  const heroShowcases = [
    {
      title: "Mesaura Skincare",
      type: "Commercial Packshot",
      image: "/assets/product-mesaura.jpeg",
      lens: "90mm Macro f/8.0",
      tag: "Product & E-Commerce"
    },
    {
      title: "Artisanal Royal Laddus",
      type: "Heritage Chiaroscuro",
      image: "/assets/food-artisan-laddus.jpeg",
      lens: "50mm f/1.4 GM",
      tag: "Gourmet Food"
    },
    {
      title: "Cacao Truffle Pyramid",
      type: "Macro High-Detail",
      image: "/assets/food-chocolate-delight.jpeg",
      lens: "90mm f/4.0",
      tag: "Food & Confectionery"
    },
    {
      title: "Multi-Seed Crunch",
      type: "Texture & Action",
      image: "/assets/food-granola-chikki.jpeg",
      lens: "85mm f/3.2",
      tag: "Packaged Snack"
    }
  ];

  const currentPreview = heroShowcases[activePreviewIndex];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background cinematic glow gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#E8C98A]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#B37D28]/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute inset-0 cinematic-crosshair opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Camera Viewfinder Top Bar / HUD */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-8 text-[11px] font-mono text-[#8E8E93]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-red-400 font-semibold tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              REC
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/70">4K DCI · 24.00 FPS</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-white/70">PRORES 422 HQ</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-[#E8C98A]">S-LOG3 / REC.709 LUT</span>
            <span className="font-mono text-white/90">TC 00:14:38:09</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Brand Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181818] border border-white/10 text-xs font-mono text-[#E8C98A]">
              <Sparkles size={13} className="text-[#E8C98A]" />
              <span>CineRoam Production · Directed by Chandan Mahato</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold tracking-tight text-white leading-[1.12]">
              Light, Texture & Movement Shaped For{' '}
              <span className="italic text-gold-gradient font-normal font-serif">
                Iconic Brands.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-sans max-w-2xl leading-relaxed">
              We engineer high-fidelity cinematography, gourmet food visuals, and commercial product imagery that command instant attention, ignite sensory desire, and turn viewers into devoted customers.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  if (playShutterSound) playShutterSound();
                  onOpenShowreel();
                }}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#E8C98A] text-black font-mono text-xs uppercase tracking-wider font-semibold shadow-lg shadow-[#E8C98A]/25 hover:bg-[#F5DEB3] hover:shadow-[#E8C98A]/40 transition-all duration-300 hover:scale-105"
              >
                <div className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={12} className="text-black fill-black ml-0.5" />
                </div>
                <span>Play 2026 Showreel</span>
              </button>

              <a
                href="#portfolio"
                onClick={() => playShutterSound && playShutterSound()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 hover:border-[#E8C98A]/40 transition-all duration-300"
              >
                <span>View Portfolio</span>
                <ChevronRight size={14} className="text-[#E8C98A]" />
              </a>

              <a
                href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I%20saw%20your%20CineRoam%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-xs font-mono transition-colors"
                title="Direct WhatsApp Chat"
              >
                <MessageCircle size={15} />
                <span className="hidden sm:inline">WhatsApp Quick Chat</span>
              </a>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-[#8E8E93] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Film Stills Viewfinder */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-2xl backdrop-blur-sm group">
              
              {/* Corner Viewfinder L-Marks */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#E8C98A]/80 z-20 pointer-events-none"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#E8C98A]/80 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#E8C98A]/80 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#E8C98A]/80 z-20 pointer-events-none"></div>

              {/* Main Preview Frame */}
              <div className="relative h-[380px] sm:h-[440px] rounded-xl overflow-hidden bg-black">
                <img
                  src={currentPreview.image}
                  alt={currentPreview.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 pointer-events-none"></div>

                {/* Top overlay pills */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#E8C98A] border border-[#E8C98A]/30">
                    {currentPreview.tag}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 text-white/80 border border-white/10 flex items-center gap-1">
                    <Aperture size={11} className="text-[#E8C98A]" />
                    {currentPreview.lens}
                  </span>
                </div>

                {/* Center crosshair */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#E8C98A] rounded-full"></div>
                  </div>
                </div>

                {/* Bottom title & metadata */}
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                  <p className="text-[11px] font-mono text-[#E8C98A] tracking-wider uppercase">
                    Featured Commercial Work
                  </p>
                  <h3 className="text-xl font-serif font-bold text-white leading-tight">
                    {currentPreview.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans">
                    {currentPreview.type}
                  </p>
                </div>
              </div>

              {/* Selector Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mt-2 pt-1">
                {heroShowcases.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (playShutterSound) playShutterSound();
                      setActivePreviewIndex(idx);
                    }}
                    className={`relative rounded-lg overflow-hidden h-14 border transition-all duration-200 ${
                      activePreviewIndex === idx
                        ? 'border-[#E8C98A] ring-2 ring-[#E8C98A]/40 scale-102'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Down Scroll Anchor */}
      <a
        href="#portfolio"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-[#E8C98A] transition-colors p-2 flex flex-col items-center gap-1 text-[10px] font-mono tracking-widest uppercase"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} className="animate-bounce text-[#E8C98A]" />
      </a>
    </section>
  );
}
