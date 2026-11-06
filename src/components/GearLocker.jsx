import React from 'react';
import { gearArsenal } from '../data/portfolioData';
import { Camera, Eye, Zap, Sliders, CheckCircle2 } from 'lucide-react';

const categoryIcons = [Camera, Eye, Zap, Sliders];

export default function GearLocker() {
  return (
    <section id="gear" className="py-24 bg-[#070707] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider mb-2">
              <Camera size={13} />
              <span>Production Hardware & Suite</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              The Gear Locker & Technical Arsenal
            </h2>
          </div>
          <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-md">
            World-class visuals require uncompromised optics, cinema sensors with 15+ stops of dynamic range, and calibrated high-CRI light shaping.
          </p>
        </div>

        {/* Arsenal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gearArsenal.map((category, idx) => {
            const Icon = categoryIcons[idx] || Camera;

            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-[#111111] border border-white/10 hover:border-[#E8C98A]/30 transition-all duration-300 space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#E8C98A]">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white leading-tight">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1">
                      <div className="text-sm font-semibold text-neutral-200 flex items-center gap-1.5 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8C98A]"></span>
                        <span>{item.name}</span>
                      </div>
                      <p className="text-xs text-neutral-400 font-mono pl-3">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Philosophy Banner */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#161616] via-[#1A1A1A] to-[#161616] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-serif font-bold text-white">
              S-Log3 & ACES Color Pipeline Standard
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-xl">
              All CineRoam cinema footage is captured in 10-bit 4:2:2 All-Intra S-Log3 and mastered through custom ACES / DaVinci Resolve color transforms for unmatched tonal roll-off and broadcast skin accuracy.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-xs font-mono text-[#E8C98A]">
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">10-BIT 4:2:2</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">15+ STOPS DR</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">98+ CRI LIGHT</span>
          </div>
        </div>

      </div>
    </section>
  );
}
