import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Sparkles } from 'lucide-react';

// Official WhatsApp Vector Icon
export function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-1.11-.07-.26-.081-.595-.195-1.026-.381-1.821-.786-3.007-2.639-3.097-2.76-.091-.121-.744-.991-.744-1.89 0-.899.47-1.342.637-1.524.167-.181.365-.226.486-.226.121 0 .243.002.348.007.112.006.262-.042.41.314.152.366.517 1.261.562 1.353.045.091.076.197.015.318-.061.121-.091.196-.182.302-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.045.106-.122.456-.531.577-.713.122-.182.244-.152.41-.091.167.061 1.063.501 1.245.592.182.091.304.137.35.213.045.076.045.441-.099.846zm-3.392-10.416c-5.523 0-10 4.477-10 10 0 1.772.464 3.447 1.277 4.904l-1.316 4.808 4.939-1.295c1.411.768 3.023 1.206 4.733 1.206 5.523 0 10-4.477 10-10 0-5.521-4.477-9.623-10-9.623zm0 18c-1.558 0-3.041-.444-4.307-1.21l-.309-.188-2.923.766.78-2.846-.206-.328c-.843-1.336-1.29-2.883-1.29-4.469 0-4.542 3.695-8.237 8.245-8.237 4.548 0 8.245 3.695 8.245 8.237 0 4.544-3.697 8.275-8.245 8.275z"/>
    </svg>
  );
}

