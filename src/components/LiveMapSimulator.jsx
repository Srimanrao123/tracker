import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Navigation, Activity, ShieldCheck } from 'lucide-react';
import TelemetryMap from './TelemetryMap';

const LiveMapSimulator = () => {
  const [position, setPosition] = useState({ lat: 17.385412, lng: 78.487114 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.0005,
        lng: prev.lng + (Math.random() - 0.5) * 0.0005,
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-32 sm:py-48 overflow-hidden" id="live-map">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#991b1b]/[0.05] border border-[#991b1b]/[0.1] text-[10px] font-bold uppercase tracking-[0.4em] text-[#991b1b] mb-8 w-fit mx-auto"
          >
            Live Environment
          </Motion.div>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-black mb-10 selection:bg-[#991b1b] selection:text-white"
          >
            Real-time <span className="text-[#991b1b]/30">Telemetry.</span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-black/50 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Experience precision tracking at its finest. Monitor system coordinates, velocity, and secure link health in real-time.
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative h-[500px] md:h-[700px] rounded-[64px] overflow-hidden bg-black border border-black/[0.05] shadow-[0_64px_128px_-32px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute inset-0 z-0">
              <TelemetryMap lat={position.lat} lng={position.lng} />
            </div>

            <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/20" />

            <div className="absolute bottom-10 left-10 p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 hidden md:block z-20">
              <div className="flex items-center gap-3 text-white">
                <div className="h-1.5 w-1.5 rounded-full bg-[#991b1b] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">System Online</span>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="flex-1 p-12 rounded-[64px] bg-white border border-black/[0.03] soft-shadow hover:shadow-[0_48px_96px_-24px_rgba(153,27,27,0.08)] transition-all duration-700">
              <div className="flex items-center gap-4 mb-16">
                <div className="h-3 w-3 rounded-full bg-[#991b1b] animate-pulse shadow-[0_0_10px_rgba(153,27,27,1)]" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#991b1b]">Live Telemetry</h3>
              </div>

              <div className="space-y-12">
                <div>
                  <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.3em] mb-4">Coordinates</p>
                  <div className="flex flex-col gap-3">
                    <p className="text-3xl font-black text-black tracking-tighter selection:bg-[#991b1b] selection:text-white">{position.lat.toFixed(6)}° N</p>
                    <p className="text-3xl font-black text-black tracking-tighter selection:bg-[#991b1b] selection:text-white">{position.lng.toFixed(6)}° E</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.3em] mb-4">Velocity</p>
                  <div className="flex items-end gap-3 text-[#991b1b]">
                    <p className="text-6xl font-black tracking-tighter">42.5</p>
                    <p className="text-sm font-black italic mb-3 opacity-40 uppercase tracking-widest">km/h</p>
                    <Navigation size={24} className="opacity-20 ml-auto mb-3 rotate-45" />
                  </div>
                </div>

                <div className="pt-12 border-t border-black/[0.05]">
                  <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.3em] mb-6">Security State</p>
                  <div className="flex items-center gap-4 px-6 py-5 rounded-[24px] bg-[#991b1b] text-white shadow-2xl shadow-red-900/30 group cursor-default">
                    <ShieldCheck size={20} className="text-white/40 group-hover:text-white transition-colors" />
                    <span className="text-[11px] font-black uppercase tracking-[0.1em]">AES-256 Link Active</span>
                    <Activity size={14} className="text-white/20 ml-auto animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[32px] bg-black/[0.01] border border-dashed border-black/[0.1] text-center opacity-40">
              <p className="text-[9px] font-black text-black uppercase tracking-[0.3em]">Hardware Encrypted Transmission</p>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveMapSimulator;
