import React, { useEffect, useRef } from 'react';
import { pricingPackages, personalInfo } from '../data/portfolioData';
import { Check, Download, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './CustomIcons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PricingSection({ playShutterSound }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
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

  return (
    <section ref={sectionRef} id="pricing" className="py-24 bg-[#0A0A0A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
            <ShieldCheck size={14} className="text-[#E8C98A]" />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-[#E8C98A] bg-[#E8C98A]/10 border border-[#E8C98A]/30 hover:bg-[#E8C98A] hover:text-black transition-all shadow-md"
            >
              <Download size={13} />
              <span>Download Official Rate Card (PDF)</span>
            </a>
          </div>
        </div>

        {/* 3 Tier Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`relative rounded-3xl p-8 bg-[#111111] border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
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
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans mt-1">
                    {pkg.idealFor}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pb-4 border-b border-white/10">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                    {pkg.priceRange}
                  </div>
                  <div className="text-xs font-mono text-[#E8C98A] mt-1">
                    {pkg.billingPeriod}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                    What's Included:
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

              {/* Card Action Button */}
              <div className="pt-8 mt-6 border-t border-white/5 space-y-2.5">
                <a
                  href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I'm%20interested%20in%20the%20'${encodeURIComponent(pkg.name)}'%20plan%20(${encodeURIComponent(pkg.priceRange)})%20for%20my%20brand.`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playShutterSound && playShutterSound()}
                  className={`flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 shadow-md ${
                    pkg.popular
                      ? 'bg-[#E8C98A] text-black hover:bg-[#F5DEB3] shadow-[#E8C98A]/20'
                      : 'bg-white/10 text-white hover:bg-[#E8C98A] hover:text-black border border-white/10'
                  }`}
                >
                  <WhatsAppIcon size={18} />
                  <span>Select {pkg.name}</span>
                </a>

                <p className="text-center text-[10px] font-mono text-neutral-500">
                  Flexible month-to-month · Custom scope on request
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
