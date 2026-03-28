import React from 'react';
import { HashSectionLink } from './HashSectionLink';
import { COMPANY_LEGAL_NAME, TAGLINE } from '../config/company';

const Footer = () => {
  return (
    <footer className="bg-white py-32 border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
          <div className="flex flex-col gap-6">
            <img
              src="/vikram-gps-tracker-logo.png"
              alt={`${COMPANY_LEGAL_NAME} logo`}
              className="h-16 w-auto max-w-[220px] object-contain object-left"
            />
            <p className="text-sm text-black/40 max-w-sm font-medium leading-relaxed tracking-tight">{TAGLINE}</p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {['Home', 'About', 'Products', 'Contact'].map((item) => (
              <HashSectionLink 
                key={item}
                sectionId={item.toLowerCase()} 
                className="text-[10px] font-black text-black/40 hover:text-[#991b1b] transition-all duration-300 uppercase tracking-[0.3em] relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#991b1b] transition-all duration-300 group-hover:w-full" />
              </HashSectionLink>
            ))}
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} {COMPANY_LEGAL_NAME}. Professional Grade Hardware.
          </p>
          <div className="flex items-center gap-3">
             <span className="text-[9px] font-black text-black/10 uppercase tracking-[0.4em]">Development Partner</span>
             <a
              href="https://webauraindia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black text-black/40 hover:text-[#991b1b] transition-all duration-300 uppercase tracking-[0.2em]"
            >
              WebAura
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
