import React, { useState } from 'react';
import { X, Play, ArrowUpRight, Film } from 'lucide-react';
import { InstagramIcon } from './CustomIcons';

export default function ShowreelModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeReelIndex, setActiveReelIndex] = useState(0);

  const reels = [
    {
      id: "DfR4rHLuElS",
      title: "Commercial Film & Visual Pacing",
      url: "https://www.instagram.com/reel/DfR4rHLuElS/?exln=ZzB6aGJpMnF5cmtl",
      embedUrl: "https://www.instagram.com/reel/DfR4rHLuElS/embed/",
      tag: "Reel 01"
    },
    {
      id: "De6z1XUNARb",
      title: "Artisanal Showcase & Cinematic Rhythm",
      url: "https://www.instagram.com/reel/De6z1XUNARb/?mdxt=M3cyMmttdWh1NTk4",
      embedUrl: "https://www.instagram.com/reel/De6z1XUNARb/embed/",
      tag: "Reel 02"
    }
  ];

  const activeReel = reels[activeReelIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0D0D0D] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-[#141414] border-b border-white/10 text-white">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-[#E8C98A]">
              CineRoam <span className="text-white/70 font-sans text-xs">Featured Reels</span>
            </span>

            {/* Reel Tabs */}
            <div className="flex items-center gap-1.5 ml-2 bg-black/40 p-1 rounded-full border border-white/10">
              {reels.map((r, idx) => (
                <button
                  key={r.id}
                  onClick={() => setActiveReelIndex(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                    activeReelIndex === idx
                      ? 'bg-[#E8C98A] text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {r.tag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={activeReel.url}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-pink-400 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 transition-colors"
            >
              <InstagramIcon size={14} />
              <span>View on Instagram</span>
              <ArrowUpRight size={12} />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-red-500 text-white transition-colors"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Video Embed Frame */}
        <div className="relative w-full bg-black flex items-center justify-center p-3 sm:p-6 overflow-y-auto max-h-[75vh]">
          <div className="w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-[#111111] border border-white/10">
            <iframe
              key={activeReel.id}
              src={activeReel.embedUrl}
              title={activeReel.title}
              className="w-full h-full border-0 rounded-2xl"
              allowTransparency="true"
              allow="encrypted-media"
              scrolling="no"
              frameBorder="0"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="p-4 bg-[#141414] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400 gap-3">
          <span>{activeReel.title} · Directed by Chandan Mahato</span>

          <a
            href={activeReel.url}
            target="_blank"
            rel="noreferrer"
            className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-1"
          >
            <InstagramIcon size={14} />
            <span>Open in Instagram App ↗</span>
          </a>
        </div>

      </div>

    </div>
  );
}
