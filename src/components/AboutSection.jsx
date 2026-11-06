import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Film, Award, Heart, Sparkles, Check, ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  const steps = [
    {
      num: "01",
      title: "Moodboard & Visual Strategy",
      desc: "We dissect your brand identity, product ingredients, and customer demographics to build a bespoke lighting and color palette treatment."
    },
    {
      num: "02",
      title: "Art Staging & Food Styling",
      desc: "Selecting authentic surfaces, raw textures, crystal accents, and macro food props that frame the hero product with tactile depth."
    },
    {
      num: "03",
      title: "Micro-Lighting & 4K Cinema Capture",
      desc: "Employing dual-native ISO cinema sensors, high-CRI continuous lights, and specialized macro glass to capture details imperceptible to the naked eye."
    },
    {
      num: "04",
      title: "DaVinci Color Science & Sound Design",
      desc: "Custom Kodak 2383 film transforms, balanced highlights, and bespoke Foley sound effects that give motion pieces visceral weight."
    },
    {
      num: "05",
      title: "Multi-Format Export & Launch",
      desc: "Delivery in pristine high-bitrate master formats optimized for billboards, Amazon A+ pages, and 9:16 vertical social feeds."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Story + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: CineRoam Emblem & Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#141414] border border-[#E8C98A]/30 p-2 shadow-2xl">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/assets/logo-cineroam.jpeg"
                  alt="CineRoam Production Emblem"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center space-y-1">
                  <span className="text-xs font-mono text-[#E8C98A] uppercase tracking-widest block">
                    CineRoam Production
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Directed by Chandan Mahato
                  </h3>
                  <p className="text-[11px] font-mono text-neutral-400">
                    Social Media Marketing & Cinematic Storytelling
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#161616] border border-white/10 p-4 rounded-xl shadow-2xl hidden sm:block">
              <div className="text-2xl font-display font-bold text-[#E8C98A]">
                {personalInfo.experience}
              </div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                Production Craft
              </div>
            </div>
          </div>

          {/* Right: Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
              <Film size={13} />
              <span>Behind The Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              We Don't Just Record Light. <br />
              <span className="italic text-gold-gradient font-normal">We Evoke Appetite & Desire.</span>
            </h2>

            <div className="space-y-4 text-neutral-300 font-sans text-base leading-relaxed">
              <p>
                Founded by cinematographer and commercial photographer <strong className="text-white font-semibold">Chandan Mahato</strong>, <strong>CineRoam Production</strong> was created to bridge the divide between artistic cinema-grade visual storytelling and performance-driven commercial marketing.
              </p>
              <p>
                In today's fast-scrolling feed, a product has less than 1.5 seconds to hook a viewer. Whether it's the golden sheen of caramelized jaggery over artisan sweets, the pristine droplet refraction on a skincare tube like Mesaura, or the kinetic rhythm of a brand commercial, our productions are engineered to stop thumbs and kindle desire.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#E8C98A] uppercase">Production Ethics</span>
                <p className="text-xs text-neutral-400">Authentic food styling, zero shortcuts, true-to-life color reproduction.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#E8C98A] uppercase">Turnaround Guarantee</span>
                <p className="text-xs text-neutral-400">Punctual milestones, responsive revisions, broadcast-ready deliverables.</p>
              </div>
            </div>
          </div>

        </div>

        {/* 5-Step Production Methodology */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
              The CineRoam Pipeline
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              From Concept to Master Delivery
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#121212] border border-white/10 rounded-xl p-5 space-y-3 relative group hover:border-[#E8C98A]/40 transition-colors"
              >
                <div className="text-2xl font-mono font-bold text-[#E8C98A]/60 group-hover:text-[#E8C98A] transition-colors">
                  {step.num}
                </div>
                <h4 className="font-serif font-bold text-white text-base leading-tight">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
