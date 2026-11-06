import React, { useState, useRef } from 'react';
import { colorGradingComparison } from '../data/portfolioData';
import { Sliders, CheckCircle2 } from 'lucide-react';

export default function ColorGradeComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) { // Left mouse button held
      handleMove(e.clientX);
    }
  };

  const handleClick = (e) => {
    handleMove(e.clientX);
  };

  return (
    <section id="color-grade" className="py-24 bg-[#0A0A0A] relative border-t border-b border-white/10 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E8C98A]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
            <Sliders size={13} />
            <span>DaVinci Resolve Color Science</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {colorGradingComparison.title}
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
            {colorGradingComparison.description}
          </p>
        </div>

        {/* Interactive Split Comparison Card */}
        <div className="max-w-5xl mx-auto rounded-2xl p-3 sm:p-4 bg-[#121212] border border-white/10 shadow-2xl">
          
          {/* Instructions banner */}
          <div className="flex items-center justify-between pb-3 px-2 text-[11px] font-mono text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#E8C98A] animate-pulse"></span>
              Drag or click the slider to compare grading
            </span>
            <span className="text-[#E8C98A]">
              Grade Split: {Math.round(sliderPosition)}%
            </span>
          </div>

          {/* Interactive Canvas Area */}
          <div
            ref={containerRef}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[320px] sm:h-[460px] md:h-[540px] rounded-xl overflow-hidden select-none cursor-ew-resize bg-black"
          >
            {/* After Image (Right / Bottom layer) - Full Color Grade */}
            <img
              src={colorGradingComparison.afterImage}
              alt="CineRoam Color Grade"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#E8C98A] border border-[#E8C98A]/40 shadow-lg">
              {colorGradingComparison.afterLabel}
            </div>

            {/* Before Image (Left / Top clipped layer) - Flat Log */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={colorGradingComparison.beforeImage}
                alt="RAW Flat S-Log3"
                className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale contrast-75 brightness-110"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-neutral-300 border border-white/20 shadow-lg">
                {colorGradingComparison.beforeLabel}
              </div>
            </div>

            {/* Center Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#E8C98A] shadow-[0_0_15px_rgba(232,201,138,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#E8C98A] text-black flex items-center justify-center shadow-xl border-2 border-black font-bold text-xs">
                ↔
              </div>
            </div>

          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-4 border-t border-white/10">
            {colorGradingComparison.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#E8C98A] shrink-0 mt-0.5" />
                <span className="text-xs font-sans text-neutral-300 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
