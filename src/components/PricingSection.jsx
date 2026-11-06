import React from 'react';
import { pricingPackages, personalInfo } from '../data/portfolioData';
import { Check, Sparkles, Download, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './Navbar';

export default function PricingSection({ playShutterSound }) {
  return (
    <section id="pricing" className="py-24 bg-[#0A0A0A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
            <Sparkles size={13} />
            <span>Official Monthly Retainer Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Transparent Creative Investment
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
            Consistent visual storytelling tailored for cafes, restaurants, and consumer brands. Choose a monthly retainer that matches your growth goals.
          </p>

          {/* Download Official PDF Rate Card */}
          <div className="pt-2">
            <a
              href="/Pricing.pdf"
              download="CineRoam_Pricing.pdf"
              onClick={() => playShutterSound && playShutterSound()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-[#E8C98A] bg-[#E8C98A]/10 border border-[#E8C98A]/30 hover:bg-[#E8C98A] hover:text-black transition-all"
            >
              <Download size={13} />
              <span>Download Official Rate Card (PDF)</span>
            </a>
          </div>
        </div>

        {/* 3 Tier Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 bg-[#111111] border flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'border-[#E8C98A] shadow-2xl shadow-[#E8C98A]/10 ring-1 ring-[#E8C98A]/50 bg-gradient-to-b from-[#161616] to-[#101010]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className={`absolute -top-3.5 left-8 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold shadow-md ${
                  pkg.popular
                    ? 'bg-[#E8C98A] text-black'
                    : 'bg-[#222222] text-neutral-300 border border-white/10'
                }`}>
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                
                {/* Header */}
                <div className="border-b border-white/10 pb-6 space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-xs font-mono text-[#E8C98A]">
                    {pkg.tagline}
                  </p>
                  
                  {/* Price */}
                  <div className="pt-3">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                      {pkg.price}
                    </div>
                    <span className="text-xs font-mono text-neutral-400 block mt-0.5">
                      {pkg.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {pkg.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                    Monthly Deliverables:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-sans text-neutral-200">
                        <Check size={14} className="text-[#E8C98A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-white/10">
                <a
                  href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I'm%20interested%20in%20the%20*${encodeURIComponent(pkg.name)}%20Package*%20(${encodeURIComponent(pkg.price)}/mo)%20for%20my%20brand.`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playShutterSound && playShutterSound()}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md ${
                    pkg.popular
                      ? 'bg-[#E8C98A] hover:bg-[#F5DEB3] text-black shadow-[#E8C98A]/20'
                      : 'bg-white/5 hover:bg-emerald-600 text-white border border-white/10'
                  }`}
                >
                  <WhatsAppIcon size={16} />
                  <span>Select {pkg.name} Plan</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Shoot Callout */}
        <div className="mt-12 text-center text-xs font-mono text-neutral-400">
          Need a one-time product launch, restaurant menu shoot, or custom scope?{' '}
          <a
            href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I'd%20like%20to%20discuss%20a%20custom%20one-time%20shoot.`}
            target="_blank"
            rel="noreferrer"
            className="text-[#E8C98A] underline hover:text-white transition-colors"
          >
            Chat with Chandan for a tailored quote →
          </a>
        </div>

      </div>
    </section>
  );
}
