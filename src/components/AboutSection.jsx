import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Film, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './Navbar';

export default function AboutSection() {
  const steps = [
    {
      num: "01",
      title: "Visual Strategy & Moodboard",
      desc: "Dissecting your brand aesthetic, audience desires, and hero offerings to plan high-impact visual angles and lighting styles."
    },
    {
      num: "02",
      title: "Art Staging & Food Styling",
      desc: "Carefully arranging authentic textures, ceramics, raw spices, and garnishes to make dishes look irresistible on camera."
    },
    {
      num: "03",
      title: "High-Definition Capture",
      desc: "Recording high-resolution video and macro stills with dedicated continuous lighting for vibrant, authentic color reproduction."
    },
    {
      num: "04",
      title: "Paced Editing & Color Grading",
      desc: "Crafting rhythmic cuts, viral hooks, appetizing golden hues, and clean sound effects designed for high watch-time."
    },
    {
      num: "05",
      title: "Social Scheduling & Community",
      desc: "Delivering ready-to-post vertical reels, carousel sets, and managing follower interactions to grow local customer footfall."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Clean Logo Display + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          {/* Left: CineRoam Emblem (Clean, zero text collision) */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            
            <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl p-4 bg-[#141414] border border-[#E8C98A]/30 shadow-2xl space-y-4">
              
              {/* Logo Emblem: Displayed clean without any overlapping text */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner flex items-center justify-center">
                <img
                  src="/assets/logo-cineroam.jpeg"
                  alt="CineRoam Production Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Clean Identification Card Below the Logo */}
              <div className="p-4 bg-[#1C1C1C] rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                      Chandan Mahato
                    </h3>
                    <p className="text-xs font-mono text-[#E8C98A]">
                      Director & DP · CineRoam Production
                    </p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Active for Collaborations"></div>
                </div>

                <p className="text-[11px] font-mono text-neutral-400 border-t border-white/10 pt-2">
                  Commercial Cinematography, Food Styling & Brand Social Management
                </p>

                {/* Direct Social Link */}
                <div className="pt-1 flex items-center gap-2">
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <InstagramIcon size={14} />
                    <span>{personalInfo.instagramHandle}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Story & Creative Manifesto */}
          <div className="lg:col-span-7 space-y-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Behind The Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              We Don't Just Shoot Videos. <br />
              <span className="italic text-gold-gradient font-normal">We Build Brands Customers Crave.</span>
            </h2>

            <div className="space-y-4 text-neutral-300 font-sans text-base leading-relaxed">
              <p>
                Founded by visual artist <strong className="text-white font-semibold">Chandan Mahato</strong>, <strong>CineRoam Production</strong> was built with a single mission: to provide cafes, restaurants, fashion labels, and modern brands with cinematic visual storytelling that turns casual scrollers into loyal customers.
              </p>
              <p>
                In today's fast-moving social feeds, you have less than 2 seconds to capture attention. Whether it's the warm golden sizzle of fresh culinary creations, the clean luxury lines of cosmetic bottles like Mesaura, or high-energy streetwear lookbooks, every frame is crafted to look premium, authentic, and thumb-stopping.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-left">
              <div className="space-y-1 bg-[#141414] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-mono text-[#E8C98A] uppercase font-semibold">Reliable Delivery</span>
                <p className="text-xs text-neutral-400 font-sans">Consistent monthly shoot schedules so your social presence never runs dry.</p>
              </div>
              <div className="space-y-1 bg-[#141414] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-mono text-[#E8C98A] uppercase font-semibold">Tailored Aesthetics</span>
                <p className="text-xs text-neutral-400 font-sans">Custom color palettes and visual pacing aligned directly with your brand identity.</p>
              </div>
            </div>
          </div>

        </div>

        {/* 5-Step Production Methodology */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
              The CineRoam Method
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              From Planning to Viral Publish
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#121212] border border-white/10 rounded-2xl p-5 space-y-3 relative group hover:border-[#E8C98A]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-mono font-bold text-[#E8C98A]/60 group-hover:text-[#E8C98A] transition-colors">
                    {step.num}
                  </div>
                  <h4 className="font-serif font-bold text-white text-base leading-tight mt-2">
                    {step.title}
                  </h4>
                </div>
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
