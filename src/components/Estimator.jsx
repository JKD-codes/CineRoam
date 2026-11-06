import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Calculator, Check, MessageCircle, Copy, CheckCheck, Sparkles } from 'lucide-react';

export default function Estimator({ playShutterSound }) {
  const [projectType, setProjectType] = useState('food');
  const [assetCount, setAssetCount] = useState(10);
  const [currency, setCurrency] = useState('INR'); // INR or USD
  const [copied, setCopied] = useState(false);

  const [addons, setAddons] = useState({
    rush: false,
    macro: true,
    socialCutdowns: false,
    colorMaster: true
  });

  const projectTypes = [
    { id: 'food', label: 'Gourmet Food Photography', baseRate: currency === 'INR' ? 15000 : 350, perAsset: currency === 'INR' ? 1200 : 25 },
    { id: 'product', label: 'E-Commerce & Packshots', baseRate: currency === 'INR' ? 12000 : 300, perAsset: currency === 'INR' ? 1000 : 20 },
    { id: 'reels', label: 'Viral Social Reels Package', baseRate: currency === 'INR' ? 22000 : 500, perAsset: currency === 'INR' ? 3500 : 70 },
    { id: 'film', label: '4K Commercial Brand Film', baseRate: currency === 'INR' ? 45000 : 950, perAsset: currency === 'INR' ? 5000 : 100 }
  ];

  const currentTypeConfig = projectTypes.find(t => t.id === projectType);

  const toggleAddon = (key) => {
    if (playShutterSound) playShutterSound();
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateTotal = () => {
    let total = currentTypeConfig.baseRate + (assetCount * currentTypeConfig.perAsset);
    if (addons.rush) total += (currency === 'INR' ? 8000 : 150);
    if (addons.macro) total += (currency === 'INR' ? 4000 : 80);
    if (addons.socialCutdowns) total += (currency === 'INR' ? 6000 : 120);
    return total;
  };

  const formatPrice = (amount) => {
    if (currency === 'INR') {
      return `₹${amount.toLocaleString('en-IN')}`;
    }
    return `$${amount.toLocaleString('en-US')}`;
  };

  const getEstimatedTimeline = () => {
    if (addons.rush) return '48 - 72 Hours (Express Priority)';
    if (projectType === 'film') return '10 - 14 Business Days';
    if (projectType === 'reels') return '5 - 7 Business Days';
    return '4 - 6 Business Days';
  };

  const getBriefMessage = () => {
    const selectedAddonLabels = [];
    if (addons.rush) selectedAddonLabels.push('48h Rush Delivery');
    if (addons.macro) selectedAddonLabels.push('Macro Texture Detail');
    if (addons.socialCutdowns) selectedAddonLabels.push('Social 9:16 Cutdowns');
    if (addons.colorMaster) selectedAddonLabels.push('DaVinci Color Grade');

    return `Hi Chandan, I used the CineRoam Project Estimator on your website:
- Project Type: ${currentTypeConfig.label}
- Deliverables Count: ${assetCount} assets
- Selected Add-ons: ${selectedAddonLabels.join(', ') || 'Standard Scope'}
- Estimated Scope: ~${formatPrice(calculateTotal())}
- Target Timeline: ${getEstimatedTimeline()}

I would like to discuss our upcoming shoot!`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getBriefMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="estimator" className="py-24 bg-[#0A0A0A] relative border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C98A] uppercase tracking-wider">
            <Calculator size={13} />
            <span>Interactive Production Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Estimate Your Project Investment
          </h2>
          <p className="text-neutral-400 font-sans text-sm">
            Transparent planning tailored for modern brands. Choose your project requirements and receive an immediate ballpark estimate.
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#1A1A1A] border border-white/10 text-xs font-mono mt-2">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1 rounded-full transition-colors ${
                currency === 'INR' ? 'bg-[#E8C98A] text-black font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded-full transition-colors ${
                currency === 'USD' ? 'bg-[#E8C98A] text-black font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-[#E8C98A] block">
                1. Select Production Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      if (playShutterSound) playShutterSound();
                      setProjectType(type.id);
                    }}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      projectType === type.id
                        ? 'border-[#E8C98A] bg-[#E8C98A]/10 text-white'
                        : 'border-white/10 bg-[#161616] text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    <div className="text-sm font-semibold font-serif leading-tight">
                      {type.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Deliverable Count */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="uppercase tracking-wider text-[#E8C98A]">
                  2. Number of Final Deliverables:
                </span>
                <span className="text-white font-bold text-sm bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                  {assetCount} {projectType === 'reels' ? 'Reels' : projectType === 'film' ? 'Edits / Versions' : 'Photos'}
                </span>
              </div>
              <input
                type="range"
                min={projectType === 'film' ? 1 : 3}
                max={projectType === 'reels' ? 20 : 40}
                value={assetCount}
                onChange={(e) => setAssetCount(Number(e.target.value))}
                className="w-full accent-[#E8C98A] h-2 bg-neutral-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-500">
                <span>Minimal Focus</span>
                <span>Standard Campaign</span>
                <span>Catalog Master</span>
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#E8C98A] block">
                3. Production Options & Add-ons
              </label>
              <div className="space-y-2 text-xs font-sans">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#161616] border border-white/5 cursor-pointer hover:border-white/20 transition-colors">
                  <input
                    type="checkbox"
                    checked={addons.rush}
                    onChange={() => toggleAddon('rush')}
                    className="accent-[#E8C98A] rounded w-4 h-4"
                  />
                  <div className="flex-1">
                    <span className="text-white font-medium block">48-Hour Express Rush Turnaround</span>
                    <span className="text-neutral-400 text-[11px]">Priority grading and overnight delivery</span>
                  </div>
                  <span className="text-xs font-mono text-[#E8C98A]">+{currency === 'INR' ? '₹8,000' : '$150'}</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#161616] border border-white/5 cursor-pointer hover:border-white/20 transition-colors">
                  <input
                    type="checkbox"
                    checked={addons.macro}
                    onChange={() => toggleAddon('macro')}
                    className="accent-[#E8C98A] rounded w-4 h-4"
                  />
                  <div className="flex-1">
                    <span className="text-white font-medium block">Macro 90mm Texture & Drizzle B-Roll</span>
                    <span className="text-neutral-400 text-[11px]">Extreme close-up sensory slow-motion clips</span>
                  </div>
                  <span className="text-xs font-mono text-[#E8C98A]">+{currency === 'INR' ? '₹4,000' : '$80'}</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#161616] border border-white/5 cursor-pointer hover:border-white/20 transition-colors">
                  <input
                    type="checkbox"
                    checked={addons.socialCutdowns}
                    onChange={() => toggleAddon('socialCutdowns')}
                    className="accent-[#E8C98A] rounded w-4 h-4"
                  />
                  <div className="flex-1">
                    <span className="text-white font-medium block">Social 9:16 Vertical Micro-Cutdowns</span>
                    <span className="text-neutral-400 text-[11px]">Optimized for Instagram Reels & TikTok hooks</span>
                  </div>
                  <span className="text-xs font-mono text-[#E8C98A]">+{currency === 'INR' ? '₹6,000' : '$120'}</span>
                </label>
              </div>
            </div>

          </div>

          {/* Output Summary Card */}
          <div className="lg:col-span-5 bg-[#181818] border border-white/10 rounded-xl p-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Estimated Investment
                </span>
                <div className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  {formatPrice(calculateTotal())}
                  <span className="text-xs font-mono text-neutral-400 font-normal ml-2">
                    (Ballpark)
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Timeline:</span>
                  <span className="text-[#E8C98A]">{getEstimatedTimeline()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Color Science:</span>
                  <span className="text-white">DaVinci Rec.709 Master</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Deliverable Format:</span>
                  <span className="text-white">Full-Res 4K + Web Optimized</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Usage Rights:</span>
                  <span className="text-white">Full Commercial & Ads</span>
                </div>
              </div>

              <div className="p-3 bg-black/40 rounded-lg border border-white/5 text-[11px] font-sans text-neutral-400 leading-relaxed">
                Includes full lighting setup, continuous / strobe gear, art direction, and high-fidelity retouching by Chandan Mahato.
              </div>
            </div>

            {/* Direct Connect Actions */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(getBriefMessage())}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#E8C98A] hover:bg-[#F5DEB3] transition-all shadow-lg shadow-[#E8C98A]/20"
              >
                <MessageCircle size={15} />
                <span>Send Scope to WhatsApp</span>
              </a>

              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                {copied ? <CheckCheck size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'Scope Copied to Clipboard!' : 'Copy Scope Brief'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
