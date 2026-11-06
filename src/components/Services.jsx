import React from 'react';
import { services, personalInfo } from '../data/portfolioData';
import { Utensils, Box, Video, Flame, Check, ArrowUpRight, Sparkles } from 'lucide-react';

const iconMap = {
  Utensils: Utensils,
  Box: Box,
  Video: Video,
  Flame: Flame
};

export default function Services({ playShutterSound }) {
  return (
    <section id="services" className="py-24 bg-[#070707] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
            <Sparkles size={13} />
            <span>Commercial Production Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Tailored Production Services
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
            From single-item luxury macro packshots to full multi-day commercial brand film productions, we deliver end-to-end creative direction, lighting, shooting, and grading.
          </p>
        </div>

        {/* 4 Pillar Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-8 bg-[#111111] border transition-all duration-300 flex flex-col justify-between ${
                  service.popular
                    ? 'border-[#E8C98A]/40 shadow-xl shadow-[#E8C98A]/5'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#E8C98A] text-black font-semibold shadow-md">
                    High Demand
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#E8C98A]">
                    <IconComponent size={22} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-[#E8C98A] mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                      Core Deliverables:
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs font-sans text-neutral-200">
                          <Check size={14} className="text-[#E8C98A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <a
                    href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I'm%20interested%20in%20your%20'${encodeURIComponent(service.title)}'%20service.`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playShutterSound && playShutterSound()}
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-mono uppercase tracking-wider bg-white/5 hover:bg-[#E8C98A] text-white hover:text-black border border-white/10 hover:border-[#E8C98A] transition-all duration-200"
                  >
                    <span>Request Service Inquiry</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
