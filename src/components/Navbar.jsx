import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Camera, Film, Menu, X, ArrowUpRight, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function Navbar({ soundEnabled, setSoundEnabled, playShutterSound }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Color Suite', href: '#color-grade' },
    { name: 'Gear Locker', href: '#gear' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (playShutterSound) playShutterSound();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#070707]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#" 
          onClick={() => handleNavClick('#')}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#E8C98A]/40 group-hover:border-[#E8C98A] transition-all duration-300 shadow-md shadow-[#E8C98A]/10 group-hover:shadow-[#E8C98A]/30">
            <img 
              src="/assets/logo-cineroam.jpeg" 
              alt="CineRoam Production Logo" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wide text-white group-hover:text-[#E8C98A] transition-colors leading-tight font-semibold">
              CineRoam <span className="font-display font-light text-xs tracking-widest text-[#E8C98A] uppercase">Production</span>
            </span>
            <span className="text-[11px] font-mono text-[#8E8E93] tracking-wider uppercase">
              Chandan Mahato
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#121212]/70 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-xs lg:text-sm font-sans tracking-wide text-[#A3A3A3] hover:text-[#E8C98A] px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Sound toggle button */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              if (!soundEnabled && playShutterSound) playShutterSound();
            }}
            title={soundEnabled ? "Mute camera sounds" : "Enable camera shutter sound FX"}
            className="p-2 rounded-full border border-white/10 text-white/70 hover:text-[#E8C98A] hover:border-[#E8C98A]/40 transition-colors bg-white/5"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Availability Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available Q1/Q2</span>
          </div>

          {/* Book Shoot CTA */}
          <a
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-black bg-[#E8C98A] hover:bg-[#F5DEB3] transition-all duration-300 shadow-md shadow-[#E8C98A]/20 hover:shadow-[#E8C98A]/40 hover:scale-105"
          >
            <span>Book a Shoot</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full border border-white/10 text-white/70 hover:text-[#E8C98A] bg-white/5"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-white/10 text-white hover:text-[#E8C98A] bg-white/5 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 border-b border-white/10 backdrop-blur-xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-2 pb-3 border-b border-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono text-emerald-400">{personalInfo.availability}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-sans text-neutral-300 hover:text-[#E8C98A] p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-black bg-[#E8C98A] shadow-lg shadow-[#E8C98A]/20"
          >
            <span>Book a Production Shoot</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
