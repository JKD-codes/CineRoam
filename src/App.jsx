import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import AllWorksPage from './components/AllWorksPage';
import Services from './components/Services';
import PricingSection from './components/PricingSection';
import ColorGradeComparison from './components/ColorGradeComparison';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import ShowreelModal from './components/ShowreelModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'work'
  const [selectedProject, setSelectedProject] = useState(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Synchronize hash with page state for clean browser navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#/work' || hash === '#work') {
        setCurrentPage('work');
      } else if (hash === '#/' || hash === '' || hash === '#home') {
        setCurrentPage('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page, anchor = null) => {
    setCurrentPage(page);
    if (page === 'work') {
      window.location.hash = '/work';
    } else {
      window.location.hash = '/';
      if (anchor) {
        setTimeout(() => {
          const el = document.querySelector(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    }
  };

  // Web Audio API Mechanical Shutter Sound FX
  const playShutterSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Shutter click transient
      const bufferSize = ctx.sampleRate * 0.045; // 45ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.007));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1600, ctx.currentTime);
      filter.Q.setValueAtTime(3.2, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.04);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch (e) {
      // AudioContext policy
    }
  }, [soundEnabled]);

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F5F0] relative selection:bg-[#E8C98A] selection:text-black">
      
      {/* Film Grain Texture */}
      <div className="fixed inset-0 film-grain pointer-events-none z-40 opacity-70"></div>

      {/* Primary Floating Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playShutterSound={playShutterSound}
      />

      {/* Multi-Page Views */}
      <main>
        {currentPage === 'home' ? (
          <>
            {/* Cinematic Hero */}
            <Hero
              onOpenShowreel={() => setShowreelOpen(true)}
              onExploreWorks={() => navigateTo('work')}
              playShutterSound={playShutterSound}
            />

            {/* Curated Highlights Grid (6 Flagship Works) */}
            <FeaturedGrid
              onSelectProject={(project) => setSelectedProject(project)}
              onExploreAll={() => navigateTo('work')}
              playShutterSound={playShutterSound}
            />

            {/* Core Commercial Services */}
            <Services playShutterSound={playShutterSound} />

            {/* Official Pricing Retainer Plans (From Pricing.pdf) */}
            <PricingSection playShutterSound={playShutterSound} />

            {/* Color Finishing Slider */}
            <ColorGradeComparison />

            {/* Director & DP Story (Fixed clean typography) */}
            <AboutSection />

            {/* Client Reviews */}
            <Testimonials />

            {/* Direct Booking & Instagram Connect */}
            <ContactSection playShutterSound={playShutterSound} />
          </>
        ) : (
          /* Dedicated All Works Archive Page (55+ Works with category filters & search) */
          <AllWorksPage
            onBackHome={() => navigateTo('home')}
            onSelectProject={(project) => setSelectedProject(project)}
            playShutterSound={playShutterSound}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Lightbox Inspector Modal */}
      {selectedProject && (
        <LightboxModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
          playShutterSound={playShutterSound}
        />
      )}

      {/* Cinema Showreel Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />

    </div>
  );
}
