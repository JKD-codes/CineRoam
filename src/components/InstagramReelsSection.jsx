import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Play, ArrowUpRight, Flame, Film } from 'lucide-react';
import { InstagramIcon } from './CustomIcons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InstagramReelsSection({ playShutterSound }) {
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef(null);
  const reelCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (reelCardsRef.current.length > 0) {
        gsap.fromTo(
          reelCardsRef.current,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.2,
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

  const reels = [
    {
      id: "DfR4rHLuElS",
      title: "Commercial Film & Visual Pacing",
      url: "https://www.instagram.com/reel/DfR4rHLuElS/?exln=ZzB6aGJpMnF5cmtl",
      embedUrl: "https://www.instagram.com/reel/DfR4rHLuElS/embed/",
      caption: "High-retention commercial reel with kinetic cuts, custom sound design, and color grading.",
      tag: "Featured Reel 01"
    },
    {
      id: "De6z1XUNARb",
      title: "Artisanal Showcase & Cinematic Rhythm",
      url: "https://www.instagram.com/reel/De6z1XUNARb/?mdxt=M3cyMmttdWh1NTk4",
      embedUrl: "https://www.instagram.com/reel/De6z1XUNARb/embed/",
      caption: "Sensory visual hook engineered for high watch-time and organic algorithmic reach on Instagram.",
      tag: "Featured Reel 02"
    }
  ];

  return (
    <section ref={sectionRef} id="reels" className="py-24 bg-[#080808] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider mb-2">
              <Flame size={13} className="text-amber-400" />
              <span>Live Social Media Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Featured Instagram Reels
            </h2>
          </div>

          <div className="space-y-2 max-w-md">
            <p className="text-neutral-400 font-sans text-sm">
              Watch our recent viral productions directly below, or open them on Instagram to see audience engagement and client reactions.
            </p>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-pink-400 hover:text-pink-300 font-semibold"
            >
              <InstagramIcon size={14} />
              <span>Visit @cineroam_production on Instagram</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* 2 Featured Reel Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reels.map((reel, idx) => (
            <div
              key={reel.id}
              ref={(el) => (reelCardsRef.current[idx] = el)}
              className="bg-[#121212] border border-white/10 hover:border-[#E8C98A]/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-5 transition-all shadow-2xl group"
            >
              
              {/* Header Info */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#1A1A1A] text-[#E8C98A] border border-white/10">
                  {reel.tag}
                </span>

                <a
                  href={reel.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playShutterSound && playShutterSound()}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-pink-400 hover:text-white bg-pink-500/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 border border-pink-500/30 transition-all duration-300"
                >
                  <InstagramIcon size={13} />
                  <span>View on Instagram</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>

              {/* Exact Embedded Instagram Reel Video Player */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner flex items-center justify-center min-h-[520px] sm:min-h-[580px]">
                <iframe
                  src={reel.embedUrl}
                  title={reel.title}
                  className="w-full h-[520px] sm:h-[580px] border-0 rounded-2xl"
                  allowTransparency="true"
                  allow="encrypted-media"
                  scrolling="no"
                  frameBorder="0"
                />
              </div>

              {/* Card Bottom Meta */}
              <div className="space-y-3 pt-2">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#E8C98A] transition-colors leading-tight">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans mt-1 leading-relaxed">
                    {reel.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-500">
                    Directed by Chandan Mahato
                  </span>

                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#E8C98A] hover:underline"
                  >
                    <span>Open in Instagram App</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center space-y-2">
          <p className="text-xs font-mono text-neutral-400">
            Want viral-worthy reels like this for your cafe or brand?
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] hover:underline uppercase tracking-wider font-semibold"
          >
            <span>Explore Our Monthly Retainer Packages →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
