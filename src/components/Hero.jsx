import React from 'react';
import { HashSectionLink } from './HashSectionLink';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, MapPin, Zap, ChevronRight } from 'lucide-react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#f8f9fa]">
      <Motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full"
      >
        <picture className="w-full h-full block">
          <source media="(min-width: 768px)" srcSet="/gps_hero_bg_desktop_v5.jpg" />
          <img
            src="/gps_hero_bg_mobile_v5.jpg"
            alt="Daytime GPS Background"
            className="w-full h-full object-cover object-[50%_40%] opacity-90"
          />
        </picture>
        {/* Subtle overlay gradients for depth and text readability */}
        <div className="absolute inset-0 bg-white/20" />
      </Motion.div>
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      className="relative flex min-h-screen items-start pt-[12vh] overflow-hidden bg-white"
      id="home"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <Motion.div 
          style={{ y: y1, opacity }}
          className="flex flex-col items-start text-left max-w-4xl"
        >
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-gray-900 mb-8 leading-[0.9] selection:bg-[#991b1b] selection:text-white drop-shadow-2xl"
          >
            Pinpoint <br className="hidden sm:block" />
            <span className="text-[#991b1b] relative">
              Accuracy.
            </span>
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-900 max-w-2xl mb-12 leading-relaxed font-bold tracking-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]"
          >
            Elite 4G GPS infrastructure and real-time response software. Built for India's most demanding logistics and asset security environments.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full justify-start"
          >
            <HashSectionLink
              sectionId="products"
              className="group relative inline-flex items-center justify-center gap-4 rounded-full bg-[#991b1b] px-12 py-6 text-sm font-black text-white transition-all hover:scale-105 active:scale-95 shadow-[0_32px_64px_-16px_rgba(153,27,27,0.4)] w-full sm:w-auto overflow-hidden btn-ripple uppercase tracking-widest"
            >
              <span className="relative z-10">Order Now</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </HashSectionLink>
            
            <HashSectionLink
              sectionId="contact"
              className="inline-flex items-center justify-center gap-4 rounded-full bg-white/60 border border-gray-200 px-12 py-6 text-sm font-black text-gray-900 transition-all hover:bg-white hover:border-gray-300 w-full sm:w-auto uppercase tracking-widest backdrop-blur-md shadow-sm"
            >
              Contact Us
              <ChevronRight size={18} className="text-gray-400" />
            </HashSectionLink>
          </Motion.div>

          {/* Quick Trust Indicators */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 2, delay: 1 }}
            className="mt-20 flex flex-wrap justify-start gap-x-12 gap-y-8 text-gray-800 bg-white/40 backdrop-blur-md py-4 px-8 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] w-fit"
          >
            <div className="flex items-center gap-2 group cursor-default">
              <ShieldCheck size={18} className="text-[#991b1b]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Tier-1 Security</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <MapPin size={18} className="text-[#991b1b]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Real-time Telemetry</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Zap size={18} className="text-[#991b1b]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">4G Architecture</span>
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
