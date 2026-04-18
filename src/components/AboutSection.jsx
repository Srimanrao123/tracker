import React from 'react';
import { Shield, MapPin, Smartphone, CheckCircle2 } from 'lucide-react';
import {
  COMPANY_LEGAL_NAME,
  DIRECTOR_ROLE,
  MANAGING_DIRECTOR,
  SERVICE_HEADLINE,
  SOFTWARE_PLATFORMS,
  SOFTWARE_SECTION_SUBTITLE,
  SOFTWARE_SECTION_TITLE,
  TAGLINE,
} from '../config/company';
import { motion as Motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="relative mt-16 sm:mt-24 bg-[#fcfcfc] pb-32 sm:pb-48 overflow-hidden">
      {/* Background purely for aesthetic */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[#991b1b]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#991b1b]/[0.01] rounded-full blur-[120px] pointer-events-none" />
      
      <div
        id="about"
        className="scroll-mt-20 sm:scroll-mt-24 relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div className="relative z-20">
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#991b1b]/[0.05] border border-[#991b1b]/[0.1] text-[10px] font-black uppercase tracking-[0.4em] text-[#991b1b] mb-10"
            >
              Hardware & Software Excellence
            </Motion.div>
            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black mb-12 leading-[0.9] selection:bg-[#991b1b] selection:text-white"
            >
              {SERVICE_HEADLINE.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "text-[#991b1b]/30" : ""}>{word} </span>
              ))}
            </Motion.h2>
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-black/40 leading-relaxed mb-16 font-medium max-w-xl"
            >
              {TAGLINE}. Based in Hyderabad, we serve businesses across India with elite 4G hardware and real-time response infrastructure.
            </Motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: 'Secure & Reliable', desc: 'End-to-end encryption and military-grade hardware.' },
                { icon: Smartphone, title: 'Mobile First', desc: 'Powerful apps and real-time alerts on your phone.' },
              ].map((item, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex flex-col gap-6 p-10 rounded-[48px] bg-white border border-black/[0.03] soft-shadow hover:shadow-[0_32px_64px_-16px_rgba(153,27,27,0.08)] transition-all duration-700 hover:-translate-y-2 group"
                >
                  <item.icon size={28} className="text-[#991b1b] opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                  <div>
                    <h4 className="text-lg font-black text-black mb-2 group-hover:text-[#991b1b] transition-colors">{item.title}</h4>
                    <p className="text-base text-black/40 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          <div className="relative group/card">
            <Motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 p-12 rounded-[64px] bg-white border border-black/[0.02] shadow-[0_64px_128px_-32px_rgba(0,0,0,0.08)] group-hover:shadow-[0_80px_160px_-40px_rgba(153,27,27,0.15)] transition-all duration-1000"
            >
              <div className="flex items-center gap-5 mb-16">
                <div className="h-16 w-16 rounded-[28px] bg-[#991b1b] flex items-center justify-center text-white shadow-2xl shadow-red-900/30 group-hover:rotate-12 transition-transform duration-700">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#991b1b]/40 mb-1">Corporate Office</p>
                  <p className="text-2xl font-black text-black tracking-tight">Hyderabad, India</p>
                </div>
              </div>

              <div className="space-y-10">
                <div className="pb-6 border-b border-black/[0.05]">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/20 mb-2">{SOFTWARE_SECTION_TITLE}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#991b1b]/50">{SOFTWARE_SECTION_SUBTITLE}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {SOFTWARE_PLATFORMS.map((platform, i) => (
                    <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#991b1b]/[0.03] border border-[#991b1b]/[0.05] text-[13px] font-black text-[#991b1b] hover:bg-[#991b1b] hover:text-white transition-all duration-300">
                      <CheckCircle2 size={16} className="opacity-40" />
                      {platform}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-black/[0.05]">
                <p className="text-[11px] font-black text-[#991b1b]/30 uppercase tracking-[0.4em] mb-3">{DIRECTOR_ROLE}</p>
                <p className="text-3xl font-black text-black tracking-tighter selection:bg-[#991b1b] selection:text-white">{MANAGING_DIRECTOR}</p>
              </div>
            </Motion.div>
            
            {/* Decotative Card behind */}
            <div className="absolute top-12 left-12 w-full h-full rounded-[64px] border border-[#991b1b]/[0.05] -z-0 opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
