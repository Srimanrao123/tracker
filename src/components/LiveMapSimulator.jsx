import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { MapPin, Navigation, Activity } from 'lucide-react';

const LiveMapSimulator = () => {
  const [position, setPosition] = useState({ lat: 40.7128, lng: -74.0060 });
  
  // Simulate movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative bg-[#0B0F19]" id="live-map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 text-offset-shadow-light">
            Live GPS Tracking Preview
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-sans">
            Watch the simulated tracker updates in real time. See latitude, longitude, and status change as the target moves.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center bg-[#161a23] rounded-3xl p-4 md:p-8 border border-[#2a303c] shadow-2xl">
          
          {/* Map Area */}
          <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] bg-[#0A0A0A] rounded-2xl relative overflow-hidden border border-[#2a303c] flex justify-center items-center">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ 
                   backgroundImage: `linear-gradient(rgba(0,122,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,122,255,0.3) 1px, transparent 1px)`,
                   backgroundSize: '40px 40px'
                 }}>
            </div>
            
            {/* Map Placeholder Graphic */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000&h=800')] bg-cover bg-center opacity-40 mix-blend-luminosity brightness-50"></div>

            {/* Simulated Tracker Icon with Ping */}
            <Motion.div 
              animate={{ 
                x: [0, 40, 20, -20, 0],
                y: [0, -30, 20, 10, 0]
              }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="relative z-10 flex justify-center items-center"
            >
              <div className="absolute w-16 h-16 bg-red-500/20 rounded-full animate-ping"></div>
              <div className="w-8 h-8 bg-black rounded-full border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)] z-10 flex justify-center items-center">
                 <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </Motion.div>
          </div>

          {/* Data Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-6">
            <div className="bg-[#1a1e27] border border-[#2a303c] p-6 rounded-2xl h-full shadow-inner">
              <div className="flex items-center space-x-3 mb-6">
                <Activity className="text-red-500 animate-pulse" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-sans">Live Telemetry</h3>
              </div>
              
              <div className="space-y-5">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Latitude</p>
                  <p className="text-xl font-mono text-white bg-[#101319] py-2 px-3 rounded-md border border-[#2a303c]">{position.lat.toFixed(6)}° N</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Longitude</p>
                  <p className="text-xl font-mono text-white bg-[#101319] py-2 px-3 rounded-md border border-[#2a303c]">{position.lng.toFixed(6)}° W</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Speed</p>
                  <div className="text-xl font-mono text-white bg-[#101319] py-2 px-3 rounded-md border border-[#2a303c] flex items-center justify-between">
                    <span>42.5 mph</span>
                    <Navigation className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Status</p>
                  <div className="text-sm font-semibold text-green-400 bg-green-400/10 py-2 px-3 rounded-md border border-green-400/20 inline-flex items-center w-full">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Secure Link Active
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LiveMapSimulator;
