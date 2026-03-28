import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const TabSwitchWarning = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      // If the document becomes hidden (user switches tab or minimizes window)
      if (document.hidden) {
        setShowWarning(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <AnimatePresence>
      {showWarning && (
        <Motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B0F19]/90 backdrop-blur-xl"
        >
          <Motion.div 
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-[#161a23] border border-red-500/40 shadow-[0_0_50px_rgba(239,68,68,0.2)] rounded-3xl p-8 md:p-10 max-w-md w-full text-center relative overflow-hidden"
          >
            {/* Background glowing orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex justify-center mb-6 relative z-10">
              <div className="bg-[#0B0F19] p-4 rounded-2xl border border-red-500/30 shadow-inner">
                <AlertTriangle className="w-10 h-10 text-red-500 animate-pulse" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4 font-serif tracking-tight relative z-10">
              Security Alert: <span className="text-red-500">Tab Switched</span>
            </h2>
            
            <p className="text-gray-400 font-sans mb-8 leading-relaxed relative z-10">
              We noticed you left the active tracking session. For secure assessment purposes, please remain on this page and do not switch tabs.
            </p>
            
            <button 
              onClick={() => setShowWarning(false)}
              className="w-full bg-[#0a0c10] border border-red-500 text-white hover:text-red-500 hover:bg-red-500/10 font-bold py-3.5 px-6 rounded-full transition-all duration-300 relative z-10 shadow-[0_0_15px_rgba(239,68,68,0.2)] focus:outline-none focus:ring-2 focus:ring-red-500/50"
            >
              Acknowledge & Return
            </button>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default TabSwitchWarning;
