import React from 'react';
import { HashSectionLink } from './HashSectionLink';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, MapPin, Zap, ChevronRight } from 'lucide-react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
      <Motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewBox="0 0 1440 800"
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Abstract Map Grid Lines */}
        <g stroke="currentColor" strokeWidth="0.5" fill="none" className="text-black">
          {[...Array(12)].map((_, i) => (
            <Motion.path
              key={`h-${i}`}
              d={`M0 ${i * 80} L1440 ${i * 80 + (i % 2 === 0 ? 20 : -20)}`}
              animate={{
                d: [
                  `M0 ${i * 80} L1440 ${i * 80 + (i % 2 === 0 ? 20 : -20)}`,
                  `M0 ${i * 80 + 10} L1440 ${i * 80 + (i % 2 === 0 ? -10 : 30)}`,
                  `M0 ${i * 80} L1440 ${i * 80 + (i % 2 === 0 ? 20 : -20)}`,
                ]
              }}
              transition={{ duration: 15 + i, repeat: Infinity, ease: "linear" }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <Motion.path
              key={`v-${i}`}
              d={`M${i * 100} 0 L${i * 100 + (i % 2 === 0 ? 30 : -30)} 800`}
              animate={{
                d: [
                  `M${i * 100} 0 L${i * 100 + (i % 2 === 0 ? 30 : -30)} 800`,
                  `M${i * 100 + 20} 0 L${i * 100 + (i % 2 === 0 ? -20 : 40)} 800`,
                  `M${i * 100} 0 L${i * 100 + (i % 2 === 0 ? 30 : -30)} 800`,
                ]
              }}
              transition={{ duration: 18 + i, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </g>

        {/* Highlighted Route Paths */}
        <Motion.path
          d="M100 200 Q 400 150, 700 400 T 1300 300"
          stroke="#991b1b"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          fill="none"
          animate={{ strokeDashoffset: -100 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="opacity-40"
        />
        <Motion.path
          d="M -100 600 Q 300 500, 600 700 T 1440 650"
          stroke="#991b1b"
          strokeWidth="1"
          fill="none"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="opacity-20"
        />

        {/* Location Dots & Intersections */}
        {[
          { x: 400, y: 153 },
          { x: 700, y: 400 },
          { x: 1100, y: 345 },
          { x: 300, y: 560 },
          { x: 900, y: 640 },
        ].map((point, i) => (
          <Motion.g key={i}>
            <circle cx={point.x} cy={point.y} r="3" fill="#991b1b" className="opacity-20" />
            <Motion.circle
              cx={point.x}
              cy={point.y}
              r="8"
              stroke="#991b1b"
              strokeWidth="0.5"
              fill="none"
              animate={{ r: [8, 15, 8], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
            />
          </Motion.g>
        ))}
      </Motion.svg>

      {/* Floating Pin Outlines */}
      <Motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] opacity-[0.05]"
      >
        <MapPin size={120} strokeWidth={0.5} />
      </Motion.div>
      <Motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[12%] opacity-[0.05]"
      >
        <MapPin size={160} strokeWidth={0.5} />
      </Motion.div>

      {/* Overlay Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_80%)]" />
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
      id="home"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <Motion.div 
          style={{ y: y1, opacity }}
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter text-black mb-12 leading-[0.8] selection:bg-[#991b1b] selection:text-white"
          >
            precision <br className="hidden sm:block" />
            <span className="text-[#991b1b]/10 hover:text-[#991b1b]/20 transition-colors duration-1000">tracking.</span>
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-black/40 max-w-2xl mb-16 leading-relaxed font-medium tracking-tight"
          >
            Elite 4G GPS infrastructure and real-time response software. Built for India's most demanding logistics and asset security environments.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center"
          >
            <HashSectionLink
              sectionId="products"
              className="group relative inline-flex items-center justify-center gap-4 rounded-full bg-[#991b1b] px-12 py-6 text-sm font-black text-white transition-all hover:scale-105 active:scale-95 shadow-[0_32px_64px_-16px_rgba(153,27,27,0.4)] w-full sm:w-auto overflow-hidden btn-ripple uppercase tracking-widest"
            >
              <span className="relative z-10">Advanced Catalog</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </HashSectionLink>
            
            <HashSectionLink
              sectionId="contact"
              className="inline-flex items-center justify-center gap-4 rounded-full bg-white border border-black/[0.1] px-12 py-6 text-sm font-black text-black transition-all hover:bg-black/[0.02] hover:border-black/[0.2] w-full sm:w-auto uppercase tracking-widest"
            >
              Corporate Sales
              <ChevronRight size={18} className="text-black/20" />
            </HashSectionLink>
          </Motion.div>

          {/* Quick Trust Indicators */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 2, delay: 1 }}
            className="mt-32 flex flex-wrap justify-center gap-x-16 gap-y-8 grayscale"
          >
            <div className="flex items-center gap-2 group cursor-default">
              <ShieldCheck size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Tier-1 Security</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <MapPin size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Real-time Telemetry</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Zap size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">4G Architecture</span>
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
