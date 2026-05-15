import React from 'react';
import { Shield, Smartphone, CheckCircle2 } from 'lucide-react';
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

const labelClass =
  'text-[10px] font-black uppercase tracking-[0.32em] text-[#991b1b]/40 leading-none';
const dividerClass = 'border-b border-black/[0.06]';
const tagClass =
  'inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#991b1b]/[0.04] border border-[#991b1b]/[0.06] text-[12px] font-bold text-[#991b1b] leading-tight';

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
              className="relative z-10 overflow-hidden rounded-[40px] sm:rounded-[48px] lg:rounded-[56px] bg-white border border-black/[0.05] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.12)] group-hover:shadow-[0_56px_112px_-32px_rgba(153,27,27,0.14)] transition-shadow duration-700"
            >
              <div className="md:hidden relative w-full bg-white border-b border-black/[0.06]">
                <img
                  src={MANAGING_DIRECTOR_IMAGE}
                  alt={`${MANAGING_DIRECTOR}, ${DIRECTOR_ROLE}`}
                  className="director-portrait w-full h-[min(380px,72vw)] sm:h-[min(440px,65vw)] object-contain object-center mx-auto block"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,40%)_minmax(0,1fr)] md:min-h-[560px] lg:grid-cols-[minmax(220px,42%)_minmax(0,1fr)] lg:min-h-[600px] xl:min-h-[660px]">
                <div className="hidden md:flex relative min-h-[560px] lg:min-h-[600px] xl:min-h-[660px] border-b md:border-b-0 md:border-r border-black/[0.06] bg-white">
                  <img
                    src={MANAGING_DIRECTOR_IMAGE}
                    alt={`${MANAGING_DIRECTOR}, ${DIRECTOR_ROLE}`}
                    className="director-portrait absolute inset-0 h-full w-full object-contain object-center"
                  />
                  <div
                    className="absolute inset-y-0 right-0 w-6 xl:w-8 bg-gradient-to-l from-white/30 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-col p-8 sm:p-10 lg:p-12 lg:pl-8 xl:pl-10">
                  <div className={`flex items-center gap-4 pb-8 sm:pb-9 ${dividerClass}`}>
                    <OfficeLocationMap />
                    <div className="min-w-0 pt-0.5">
                      <p className={`${labelClass} mb-2`}>Corporate Office</p>
                      <p className="text-2xl sm:text-[1.7rem] font-black text-black tracking-tight leading-none">
                        Hyderabad, India
                      </p>
                    </div>
                  </div>

                  <div className={`flex-1 py-8 sm:py-9 ${dividerClass}`}>
                    <p className={`${labelClass} mb-1.5`}>{SOFTWARE_SECTION_TITLE}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-black/20">
                      {SOFTWARE_SECTION_SUBTITLE}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {SOFTWARE_PLATFORMS.map((platform, i) => (
                        <span key={i} className={tagClass}>
                          <CheckCircle2
                            size={14}
                            className="shrink-0 text-[#991b1b]/45"
                            strokeWidth={2.5}
                          />
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 sm:pt-10 lg:mt-auto lg:pt-10">
                    <p className={`${labelClass} mb-2.5`}>{DIRECTOR_ROLE}</p>
                    <p className="text-[1.45rem] sm:text-[1.65rem] lg:text-[1.75rem] xl:text-[1.85rem] font-black text-black tracking-tight leading-[1.2] selection:bg-[#991b1b] selection:text-white">
                      {MANAGING_DIRECTOR}
                    </p>
                  </div>
                </div>
              </div>
            </Motion.div>

            <div className="absolute top-8 left-8 w-full h-full rounded-[40px] sm:rounded-[48px] lg:rounded-[56px] border border-[#991b1b]/[0.08] -z-0 opacity-20 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
