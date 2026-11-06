import React, { useState } from 'react';
import { personalInfo, faqs } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, ChevronDown, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './CustomIcons';

export default function ContactSection({ playShutterSound }) {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    projectType: 'growth-retainer',
    budget: '20k-40k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playShutterSound) playShutterSound();
    setSubmitted(true);
    setTimeout(() => {
      const text = `*New Creative Inquiry from CineRoam Website*
• Client Name: ${formData.name}
• Brand / Business: ${formData.brand}
• Package / Service: ${formData.projectType}
• Budget Range: ${formData.budget}
• Contact: ${formData.email} / ${formData.phone}
• Project Brief: ${formData.message}`;
      window.open(`https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    }, 1000);
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
            <Send size={13} />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Let's Elevate Your Brand's Visuals
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base">
            Ready to revamp your restaurant menu, launch a product line, or accelerate your Instagram with dedicated monthly retainers? Fill out the brief or message Chandan directly.
          </p>
        </div>

        {/* Contact Grid: Details + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-20">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white">
                CineRoam Studio
              </h3>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                Available for on-location restaurant shoots, commercial studio setups, and ongoing monthly social media creative retainers.
              </p>

              <div className="space-y-4 pt-2 font-mono text-xs">
                
                {/* Email (cineroam29@gmail.com) */}
                <div className="flex items-center gap-3 text-neutral-300">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#E8C98A] shrink-0 border border-white/5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-[10px] uppercase">Official Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-[#E8C98A] transition-colors font-medium">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 text-neutral-300">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#E8C98A] shrink-0 border border-white/5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-[10px] uppercase">Service Region</span>
                    <span className="text-white font-medium">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I'd%20like%20to%20discuss%20a%20commercial%20shoot%20or%20social%20media%20management.`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playShutterSound && playShutterSound()}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl text-xs font-mono uppercase tracking-wider font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/25 hover:scale-102"
                >
                  <WhatsAppIcon size={18} />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Instagram Community Card (Sole Social Spotlight) */}
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#161616] via-[#1C161A] to-[#161616] border border-pink-500/25 hover:border-pink-500/50 rounded-3xl p-6 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <InstagramIcon size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono text-pink-400 uppercase tracking-wider">
                    Follow on Instagram
                  </div>
                  <div className="text-base font-serif font-bold text-white group-hover:text-pink-300 transition-colors">
                    {personalInfo.instagramHandle}
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white/5 text-neutral-400 group-hover:text-white transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </a>

          </div>

          {/* Right: Booking Brief Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-1">
              Project Specification Brief
            </h3>
            <p className="text-xs font-sans text-neutral-400 mb-6">
              Let us know what you're looking for, and we'll craft a visual proposal.
            </p>

            {submitted ? (
              <div className="py-14 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-serif font-bold text-white">
                  Message Prepared!
                </h4>
                <p className="text-xs font-sans text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Redirecting your brief to WhatsApp so Chandan can review your requirements directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-400 uppercase text-[11px]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E8C98A]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-400 uppercase text-[11px]">Brand / Restaurant Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Saffron Bistro / Mesaura"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E8C98A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-400 uppercase text-[11px]">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="contact@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E8C98A]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-400 uppercase text-[11px]">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E8C98A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-400 uppercase text-[11px]">Service or Retainer Package</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E8C98A]"
                    >
                      <option value="growth-retainer">Growth Retainer (₹20k–₹25k/mo) — Recommended</option>
                      <option value="starter-retainer">Starter Retainer (₹15k–₹20k/mo)</option>
                      <option value="premium-retainer">Premium Retainer (₹30k–₹40k/mo)</option>
                      <option value="food-photography">One-Time Food & Menu Shoot</option>
                      <option value="product-skincare">Product / Cosmetic Shoot</option>
                      <option value="apparel-fashion">Apparel / Streetwear Lookbook</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-400 uppercase text-[11px]">Expected Monthly Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E8C98A]"
                    >
                      <option value="15k-20k">₹15,000 – ₹20,000 / month (Starter)</option>
                      <option value="20k-25k">₹20,000 – ₹25,000 / month (Growth)</option>
                      <option value="30k-40k">₹30,000 – ₹40,000 / month (Premium)</option>
                      <option value="one-off">One-Time Project Shoot</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-neutral-400 uppercase text-[11px]">Project Goals & Notes</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your brand, what dishes/products you want shot, target launch dates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E8C98A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-xs font-mono uppercase tracking-wider font-bold text-black bg-[#E8C98A] hover:bg-[#F5DEB3] transition-all shadow-lg shadow-[#E8C98A]/20 hover:scale-[1.01]"
                >
                  <Send size={15} />
                  <span>Send Project Brief via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-6 pt-12 border-t border-white/10">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
              Common Questions
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-semibold text-white hover:text-[#E8C98A] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-[#E8C98A] transition-transform duration-200 shrink-0 ml-2 ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs font-sans text-neutral-300 border-t border-white/5 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
