import React, { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import AboutSection from '../components/AboutSection';
import LiveMapSimulator from '../components/LiveMapSimulator';
import ContactSection from '../components/ContactSection';
import TransformSection from '../components/TransformSection';
import RedefineSection from '../components/RedefineSection';
import Footer from '../components/Footer';
import IntroAnimation from '../components/IntroAnimation';
import { scrollToSectionId } from '../lib/scrollToSection';
import { AnimatePresence, motion as Motion, useScroll, useTransform } from 'framer-motion';

// Intro state is now managed via sessionStorage to persist across refreshes

const SIGNAL_PARTICLES = [
  { initialX: '12%', initialY: '18%', x: '14%', y: '16%' },
  { initialX: '68%', initialY: '22%', x: '66%', y: '24%' },
  { initialX: '42%', initialY: '55%', x: '44%', y: '53%' },
  { initialX: '85%', initialY: '72%', x: '83%', y: '74%' },
  { initialX: '28%', initialY: '80%', x: '30%', y: '78%' },
];

const GlobalTrackingBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-white">
      {/* Subtle Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} 
      />
      <div 
        className="absolute inset-0 opacity-[0.01]" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} 
      />

      {/* Rotating Coordinate Indicators */}
      <div className="absolute top-20 left-20 opacity-[0.05] text-[10px] font-black uppercase tracking-[0.4em] flex flex-col gap-2">
        <Motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, repeat: Infinity }}>LAT: 17.3850° N</Motion.div>
        <Motion.div animate={{ opacity: [0.5, 0.2, 0.5] }} transition={{ duration: 5, repeat: Infinity }}>LON: 78.4867° E</Motion.div>
        <div className="h-px w-20 bg-black mt-2" />
      </div>

      <div className="absolute bottom-20 right-20 opacity-[0.05] text-[10px] font-black uppercase tracking-[0.4em] flex flex-col items-end gap-2">
        <div className="h-px w-20 bg-black mb-2" />
        <Motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity }}>HDOP: 0.8</Motion.div>
        <Motion.div animate={{ opacity: [0.5, 0.2, 0.5] }} transition={{ duration: 6, repeat: Infinity }}>VDOP: 1.2</Motion.div>
      </div>

      {/* Floating Signal Packets */}
      <Motion.div style={{ y }} className="absolute inset-0">
        {SIGNAL_PARTICLES.map((particle, i) => (
          <Motion.div
            key={i}
            initial={{ x: particle.initialX, y: particle.initialY, opacity: 0 }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [1, 1.5, 1],
              x: particle.x,
              y: particle.y,
            }}
            transition={{ duration: 10 + i * 2, repeat: Infinity }}
            className="absolute h-1 w-1 rounded-full bg-[#991b1b] blur-[1px]"
          />
        ))}
      </Motion.div>

      {/* Global Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_95%)]" />
    </div>
  );
}

export default function Home() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('introHasPlayed') !== 'true';
    }
    return true;
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('introHasPlayed', 'true');
    }
  };

  useLayoutEffect(() => {
    if (showIntro || location.pathname !== '/') return;
    const id = location.hash?.replace(/^#/, '').trim();
    if (!id) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }
    requestAnimationFrame(() => {
      scrollToSectionId(id, { behavior: 'smooth' });
    });
  }, [location.pathname, location.hash, showIntro]);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <GlobalTrackingBackground />

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative min-h-screen bg-transparent"
        style={{ pointerEvents: showIntro ? 'none' : 'auto' }}
      >
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <ProductGrid />
          <TransformSection />
          <RedefineSection />
          <AboutSection />
          <LiveMapSimulator />
          <ContactSection />
        </main>
        <Footer />
      </Motion.div>
    </>
  );
}
