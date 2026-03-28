import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 600),   // Pulse/Expand
      setTimeout(() => setStage(2), 1400),  // Route Trace
      setTimeout(() => setStage(3), 3000),  // Pin Reveal
      setTimeout(() => setStage(4), 4200),  // Brand Reveal
      setTimeout(() => onComplete(), 6000)  // Transition to site
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.5, ease: premiumEase }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Subtle Background Infrastructure */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 1 ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-x-0 top-0 h-full opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
          }}
        />

        {/* Global Animated Field */}
        <Motion.div
          animate={{ 
            scale: stage >= 1 ? 1 : 0.9,
            rotate: [0, 0.5, -0.5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-[1200px] h-[1200px] flex items-center justify-center"
        >
          {/* Central Pulsing GPS Indicator */}
          <div className="absolute z-50 flex items-center justify-center">
            <Motion.div
              animate={{
                scale: [1, 3, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute h-24 w-24 rounded-full border border-[#991b1b]/20"
            />
            <Motion.div
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: ["0 0 0px #991b1b", "0 0 30px #991b1b", "0 0 0px #991b1b"]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="relative h-4 w-4 rounded-full bg-[#991b1b] z-10"
            />
          </div>

          {/* Animated Route SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 1200 1200">
            <defs>
              <filter id="red-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing route line path */}
            <Motion.path
              d="M 600 600 C 750 450 850 750 1050 550"
              fill="none"
              stroke="#991b1b"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: stage >= 2 ? 1 : 0, 
                opacity: stage >= 2 ? 0.3 : 0 
              }}
              transition={{ duration: 3, ease: premiumEase }}
              filter="url(#red-glow)"
            />

            {/* Path 2 (secondary detail) */}
            <Motion.path
              d="M 600 600 Q 400 500 200 700"
              fill="none"
              stroke="#991b1b"
              strokeWidth="1"
              strokeDasharray="4 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: stage >= 2 ? 1 : 0, 
                opacity: stage >= 2 ? 0.15 : 0 
              }}
              transition={{ duration: 4, ease: premiumEase, delay: 0.5 }}
            />

            {/* Moving Indicator */}
            {stage >= 2 && (
              <Motion.g
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 3, ease: premiumEase }}
                style={{ offsetPath: "path('M 600 600 C 750 450 850 750 1050 550')" }}
              >
                <circle r="6" fill="#991b1b" />
                <Motion.circle
                  r="15"
                  stroke="#991b1b"
                  strokeWidth="1"
                  fill="none"
                  animate={{ r: [15, 25, 15], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </Motion.g>
            )}

            {/* Digital Pins Reveal */}
            {stage >= 3 && [
              { x: 500, y: 780, d: 0 },
              { x: 800, y: 450, d: 0.2 },
              { x: 920, y: 850, d: 0.4 },
              { x: 380, y: 480, d: 0.6 }
            ].map((pin, i) => (
              <Motion.g
                key={i}
                initial={{ opacity: 0, scale: 0, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15, 
                  delay: pin.d 
                }}
              >
                <circle cx={pin.x} cy={pin.y} r="5" fill="#991b1b" />
                <Motion.circle 
                  cx={pin.x} cy={pin.y} r="12" 
                  stroke="#991b1b" strokeWidth="0.5" fill="none"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: pin.d }}
                />
              </Motion.g>
            ))}
          </svg>
        </Motion.div>

        {/* Final Brand Reveal - The Logo Signature */}
        <AnimatePresence>
          {stage >= 4 && (
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-white z-[60]"
            >
              <Motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.5, ease: premiumEase }}
                className="flex flex-col items-center"
              >
                 <img
                   src="/vikram-gps-tracker-logo.png"
                   alt="Vikram GPS Logo"
                   className="h-48 md:h-64 lg:h-[20rem] xl:h-[24rem] w-auto object-contain selection:bg-transparent"
                 />
                 
                 <Motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 120, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-px bg-[#991b1b]/20 mt-20"
                 />
              </Motion.div>
            </Motion.div>
          )}
        </AnimatePresence>

      </div>
    </Motion.div>
  );
};

export default IntroAnimation;
