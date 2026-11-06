import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Camera, Film, Heart } from 'lucide-react';

export default function Footer() {
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
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E8C98A]/50">
                <img
                  src="/assets/logo-cineroam.jpeg"
                  alt="CineRoam Production Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-white">
                  CineRoam <span className="text-[#E8C98A] text-xs font-mono uppercase tracking-widest">Production</span>
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  Directed by Chandan Mahato
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Elevating commercial food, cosmetic, and brand narratives through precision 4K cinema capture, artistic chiaroscuro lighting, and DaVinci Resolve color science.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-2">
              <span className="text-white uppercase tracking-wider block text-[11px] font-semibold">
                Explore
              </span>
              <ul className="space-y-1.5">
                <li><a href="#portfolio" className="hover:text-[#E8C98A] transition-colors">Portfolio</a></li>
                <li><a href="#services" className="hover:text-[#E8C98A] transition-colors">Services</a></li>
                <li><a href="#color-grade" className="hover:text-[#E8C98A] transition-colors">Color Science</a></li>
                <li><a href="#gear" className="hover:text-[#E8C98A] transition-colors">Gear Locker</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-white uppercase tracking-wider block text-[11px] font-semibold">
                Connect
              </span>
              <ul className="space-y-1.5">
                <li><a href="#estimator" className="hover:text-[#E8C98A] transition-colors">Project Estimator</a></li>
                <li><a href="#about" className="hover:text-[#E8C98A] transition-colors">About Chandan</a></li>
                <li><a href="#contact" className="hover:text-[#E8C98A] transition-colors">Book Shoot</a></li>
                <li><a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          {/* Local Studio Clock */}
          <div className="md:col-span-3 space-y-3 bg-[#111111] p-4 rounded-xl border border-white/5">
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              Studio Local Time (IST)
            </div>
            <div className="text-xl font-mono text-[#E8C98A] font-bold">
              {currentTime || '09:30:00 PM'}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for inquiries</span>
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
