import React, { useLayoutEffect, useState, useEffect } from 'react';
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
import { AnimatePresence, motion as Motion, useScroll, useTransform } from 'framer-motion';

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
        {[...Array(5)].map((_, i) => (
          <Motion.div
            key={i}
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
            animate={{ 
              opacity: [0, 0.2, 0],
              scale: [1, 1.5, 1],
              x: (Math.random() * 10 - 5) + "%",
              y: (Math.random() * 10 - 5) + "%"
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
  const [showIntro, setShowIntro] = useState(true);

  useLayoutEffect(() => {
    if (showIntro || location.pathname !== '/') return;
    const id = location.hash?.replace(/^#/, '').trim();
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.pathname, location.hash, showIntro]);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
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
