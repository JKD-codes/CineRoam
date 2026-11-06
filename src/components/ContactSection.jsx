import React, { useState } from 'react';
import { personalInfo, faqs } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronDown, CheckCircle2, Sparkles } from 'lucide-react';

function InstagramIcon({ size = 17, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YoutubeIcon({ size = 17, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>
  );
}

export default function ContactSection({ playShutterSound }) {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    projectType: 'food-photography',
    budget: '50k-100k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playShutterSound) playShutterSound();
    setSubmitted(true);
    setTimeout(() => {
      // open WhatsApp with the message formatted
      const text = `*New Production Inquiry from CineRoam Website*
• Name: ${formData.name}
• Brand: ${formData.brand}
• Service: ${formData.projectType}
• Budget: ${formData.budget}
• Email/Phone: ${formData.email} / ${formData.phone}
• Project Notes: ${formData.message}`;
      window.open(`https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    }, 1200);
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
            <Sparkles size={13} />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Let's Craft Visual Gold Together
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base">
            Have an upcoming product launch, menu overhaul, or commercial campaign? Fill out the brief below or chat with Chandan directly on WhatsApp.
          </p>
        </div>

        {/* Contact Grid: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left: Contact Info & Quick Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white">
                CineRoam Studio Headquarters
              </h3>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                We accept remote product shipments from anywhere in India and the world, and travel on-location for commercial shoots and brand films.
              </p>

              <div className="space-y-4 pt-2 font-mono text-xs">
                <div className="flex items-center gap-3 text-neutral-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E8C98A]">
                    <Mail size={15} />
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-[10px] uppercase">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-[#E8C98A] transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-neutral-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E8C98A]">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-[10px] uppercase">Phone / Inquiries</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-white hover:text-[#E8C98A] transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-neutral-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E8C98A]">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-[10px] uppercase">Location</span>
                    <span className="text-white">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Chandan,%20I'd%20like%20to%20discuss%20a%20project%20with%20CineRoam%20Production.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle size={16} />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Social channels card */}
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-mono text-neutral-400">Follow the Journey</span>
                <div className="text-sm font-semibold text-white font-serif">@cineroam_production</div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-[#E8C98A] hover:text-black text-white transition-colors"
                  title="Instagram"
                >
                  <InstagramIcon size={17} />
                </a>
                <a
                  href={personalInfo.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-red-500 hover:text-white text-white transition-colors"
                  title="YouTube"
                >
                  <YoutubeIcon size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Booking Inquiry Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Project Specification Brief
            </h3>
            <p className="text-xs font-sans text-neutral-400 mb-6">
              Share details about your brand, requirements, and shoot dates.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-serif font-bold text-white">
                  Inquiry Initiated!
                </h4>
                <p className="text-xs font-sans text-neutral-300 max-w-sm mx-auto">
                  Redirecting your project details to WhatsApp so Chandan can review your brief directly.
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
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E8C98A]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-400 uppercase text-[11px]">Brand / Company *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mesaura Skincare"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E8C98A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-400 uppercase text-[11px]">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E8C98A]"
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
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E8C98A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-400 uppercase text-[11px]">Service Required</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#E8C98A]"
                    >
                      <option value="food-photography">Food & Culinary Photography</option>
                      <option value="product-ecommerce">Product & E-Commerce Shoots</option>
                      <option value="social-reels">Social Media Reels & Content</option>
                      <option value="cinematography-film">4K Brand Commercial Film</option>
                      <option value="color-grading">Color Grading & Post-Production Only</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-400 uppercase text-[11px]">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#E8C98A]"
                    >
                      <option value="under-30k">Under ₹30,000 / $400</option>
                      <option value="30k-60k">₹30,000 – ₹60,000 / $400 – $800</option>
                      <option value="60k-120k">₹60,000 – ₹1,20,000 / $800 – $1,500</option>
                      <option value="120k+">₹1,20,000+ / $1,500+ (Full Campaign)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-neutral-400 uppercase text-[11px]">Project Details & References</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the products, number of items, target dates, or style references..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E8C98A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E8C98A] hover:bg-[#F5DEB3] transition-all shadow-lg shadow-[#E8C98A]/20 hover:scale-[1.01]"
                >
                  <Send size={15} />
                  <span>Send Project Specification Brief</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion */}
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
                className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-serif font-semibold text-white hover:text-[#E8C98A] transition-colors"
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
                  <div className="px-4 pb-4 text-xs font-sans text-neutral-300 border-t border-white/5 pt-3 leading-relaxed">
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
