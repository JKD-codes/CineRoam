import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Play, ChevronRight, Aperture } from 'lucide-react';
import { WhatsAppIcon } from './CustomIcons';
import gsap from 'gsap';

export default function Hero({ onOpenShowreel, onExploreWorks, playShutterSound }) {
  // Artisanal Royal Laddus is DEFAULT (#1)
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  
  const heroRef = useRef(null);
  const cardContainerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);

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

  // GSAP Top-Tier Cinematic Entrance Timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Badge entrance
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 }
        );
      }

      // Word-by-word headline reveal
      const words = headlineRef.current?.querySelectorAll('.hero-word');
      if (words && words.length > 0) {
        tl.fromTo(
          words,
          { opacity: 0, y: 45, rotateX: -35, transformOrigin: "0% 50% -50" },
          { 
            opacity: 1, 
            y: 0, 
            rotateX: 0, 
            duration: 1.0, 
            stagger: 0.07, 
            ease: "back.out(1.4)" 
          },
          "-=0.5"
        );
      }

      // Subtitle fade & slide
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        );
      }

      // Action buttons stagger
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
          "-=0.5"
        );
      }

      // 3D Card entrance
      if (cardContainerRef.current) {
        tl.fromTo(
          cardContainerRef.current,
          { opacity: 0, scale: 0.88, rotateY: 15, y: 40 },
          { opacity: 1, scale: 1, rotateY: 0, y: 0, duration: 1.2, ease: "power3.out" },
          "-=1.1"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 3D Parallax Tilt effect on the Card using GSAP
  const handleMouseMove = (e) => {
    if (!cardContainerRef.current) return;
    const rect = cardContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(cardContainerRef.current, {
      rotateY: x * 0.04,
      rotateX: -y * 0.04,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5
    });
  };

  const handleMouseLeave = () => {
    if (!cardContainerRef.current) return;
    gsap.to(cardContainerRef.current, {
      rotateY: 0,
      rotateX: 0,
      ease: "power2.out",
      duration: 0.7
    });
  };

  const headlineWords = [
    { text: "Light,", highlight: false },
    { text: "Texture", highlight: false },
    { text: "&", highlight: false },
    { text: "Movement", highlight: false },
    { text: "Shaped", highlight: false },
    { text: "For", highlight: false },
    { text: "Iconic", highlight: true },
    { text: "Brands.", highlight: true }
  ];

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 overflow-hidden"
    >
      {/* Background cinematic glow gradients */}
      <div className="absolute top-1/4 -left-36 w-80 h-80 bg-[#E8C98A]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-12 -right-36 w-80 h-80 bg-[#C89F50]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & High-Trust Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Minimal Director Slate (Clean, No AI sparkle, No unwanted text) */}
            <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#E8C98A]/30 text-xs font-mono text-[#E8C98A] shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#E8C98A] animate-ping"></span>
              <span className="tracking-wide">Chandan Mahato · Director of Photography</span>
            </div>

            {/* GSAP Word-by-Word Animated Headline with 3D Flip */}
            <h1 
              ref={headlineRef}
              className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold tracking-tight text-white leading-[1.14] flex flex-wrap gap-x-3 gap-y-1 perspective-[1000px]"
            >
              {headlineWords.map((word, i) => (
                <span
                  key={i}
                  className={`hero-word inline-block ${
                    word.highlight
                      ? 'italic text-gold-gradient font-normal'
                      : 'text-white'
                  }`}
                >
                  {word.text}
                </span>
              ))}
            </h1>

            <p 
              ref={subtextRef}
              className="text-base sm:text-lg text-neutral-300 font-sans max-w-2xl leading-relaxed"
            >
              We create mouthwatering food styling, luxury skincare visuals, and high-retention commercial reels that make your brand stand out on Instagram and drive real customers through your doors.
            </p>

            {/* Action Buttons with Official WhatsApp Logo Button */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
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

              {/* Exact Official WhatsApp Logo Button */}
              <a
                href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I'm%20interested%20in%20discussing%20a%20commercial%20shoot%20or%20social%20media%20management%20with%20CineRoam.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-105"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon size={20} className="shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Points */}
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

          {/* Right Column: Hero Visual Frame with 3D Tilt Parallax */}
          <div 
            ref={cardContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 will-change-transform"
          >
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
    </section>
  );
}
