import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import LightboxModal from './components/LightboxModal';
import ShowreelModal from './components/ShowreelModal';
import ColorGradeComparison from './components/ColorGradeComparison';
import Services from './components/Services';
import Estimator from './components/Estimator';
import GearLocker from './components/GearLocker';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Synthesize a realistic mechanical camera shutter click sound via Web Audio API
  const playShutterSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Shutter click transient (quick noise burst)
      const bufferSize = ctx.sampleRate * 0.05; // 50ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.008));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      // Filter to simulate mechanical shutter body
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, ctx.currentTime);
      filter.Q.setValueAtTime(3.0, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch (e) {
      // AudioContext could be blocked by autoplay policies until user clicks
    }
  }, [soundEnabled]);

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F5F0] relative selection:bg-[#E8C98A] selection:text-black">
      
      {/* Subtle Film Grain Noise Texture */}
      <div className="fixed inset-0 film-grain pointer-events-none z-40 opacity-70"></div>

      {/* Navigation */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playShutterSound={playShutterSound}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenShowreel={() => setShowreelOpen(true)}
          playShutterSound={playShutterSound}
        />

        <PortfolioGrid
          onSelectProject={(project) => setSelectedProject(project)}
          playShutterSound={playShutterSound}
        />

        <ColorGradeComparison />

        <Services playShutterSound={playShutterSound} />

        <Estimator playShutterSound={playShutterSound} />

        <GearLocker />

        <AboutSection />

        <Testimonials />

        <ContactSection playShutterSound={playShutterSound} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Lightbox Inspector Modal */}
      {selectedProject && (
        <LightboxModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
          playShutterSound={playShutterSound}
        />
      )}

      {/* Showreel Cinema Player Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />

    </div>
  );
}
