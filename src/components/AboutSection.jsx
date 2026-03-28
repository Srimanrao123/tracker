import React from 'react';
import { Shield, MapPin, Smartphone } from 'lucide-react';
import {
  COMPANY_LEGAL_NAME,
  DIRECTOR_ROLE,
  MANAGING_DIRECTOR,
  SERVICE_HEADLINE,
  SOFTWARE_PLATFORMS,
  TAGLINE,
} from '../config/company';

const AboutSection = () => {
  return (
    <section className="relative scroll-mt-24 border-t border-white/5 bg-[#08121a] py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-[#8ce99a]">
            {COMPANY_LEGAL_NAME}
          </h2>
          <h3 className="mb-4 font-serif text-4xl font-semibold text-white md:text-5xl">
            {SERVICE_HEADLINE}
          </h3>
          <p className="mx-auto max-w-2xl font-sans leading-relaxed text-gray-400">{TAGLINE}.</p>
          <p className="mx-auto mt-6 max-w-xl text-sm text-gray-500">
            <span className="text-gray-400">{DIRECTOR_ROLE}:</span>{' '}
            <span className="font-medium text-gray-300">{MANAGING_DIRECTOR}</span>
          </p>
        </div>

        <div className="mb-12 text-center">
          <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500">
            Software &amp; platforms we work with
          </h4>
          <ul className="mt-4 flex flex-wrap justify-center gap-3">
            {SOFTWARE_PLATFORMS.map((name) => (
              <li
                key={name}
                className="rounded-full border border-white/10 bg-[#0a151f] px-4 py-2 text-sm text-gray-300"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-[#0a151f] p-8 transition-colors hover:border-[#8ce99a]/30">
            <Shield className="mb-6 h-10 w-10 text-[#8ce99a]" />
            <h4 className="mb-3 font-serif text-xl text-white">Sales &amp; service</h4>
            <p className="font-sans text-sm leading-relaxed text-gray-400">
              End-to-end GPS hardware, installation support, and ongoing service so your trackers stay
              on the road and on the map.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#0a151f] p-8 transition-colors hover:border-[#8ce99a]/30">
            <MapPin className="mb-6 h-10 w-10 text-[#8ce99a]" />
            <h4 className="mb-3 font-serif text-xl text-white">Hyderabad &amp; beyond</h4>
            <p className="font-sans text-sm leading-relaxed text-gray-400">
              Based in Balapur, Ranga Reddy — serving fleets, families, and businesses who need dependable
              live tracking across India.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#0a151f] p-8 transition-colors hover:border-[#8ce99a]/30">
            <Smartphone className="mb-6 h-10 w-10 text-[#8ce99a]" />
            <h4 className="mb-3 font-serif text-xl text-white">App ecosystem</h4>
            <p className="font-sans text-sm leading-relaxed text-gray-400">
              We align with leading India-ready platforms so you get apps, alerts, and reporting that fit
              your operation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
