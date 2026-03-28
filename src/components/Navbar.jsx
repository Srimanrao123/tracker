import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { HashSectionLink } from './HashSectionLink';
import { COMPANY_LEGAL_NAME, COMPANY_SHORT_NAME, MAPS_QUERY } from '../config/company';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  /** Light glass bar on home hero; dark bar after scroll or on inner pages */
  const lightMode = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkBase = lightMode
    ? 'text-xs font-medium uppercase tracking-[0.2em] text-gray-600 transition-colors hover:text-gray-900'
    : 'text-xs font-mono uppercase tracking-widest text-gray-400 transition-colors hover:text-white';

  const linkActive = lightMode ? 'text-[#007AFF]' : 'text-[#3b82f6]';

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        lightMode
          ? 'border-b border-black/[0.06] bg-white/75 py-4 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]'
          : 'border-b border-white/5 bg-[#161a23]/95 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/vikram-logo.svg" alt={COMPANY_LEGAL_NAME} className="h-7 w-7" />
            <span
              className={`max-w-[11rem] truncate text-lg font-bold tracking-tight sm:max-w-none md:text-xl ${lightMode ? 'text-gray-900' : 'text-white drop-shadow-sm'}`}
              title={COMPANY_LEGAL_NAME}
            >
              <span className="md:hidden">{COMPANY_SHORT_NAME}</span>
              <span className="hidden md:inline">{COMPANY_LEGAL_NAME}</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex lg:gap-10">
            <HashSectionLink sectionId="home" className={`${linkBase} ${linkActive}`}>
              Home
            </HashSectionLink>
            <HashSectionLink sectionId="about" className={linkBase}>
              About
            </HashSectionLink>
            <HashSectionLink sectionId="products" className={linkBase}>
              Products
            </HashSectionLink>
            <HashSectionLink sectionId="contact" className={linkBase}>
              Contact
            </HashSectionLink>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className={
                lightMode
                  ? 'text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 transition-colors hover:text-emerald-900'
                  : 'flex cursor-pointer items-center space-x-1 text-xs font-mono uppercase tracking-widest text-[#25D366] transition-colors hover:text-white'
              }
            >
              <span>Find us</span>
            </a>
            <HashSectionLink
              sectionId="products"
              className={
                lightMode
                  ? 'rounded-full bg-[#007AFF] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_8px_24px_-4px_rgba(0,122,255,0.45)] transition hover:bg-[#0066DD]'
                  : 'rounded-full border border-[#145a32] bg-[#0c2f1f] px-6 py-2 text-xs font-mono uppercase tracking-widest text-[#8ce99a] transition-colors hover:bg-[#145a32] hover:text-white'
              }
            >
              Shop now
            </HashSectionLink>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={
                lightMode
                  ? 'text-gray-900 transition-colors hover:text-gray-600'
                  : 'text-white transition-colors hover:text-[#8ce99a]'
              }
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div
            className={`mt-4 overflow-hidden rounded-2xl border shadow-2xl md:hidden ${
              lightMode
                ? 'border-gray-200/80 bg-white/95 backdrop-blur-xl'
                : 'border-white/10 bg-[#161a23]/95 backdrop-blur-xl'
            }`}
          >
            <div className="flex flex-col space-y-1 px-3 pb-5 pt-4">
              <HashSectionLink
                sectionId="home"
                onNavigate={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-widest ${
                  lightMode ? 'text-[#007AFF]' : 'text-[#3b82f6]'
                }`}
              >
                Home
              </HashSectionLink>
              <HashSectionLink
                sectionId="about"
                onNavigate={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-widest ${
                  lightMode
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                About
              </HashSectionLink>
              <HashSectionLink
                sectionId="products"
                onNavigate={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-widest ${
                  lightMode
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                Products
              </HashSectionLink>
              <HashSectionLink
                sectionId="contact"
                onNavigate={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-widest ${
                  lightMode
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                Contact
              </HashSectionLink>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-widest ${
                  lightMode ? 'text-emerald-700' : 'text-[#25D366] hover:text-white'
                }`}
              >
                Find us
              </a>
              <HashSectionLink
                sectionId="products"
                onNavigate={() => setMobileMenuOpen(false)}
                className={`mt-3 block w-full rounded-xl py-3 text-center text-sm font-semibold uppercase tracking-widest ${
                  lightMode
                    ? 'bg-[#007AFF] text-white shadow-md'
                    : 'border border-[#145a32] bg-[#0c2f1f] text-[#8ce99a]'
                }`}
              >
                Shop now
              </HashSectionLink>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
