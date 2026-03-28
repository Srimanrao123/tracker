import React from 'react';
import { HashSectionLink } from './HashSectionLink';
import { COMPANY_LEGAL_NAME, TAGLINE } from '../config/company';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] mt-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center space-x-3">
              <img src="/vikram-logo.svg" alt={COMPANY_LEGAL_NAME} className="h-8 w-8" />
              <div>
                <p className="text-lg font-bold text-white">{COMPANY_LEGAL_NAME}</p>
                <p className="text-sm text-gray-400">{TAGLINE}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <HashSectionLink sectionId="home" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </HashSectionLink>
            <HashSectionLink sectionId="about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </HashSectionLink>
            <HashSectionLink sectionId="products" className="text-sm text-gray-400 hover:text-white transition-colors">
              Products
            </HashSectionLink>
            <HashSectionLink sectionId="contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </HashSectionLink>
          </div>
        </div>

        <div className="mt-10 space-y-2 text-center text-xs sm:text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {COMPANY_LEGAL_NAME}. All rights reserved.</p>
          <p>
            Developed and designed by{' '}
            <a
              href="https://webauraindia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white hover:decoration-white/40"
            >
              WebAura
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
