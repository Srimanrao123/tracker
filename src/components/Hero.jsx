import React from 'react';
import { HashSectionLink } from './HashSectionLink';
import { COMPANY_LEGAL_NAME, SERVICE_HEADLINE, TAGLINE } from '../config/company';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const features = [
  'Live location & route history',
  '4G connectivity built for India',
  'Engine cut-off, geofence & instant alerts',
];

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-[#FAFAFA] pt-24 md:pt-28"
      id="home"
    >
      {/* Soft mesh / iridescent backdrop — premium light theme */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(0,122,255,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(0,122,255,0.06),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(250,250,250,0)_35%,rgba(250,250,250,0)_100%)]" />
        {/* Very subtle fabric-like noise */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6">
            <Motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500"
            >
              {COMPANY_LEGAL_NAME}
            </Motion.p>

            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="font-sans text-[2.65rem] font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-[3.45rem]"
            >
              <span className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span>Precision GPS</span>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF] text-white shadow-lg shadow-blue-500/30 sm:h-12 sm:w-12">
                  <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                </span>
              </span>
              <span className="mt-1 block text-gray-800">tracking for vehicles & fleets.</span>
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-gray-600 sm:text-[17px]"
            >
              {SERVICE_HEADLINE} — {TAGLINE}. Cars, bikes, fleets, and assets on the map with reliable
              hardware, field support, and leading software platforms.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <HashSectionLink
                sectionId="products"
                className="inline-flex items-center justify-center rounded-full bg-[#007AFF] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_-8px_rgba(0,122,255,0.55)] transition hover:bg-[#0066DD] hover:shadow-[0_14px_44px_-8px_rgba(0,122,255,0.6)]"
              >
                View products
              </HashSectionLink>
              <HashSectionLink
                sectionId="contact"
                className="inline-flex items-center justify-center rounded-full border border-gray-300/90 bg-white/60 px-7 py-3.5 text-sm font-semibold text-gray-800 backdrop-blur-sm transition hover:border-gray-400 hover:bg-white"
              >
                Contact us
              </HashSectionLink>
            </Motion.div>
          </div>

          {/* Visual + side list */}
          <div className="relative lg:col-span-6">
            <Motion.ul
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="mb-8 space-y-3 pl-1 sm:absolute sm:right-0 sm:top-8 sm:z-20 sm:mb-0 sm:max-w-[240px] lg:top-12"
            >
              {features.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm font-medium leading-snug text-gray-700 sm:text-[15px]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#007AFF]" />
                  {line}
                </li>
              ))}
            </Motion.ul>

            <Motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="relative mx-auto flex max-w-lg justify-center lg:max-w-none"
            >
              <div className="relative aspect-[4/3] w-full max-w-[520px] lg:max-w-none">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/[0.12] via-transparent to-indigo-500/[0.08] blur-2xl" />
                <Motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                  className="relative flex h-full items-center justify-center"
                >
                  <img
                    src="/hero-mockup.png"
                    alt={`${COMPANY_LEGAL_NAME} — mobile tracking`}
                    className="relative z-10 w-[92%] max-w-md object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.12)] lg:w-full lg:max-w-lg"
                  />
                </Motion.div>
              </div>

              {/* Glass metric card — Nexa-style stat */}
              <Motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="absolute -bottom-2 right-0 z-20 max-w-[260px] rounded-2xl border border-white/70 bg-white/65 p-4 shadow-[0_16px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-md sm:bottom-4 sm:right-2 lg:-right-2"
              >
                <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                  Network readiness
                </p>
                <div className="mt-1 flex items-end gap-2">
                  <span className="text-3xl font-bold tabular-nums tracking-tight text-gray-900">
                    4G
                  </span>
                  <span className="mb-1 inline-flex items-center gap-0.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                    <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.5} />
                    India
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  Built for prepaid SIM workflows you already use.
                </p>
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
