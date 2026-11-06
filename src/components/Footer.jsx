import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './CustomIcons';

export default function Footer({ onNavigate }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-12 text-neutral-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info (Clean, properly spaced, no overlapping text) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#E8C98A]/50 shrink-0">
                <img
                  src="/assets/logo-cineroam.jpeg"
                  alt="CineRoam Production Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-serif text-xl font-bold text-white leading-tight">
                  CineRoam <span className="text-[#E8C98A] text-xs font-mono uppercase tracking-widest font-normal">Production</span>
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  Chandan Mahato · Creative Director
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Transforming restaurant menus, artisan confectioneries, and modern lifestyle brands through high-impact visual storytelling, commercial photography, and monthly growth retainers.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-pink-500/10 text-pink-400 border border-pink-500/20 transition-colors"
                title="Instagram"
              >
                <InstagramIcon size={16} />
              </a>

              <a
                href={`https://wa.me/${personalInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 transition-colors"
                title="WhatsApp"
              >
                <WhatsAppIcon size={16} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xs font-mono text-neutral-400 hover:text-[#E8C98A] transition-colors pl-2"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-2">
              <span className="text-white uppercase tracking-wider block text-[11px] font-semibold">
                Explore
              </span>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => onNavigate('home')} className="hover:text-[#E8C98A] transition-colors text-left">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('home', '#featured')} className="hover:text-[#E8C98A] transition-colors text-left">
                    Featured Work
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('work')} className="text-[#E8C98A] hover:underline font-bold text-left flex items-center gap-1">
                    <span>All Works (55+)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('home', '#services')} className="hover:text-[#E8C98A] transition-colors text-left">
                    Services
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <span className="text-white uppercase tracking-wider block text-[11px] font-semibold">
                Engage
              </span>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => onNavigate('home', '#pricing')} className="hover:text-[#E8C98A] transition-colors text-left">
                    Pricing Plans
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('home', '#about')} className="hover:text-[#E8C98A] transition-colors text-left">
                    About Chandan
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('home', '#contact')} className="hover:text-[#E8C98A] transition-colors text-left">
                    Book a Shoot
                  </button>
                </li>
                <li>
                  <a href="/Pricing.pdf" download="CineRoam_Pricing.pdf" className="text-neutral-400 hover:text-white transition-colors">
                    Download Rate Card
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Studio Clock & Status */}
          <div className="md:col-span-3 space-y-3 bg-[#111111] p-5 rounded-2xl border border-white/5">
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              Studio Time (IST)
            </div>
            <div className="text-xl font-mono text-[#E8C98A] font-bold">
              {currentTime || '12:00:00 AM'}
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 pt-1 border-t border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for shoots & retainers</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} Chandan Mahato · CineRoam Production. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-[#E8C98A] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
