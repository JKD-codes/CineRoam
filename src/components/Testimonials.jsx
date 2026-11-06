import React from 'react';
import { clientReviews } from '../data/portfolioData';
import { Star, Quote, Award } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#070707] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
            <Award size={13} />
            <span>Client Feedback & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Trusted by Ambitious Brands
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base">
            Don't just take our word for it — hear what founders, marketing leads, and creative directors say about partnering with CineRoam.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#111111] border border-white/10 rounded-2xl p-7 flex flex-col justify-between space-y-6 hover:border-[#E8C98A]/30 transition-all duration-300 relative group"
            >
              {/* Stars */}
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#E8C98A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#E8C98A" />
                  ))}
                </div>

                <p className="text-sm text-neutral-300 font-sans leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & Project tag */}
              <div className="pt-4 border-t border-white/5 space-y-1">
                <div className="text-sm font-semibold text-white font-serif">
                  {review.author}
                </div>
                <div className="text-xs text-[#E8C98A] font-mono">
                  {review.role}, {review.company}
                </div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  Project: {review.project}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
