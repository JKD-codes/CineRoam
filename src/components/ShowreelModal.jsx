import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300">
      
      {/* Container */}
      <div className="relative w-full max-w-5xl bg-[#0D0D0D] border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 bg-[#141414] border-b border-white/10 text-white">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></div>
            <span className="font-serif font-bold text-sm tracking-wide text-[#E8C98A]">
              CINEROAM PRODUCTION SHOWREEL · 2026 4K DCI
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-red-500 text-white transition-colors"
            title="Close Showreel (Esc)"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Canvas / Aspect Display */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          
          {/* Visual video preview background */}
          <img
            src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1600&q=80"
            alt="Showreel Preview"
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? 'scale-105' : 'scale-100'
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

          {/* Letterbox Bars */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black/80 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-black/80 pointer-events-none"></div>

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-20 h-20 rounded-full bg-[#E8C98A] text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          >
            {isPlaying ? (
              <Pause size={28} className="fill-black" />
            ) : (
              <Play size={28} className="fill-black ml-1" />
            )}
          </button>

          {/* Timecode overlay */}
          <div className="absolute bottom-8 left-6 text-xs font-mono text-white/90 bg-black/60 px-3 py-1 rounded backdrop-blur-sm border border-white/10">
            00:01:24:18 / 00:02:45:00 · 4K 24FPS PRORES
          </div>

          {/* Sound & Fullscreen controls */}
          <div className="absolute bottom-8 right-6 flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded bg-black/60 text-white hover:text-[#E8C98A] border border-white/10 backdrop-blur-sm"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </div>

        {/* Bottom Details Footer */}
        <div className="p-4 bg-[#141414] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400 gap-3">
          <span>Camera: Sony FX3 Cinema Line · Lenses: G-Master Series · Graded in DaVinci Resolve</span>
          <a
            href="#contact"
            onClick={onClose}
            className="text-[#E8C98A] hover:underline"
          >
            Inquire For Commercial Video Production →
          </a>
        </div>

      </div>

    </div>
  );
}
