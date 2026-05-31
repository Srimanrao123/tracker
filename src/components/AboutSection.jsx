import React from 'react';
import { Shield, Smartphone, CheckCircle2, MapPin } from 'lucide-react';
import OfficeLocationMap from './OfficeLocationMap';
import {
  DIRECTOR_ROLE,
  MANAGING_DIRECTOR,
  MANAGING_DIRECTOR_IMAGE,
  SERVICE_HEADLINE,
  SOFTWARE_PLATFORMS,
  SOFTWARE_SECTION_SUBTITLE,
  SOFTWARE_SECTION_TITLE,
  TAGLINE,
} from '../config/company';
import { motion as Motion } from 'framer-motion';

const isAccentWord = (word) =>
  /sales|service|&/i.test(word.replace(/[,]/g, ''));

const AboutSection = () => {
  return (
    <section className="relative mt-16 sm:mt-24 bg-[#fcfcfc] pb-32 sm:pb-48 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[#991b1b]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#991b1b]/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div
        id="about"
        className="scroll-mt-20 sm:scroll-mt-24 relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-start">
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
              className="text-5xl md:text-7xl lg:text-[5.25rem] xl:text-8xl font-black tracking-tighter text-black mb-10 leading-[0.92] selection:bg-[#991b1b] selection:text-white"
            >
              {SERVICE_HEADLINE.split(' ').map((word, i) => (
                <span key={i} className={isAccentWord(word) ? 'text-[#991b1b]/35' : ''}>
                  {word}{' '}
                </span>
              ))}
            </Motion.h2>
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-black/45 leading-relaxed mb-14 font-medium max-w-xl"
            >
              {TAGLINE}. Based in Hyderabad, we serve businesses across India with elite 4G hardware and
              real-time response infrastructure.
            </Motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Secure & Reliable',
                  desc: 'End-to-end encryption and military-grade hardware.',
                },
                {
                  icon: Smartphone,
                  title: 'Mobile First',
                  desc: 'Powerful apps and real-time alerts on your phone.',
                },
              ].map((item, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex flex-col gap-5 p-8 sm:p-10 rounded-[40px] bg-white border border-black/[0.03] soft-shadow hover:shadow-[0_32px_64px_-16px_rgba(153,27,27,0.08)] transition-all duration-700 hover:-translate-y-1 group"
                >
                  <item.icon
                    size={26}
                    className="text-[#991b1b] opacity-25 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                  <div>
                    <h4 className="text-base font-black text-black mb-1.5 group-hover:text-[#991b1b] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-[15px] text-black/40 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          <div className="relative group/card w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:sticky lg:top-28">
            <Motion.div
              initial={{ opacity: 0, scale: 0.98, y: 32 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 overflow-hidden rounded-[32px] sm:rounded-[40px] bg-white border border-black/[0.05] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.12)] group-hover/card:shadow-[0_56px_112px_-32px_rgba(153,27,27,0.14)] transition-shadow duration-700"
            >
              <div className="relative w-full h-80 sm:h-[400px] flex items-end justify-center overflow-hidden bg-transparent pt-6">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#991b1b]/[0.03] rounded-full blur-[50px] pointer-events-none" />
                <img
                  src={MANAGING_DIRECTOR_IMAGE}
                  alt={`${MANAGING_DIRECTOR}, ${DIRECTOR_ROLE}`}
                  className="w-full h-full object-contain object-bottom drop-shadow-lg"
                />
              </div>

              <div className="flex flex-col p-6 sm:p-8 relative z-20 bg-white">
                <div className="text-center pb-6 sm:pb-7 border-b border-black/[0.06]">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#991b1b] mb-1.5">
                    {DIRECTOR_ROLE}
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-tight">
                    {MANAGING_DIRECTOR}
                  </p>
                </div>

                <div className="py-6 sm:py-7 border-b border-black/[0.06]">
                  <div className="flex items-start gap-3.5 sm:gap-4 justify-center sm:justify-start">
                    <div className="relative shrink-0">
                      <div className="rounded-2xl overflow-hidden ring-2 ring-white shadow-sm">
                        <OfficeLocationMap />
                      </div>
                      <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#991b1b]">
                          <MapPin size={8} className="text-white" strokeWidth={3} />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5 text-left">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#991b1b]/70 leading-none mb-1.5">
                        Corporate Office
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
                        Hyderabad, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 sm:pt-7">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#991b1b]/70 leading-none mb-1 text-center sm:text-left">
                    {SOFTWARE_SECTION_TITLE}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/30 text-center sm:text-left">
                    {SOFTWARE_SECTION_SUBTITLE}
                  </p>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SOFTWARE_PLATFORMS.map((platform, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 rounded-xl bg-[#991b1b]/[0.025] border border-[#991b1b]/[0.06] px-4 py-3 transition-colors duration-300 hover:bg-[#991b1b]/[0.05] hover:border-[#991b1b]/[0.1]"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-[#991b1b]"
                          strokeWidth={2.5}
                        />
                        <span className="text-[12px] sm:text-[13px] font-bold text-black/80 leading-snug truncate">
                          {platform}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Motion.div>

            <div className="absolute top-8 left-8 w-full h-full rounded-[32px] sm:rounded-[40px] border border-[#991b1b]/[0.08] -z-0 opacity-40 group-hover/card:translate-x-3 group-hover/card:translate-y-3 transition-transform duration-700 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
