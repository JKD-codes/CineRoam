import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Play, Sparkles, ChevronRight, Eye, Aperture, ArrowDown } from 'lucide-react';
import { WhatsAppIcon } from './Navbar';
import gsap from 'gsap';

export default function Hero({ onOpenShowreel, onExploreWorks, playShutterSound }) {
  // Artisanal Royal Laddus is DEFAULT (#1) as requested by user
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  const heroShowcases = [
    {
      title: "Artisanal Royal Laddus",
      type: "Heritage Chiaroscuro Food Styling",
      image: "/assets/food-artisan-laddus.jpeg",
      lens: "50mm f/1.4",
      tag: "Gourmet Food"
    },
    {
      title: "Cacao Truffle Pyramid",
      type: "Artisanal Confectionery Macro",
      image: "/assets/food-chocolate-delight.jpeg",
      lens: "90mm Macro",
      tag: "Food & Dessert"
    },
    {
      title: "Multi-Seed Energy Crunch",
      type: "Crisp Texture & Human Interaction",
      image: "/assets/food-granola-chikki.jpeg",
      lens: "85mm f/1.4",
      tag: "Packaged Food"
    },
    {
      title: "Mesaura Skincare",
      type: "High-Key Commercial Packshot",
      image: "/assets/product-mesaura.jpeg",
      lens: "90mm Macro",
      tag: "Product & Skincare"
    }
  ];

  const currentPreview = heroShowcases[activePreviewIndex];

  useEffect(() => {
    // GSAP subtle entrance
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
      });
      gsap.from(cardRef.current, {
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden">
      
      {/* Background cinematic glow gradients */}
      <div className="absolute top-1/4 -left-36 w-80 h-80 bg-[#E8C98A]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-12 -right-36 w-80 h-80 bg-[#C89F50]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Tagline Pill (Separated, clean, never merges with logo) */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-8 text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-2 text-[#E8C98A]">
            <Sparkles size={13} />
            <span>CineRoam Studio · Commercial Cinematography & Content</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-neutral-400">
            <span>High-Definition Visuals</span>
            <span>·</span>
            <span>Instagram Growth Strategy</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & High-Trust Narrative */}
          <div ref={titleRef} className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#E8C98A]/30 text-xs font-mono text-[#E8C98A]">
              <span className="w-2 h-2 rounded-full bg-[#E8C98A] animate-pulse"></span>
              <span>Visual Storyteller · Chandan Mahato</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold tracking-tight text-white leading-[1.12]">
              Light, Texture & Movement Shaped For{' '}
              <span className="italic text-gold-gradient font-normal font-serif">
                Iconic Brands.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-sans max-w-2xl leading-relaxed">
              We create mouthwatering food styling, luxury skincare visuals, and high-retention commercial reels that make your brand stand out on Instagram and drive real customers through your doors.
            </p>

            {/* Action Buttons with Real WhatsApp Logo Button */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  if (playShutterSound) playShutterSound();
                  onOpenShowreel();
                }}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#E8C98A] text-black font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-[#E8C98A]/25 hover:bg-[#F5DEB3] hover:shadow-[#E8C98A]/40 transition-all duration-300 hover:scale-105"
              >
                <div className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={11} className="text-black fill-black ml-0.5" />
                </div>
                <span>Play Showreel</span>
              </button>

              <button
                onClick={() => {
                  if (playShutterSound) playShutterSound();
                  onExploreWorks();
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 hover:border-[#E8C98A]/50 transition-all duration-300"
              >
                <span>View All Works (55+)</span>
                <ChevronRight size={14} className="text-[#E8C98A]" />
              </button>

              {/* Authentic WhatsApp Logo Action Button */}
              <a
                href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I'm%20interested%20in%20discussing%20a%20commercial%20shoot%20or%20social%20media%20management%20with%20CineRoam.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:scale-105"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon size={18} className="text-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Points (Replacing unverified stats) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C98A]"></span>
                <span>End-to-End Shoot to Edit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C98A]"></span>
                <span>Monthly Growth Retainers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C98A]"></span>
                <span>Commercial Retouching</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame (Artisanal Royal Laddus FIRST) */}
          <div ref={cardRef} className="lg:col-span-5">
            <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-2xl backdrop-blur-md group">
              
              {/* Corner Framing L-Marks */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#E8C98A] z-20 pointer-events-none"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#E8C98A] z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#E8C98A] z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#E8C98A] z-20 pointer-events-none"></div>

              {/* Main Showcase Image Frame */}
              <div className="relative h-[380px] sm:h-[440px] rounded-xl overflow-hidden bg-black">
                <img
                  src={currentPreview.image}
                  alt={currentPreview.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 pointer-events-none"></div>

                {/* Top overlay pills */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#E8C98A] border border-[#E8C98A]/40">
                    {currentPreview.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/75 text-white/90 border border-white/10 flex items-center gap-1.5 backdrop-blur-md">
                    <Aperture size={11} className="text-[#E8C98A]" />
                    {currentPreview.lens}
                  </span>
                </div>

                {/* Bottom title & metadata */}
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                  <p className="text-[11px] font-mono text-[#E8C98A] tracking-wider uppercase">
                    Signature Commercial Work
                  </p>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                    {currentPreview.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans">
                    {currentPreview.type}
                  </p>
                </div>
              </div>

              {/* Selector Thumbnails (Artisanal Laddus is FIRST) */}
              <div className="grid grid-cols-4 gap-2 mt-2 pt-1">
                {heroShowcases.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (playShutterSound) playShutterSound();
                      setActivePreviewIndex(idx);
                    }}
                    className={`relative rounded-lg overflow-hidden h-14 sm:h-16 border transition-all duration-200 ${
                      activePreviewIndex === idx
                        ? 'border-[#E8C98A] ring-2 ring-[#E8C98A]/50 scale-102'
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
        href="#featured"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-[#E8C98A] transition-colors p-2 flex flex-col items-center gap-1 text-[10px] font-mono tracking-widest uppercase"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} className="animate-bounce text-[#E8C98A]" />
      </a>
    </section>
  );
}
