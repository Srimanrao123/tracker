import React from 'react';
import { motion as Motion } from 'framer-motion';
import { MapPin, ShieldCheck, Zap, Globe, Cpu, Layers } from 'lucide-react';

const RedefineSection = () => {
  return (
    <section className="relative py-48 overflow-hidden bg-[#f8f8f8]" id="redefine">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-12 mb-20">
            <Motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px w-12 bg-[#991b1b]/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#991b1b]">
                The Next Evolution
              </span>
            </Motion.div>
            <Motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-[0.8] tracking-tighter mb-12 selection:bg-[#991b1b] selection:text-white"
            >
              REDEFINING <br />
              <span className="text-[#991b1b]/10 hover:text-[#991b1b]/20 transition-colors duration-1000">INTELLIGENCE.</span>
            </Motion.h2>
          </div>

          <div className="lg:col-span-5 space-y-20">
            <Motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-black/40 leading-[1.3] font-medium tracking-tight"
            >
              Introducing a breakthrough in automotive monitoring. Precision tracking, intelligent alerts, and seamless control—all from a single, unified interface.
            </Motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
              {[
                { icon: ShieldCheck, title: "Precision Hardware", desc: "Military-grade components built for Indian road conditions." },
                { icon: Zap, title: "Instant Sync", desc: "Latency-free data updates across all your devices." },
                { icon: Globe, title: "Global Mesh", desc: "Redundant network connectivity for zero-blind-spot monitoring." }
              ].map((item, i) => (
                <Motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group hover:translate-x-2 transition-transform duration-500"
                >
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-white border border-[#991b1b]/[0.05] flex items-center justify-center text-[#991b1b] group-hover:bg-[#991b1b] group-hover:text-white transition-all duration-500 shadow-sm shadow-red-900/5">
                    <item.icon size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-black mb-1.5 uppercase tracking-widest group-hover:text-[#991b1b] transition-colors">{item.title}</h4>
                    <p className="text-xs text-black/40 font-medium leading-relaxed max-w-xs">{item.desc}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <Motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 lg:p-12"
            >
              {/* Massive Floating Mockup with Detailed UI */}
              <div className="relative mx-auto w-[300px] sm:w-[380px] aspect-[1/2] rounded-[64px] bg-black ring-[12px] ring-black shadow-[0_80px_160px_-40px_rgba(153,27,27,0.3)] overflow-hidden">
                <div className="absolute inset-0 bg-[#0a0a0a]">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&h=1600"
                    alt="Map Data"
                    className="w-full h-full object-cover opacity-20 filter grayscale hue-rotate-180"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#991b1b]/10 to-transparent" />
                </div>
                
                {/* Simulated App UI */}
                <div className="absolute inset-0 p-8 flex flex-col pt-16">
                  <div className="flex justify-between items-center mb-12">
                    <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                       <Cpu size={14} className="text-white/40" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#991b1b] text-white text-[8px] font-black uppercase tracking-widest">Live</div>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="p-6 rounded-[32px] bg-white/10 backdrop-blur-3xl border border-white/10 shadow-2xl">
                       <div className="flex items-center gap-3 mb-6">
                         <div className="h-2 w-2 rounded-full bg-[#991b1b] animate-pulse" />
                         <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Vehicle Alpha</span>
                       </div>
                       <div className="h-4 w-5/6 bg-white rounded-full mb-4" />
                       <div className="flex justify-between items-center pt-4 border-t border-white/5">
                         <div className="flex flex-col gap-1">
                           <span className="text-[8px] font-bold text-white/20 uppercase">Speed</span>
                           <span className="text-xl font-black text-white tracking-tighter">72 KM/H</span>
                         </div>
                         <MapPin size={24} className="text-[#991b1b]" />
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-5 rounded-[28px] bg-white/5 backdrop-blur-xl border border-white/5">
                         <Layers size={14} className="text-white/20 mb-3" />
                         <div className="h-1.5 w-8 bg-[#991b1b] rounded-full" />
                       </div>
                       <div className="p-5 rounded-[28px] bg-white/5 backdrop-blur-xl border border-white/5 flex items-center justify-center">
                         <Zap size={14} strokeWidth={3} className="text-white/20" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_50%,rgba(153,27,27,0.05)_0%,transparent_70%)] -z-10" />
            </Motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RedefineSection;
