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
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
             <span className="text-[9px] sm:text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] whitespace-nowrap">Developed and designed by</span>
             <a
              href="https://webauraindia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 font-black text-white text-[10px] sm:text-[11px] uppercase tracking-[0.4em] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.05] shadow-[0_0_25px_rgba(153,27,27,0.5)] bg-black"
            >
              {/* Permanent intense spinning neon border */}
              <div className="absolute -inset-[200%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#ff2a2a_30%,#991b1b_50%,#000_100%)] opacity-100" />
              <div className="absolute inset-[1.5px] bg-black rounded-full transition-colors duration-300 group-hover:bg-[#1a0505]" />
              
              {/* Text and permanent pulsing arrow */}
              <span className="relative z-10 flex items-center text-red-50 drop-shadow-[0_0_8px_rgba(255,40,40,0.8)]">
                WEBAURA
                <span className="ml-2 animate-pulse text-red-500 text-[14px] leading-none mb-0.5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