// Instagram Vector Icon
export function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Navbar({ 
  currentPage, 
  setCurrentPage, 
  soundEnabled, 
  setSoundEnabled, 
  playShutterSound 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, anchor = null) => {
    setMobileMenuOpen(false);
    if (playShutterSound) playShutterSound();
    
    if (currentPage !== page) {
      setCurrentPage(page);
    }
    
    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080808]/92 backdrop-blur-xl border-b border-[#E8C98A]/15 py-3 shadow-2xl shadow-black/90' 
        : 'bg-gradient-to-b from-black/80 to-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name (Properly separated, never overlapping) */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          {/* Logo Badge */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#E8C98A]/50 group-hover:border-[#E8C98A] transition-all duration-300 shadow-md shadow-[#E8C98A]/20 shrink-0">
            <img 
              src="/assets/logo-cineroam.jpeg" 
              alt="CineRoam Production Logo" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Clean Typography Container */}
          <div className="flex flex-col justify-center">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#E8C98A] transition-colors leading-none">
              CineRoam <span className="text-[#E8C98A] text-xs font-mono uppercase tracking-widest font-normal">Studio</span>
            </span>
            <span className="text-[11px] font-mono text-neutral-400 tracking-wide mt-1 leading-none">
              Chandan Mahato
            </span>
          </div>
        </button>

        {/* Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#121212]/80 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-inner">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              currentPage === 'home'
                ? 'bg-[#E8C98A] text-black font-semibold shadow-md shadow-[#E8C98A]/20'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('home', '#featured')}
            className="text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-[#E8C98A] px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-white/5"
          >
            Featured
          </button>

          <button
            onClick={() => handleNavClick('home', '#reels')}
            className="text-xs font-mono uppercase tracking-wider text-pink-400 hover:text-pink-300 px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-pink-500/10 flex items-center gap-1.5"
          >
            <InstagramIcon size={13} />
            <span>Reels</span>
          </button>

          <button
            onClick={() => handleNavClick('work')}
            className={`relative text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
              currentPage === 'work'
                ? 'bg-[#E8C98A] text-black font-semibold shadow-md shadow-[#E8C98A]/20'
                : 'text-[#E8C98A] hover:bg-[#E8C98A]/10 border border-[#E8C98A]/30'
            }`}
          >
            <span>All Works</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
              currentPage === 'work' ? 'bg-black/20 text-black' : 'bg-[#E8C98A]/20 text-[#E8C98A]'
            }`}>
              55
            </span>
          </button>

          <button
            onClick={() => handleNavClick('home', '#services')}
            className="text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-[#E8C98A] px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-white/5"
          >
            Services
          </button>

          <button
            onClick={() => handleNavClick('home', '#pricing')}
            className="text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-[#E8C98A] px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-white/5"
          >
            Pricing
          </button>

          <button
            onClick={() => handleNavClick('home', '#about')}
            className="text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-[#E8C98A] px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-white/5"
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('home', '#contact')}
            className="text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-[#E8C98A] px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-white/5"
          >
            Contact
          </button>
        </nav>

        {/* Right Actions: Sound, Instagram, WhatsApp Logo Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Sound toggle button */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              if (!soundEnabled && playShutterSound) playShutterSound();
            }}
            title={soundEnabled ? "Mute camera sounds" : "Enable camera shutter sound FX"}
            className="p-2 sm:p-2.5 rounded-full border border-white/10 text-white/70 hover:text-[#E8C98A] hover:border-[#E8C98A]/40 transition-colors bg-white/5 shrink-0"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Instagram Direct Button */}
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="p-2 sm:p-2.5 rounded-full border border-pink-500/30 text-pink-400 hover:bg-pink-500/10 transition-colors bg-white/5 shrink-0"
            title="Follow on Instagram (@cineroam_production)"
          >
            <InstagramIcon size={16} />
          </a>

          {/* Authentic WhatsApp Logo Action Button */}
          <a
            href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I%20saw%20your%20CineRoam%20portfolio%20and%20would%20like%20to%20discuss%20a%20commercial%20shoot%20or%20social%20media%20management.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-md shadow-emerald-600/30 hover:scale-105 shrink-0"
            title="Direct WhatsApp Chat"
          >
            <WhatsAppIcon size={16} className="text-white" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-white/10 text-white hover:text-[#E8C98A] bg-white/5 transition-colors shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Refined & Clean) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/98 border-b border-[#E8C98A]/20 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-3 rounded-xl text-left border transition-all ${
                currentPage === 'home'
                  ? 'border-[#E8C98A] bg-[#E8C98A]/10 text-[#E8C98A] font-semibold'
                  : 'border-white/5 bg-[#141414] text-neutral-300'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('work')}
              className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                currentPage === 'work'
                  ? 'border-[#E8C98A] bg-[#E8C98A]/10 text-[#E8C98A] font-semibold'
                  : 'border-[#E8C98A]/40 bg-[#181818] text-[#E8C98A]'
              }`}
            >
              <span>All Works</span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#E8C98A] text-black text-[10px] font-bold">55</span>
            </button>

            <button
              onClick={() => handleNavClick('home', '#featured')}
              className="p-3 rounded-xl text-left border border-white/5 bg-[#141414] text-neutral-300"
            >
              Featured Work
            </button>

            <button
              onClick={() => handleNavClick('home', '#reels')}
              className="p-3 rounded-xl text-left border border-pink-500/20 bg-pink-500/10 text-pink-400 font-semibold flex items-center justify-between"
            >
              <span>Instagram Reels</span>
              <InstagramIcon size={14} />
            </button>

            <button
              onClick={() => handleNavClick('home', '#pricing')}
              className="p-3 rounded-xl text-left border border-white/5 bg-[#141414] text-neutral-300"
            >
              Pricing Plans
            </button>

            <button
              onClick={() => handleNavClick('home', '#services')}
              className="p-3 rounded-xl text-left border border-white/5 bg-[#141414] text-neutral-300"
            >
              Services
            </button>

            <button
              onClick={() => handleNavClick('home', '#about')}
              className="p-3 rounded-xl text-left border border-white/5 bg-[#141414] text-neutral-300"
            >
              About
            </button>
          </div>

          {/* Social Links & WhatsApp */}
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I'd%20like%20to%20discuss%20a%20shoot%20with%20CineRoam.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-emerald-600 shadow-lg shadow-emerald-600/30"
            >
              <WhatsAppIcon size={16} />
              <span>Message on WhatsApp</span>
            </a>

            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-mono tracking-wider text-pink-400 bg-pink-500/10 border border-pink-500/20"
            >
              <InstagramIcon size={16} />
              <span>Follow @cineroam_production</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
