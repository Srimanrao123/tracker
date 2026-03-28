import React from 'react';
import { ArrowRight, Cpu, Database, Network } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const TransformSection = () => {
  return (
    <section className="relative bg-white py-48 overflow-hidden" id="transform">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-16 mb-40">
          <div className="max-w-4xl">
            <Motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="h-px w-8 bg-[#991b1b]" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#991b1b]">
                Core Protocols
              </span>
            </Motion.div>
            <Motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-black leading-[0.8] mb-12 selection:bg-[#991b1b] selection:text-white"
            >
              beyond standard <br />
              <span className="text-[#991b1b]/10 hover:text-[#991b1b]/20 transition-colors duration-1000">tracking.</span>
            </Motion.h2>
          </div>
          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:pt-12"
          >
            <p className="text-xl text-black/40 font-medium max-w-xs leading-relaxed border-l-2 border-[#991b1b]/10 pl-8">
              Building a distributed network of asset intelligence and military-grade hardware safeguards.
            </p>
          </Motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/[0.03] border border-black/[0.03] rounded-[64px] overflow-hidden">
          {[
            {
              icon: Cpu,
              title: "AI Core",
              desc: "Localized neural engines processing fleet telemetry in real-time.",
              stat: "0.2ms Latency",
              id: "0x4F2"
            },
            {
              icon: Database,
              title: "Encrypted Mesh",
              desc: "Military-grade data clusters providing redundant security layers.",
              stat: "AES-256 Bit",
              id: "0x9A1"
            },
            {
              icon: Network,
              title: "Hyper-sync",
              desc: "Continuous 5G-ready stream for zero-blind-spot monitoring.",
              stat: "99.9% Uptime",
              id: "0x7E8"
            }
          ].map((item, i) => (
            <div key={i} className="group relative bg-white p-12 hover:bg-[#f8f8f8] transition-colors duration-700">
               <div className="flex justify-between items-start mb-20">
                 <div className="h-14 w-14 rounded-2xl border border-black/[0.05] flex items-center justify-center group-hover:bg-[#991b1b] group-hover:border-transparent transition-all duration-500">
                    <item.icon size={24} strokeWidth={1.5} className="group-hover:text-white transition-colors" />
                 </div>
                 <span className="text-[10px] font-mono text-black/10 group-hover:text-[#991b1b]/30 transition-colors">{item.id}</span>
               </div>
               
               <div className="space-y-6">
                 <span className="text-[10px] font-black text-[#991b1b] uppercase tracking-widest">{item.stat}</span>
                 <h3 className="text-4xl font-black text-black tracking-tight">{item.title}</h3>
                 <p className="text-lg text-black/40 font-medium leading-relaxed max-w-xs">
                   {item.desc}
                 </p>
               </div>

               <div className="mt-20 pt-8 border-t border-black/[0.03] flex items-center justify-between">
                 <div className="flex items-center gap-4 cursor-pointer group/link">
                   <div className="h-8 w-8 rounded-full bg-black/5 flex items-center justify-center group-hover/link:bg-black group-hover/link:text-white transition-all">
                     <ArrowRight size={14} />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Protocol Specs</span>
                 </div>
                 
                 {/* Floating micro-dot */}
                 <div className="h-1 w-1 rounded-full bg-[#991b1b] opacity-0 group-hover:opacity-100 animate-pulse transition-opacity" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
