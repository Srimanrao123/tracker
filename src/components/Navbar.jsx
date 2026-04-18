import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { HashSectionLink } from './HashSectionLink';
import { COMPANY_LEGAL_NAME, MAPS_QUERY } from '../config/company';
import { scrollToSectionId } from '../lib/scrollToSection';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goHome = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }
    navigate('/', { replace: true });
    scrollToSectionId('home', { behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-white/80 backdrop-blur-lg border-b border-black/[0.05] shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={goHome}
            className="flex items-center group"
            aria-label={`${COMPANY_LEGAL_NAME} home`}
          >
            <img
              src="/vikram-gps-tracker-logo.png"
              alt={`${COMPANY_LEGAL_NAME} logo`}
              className="h-12 w-auto sm:h-14 md:h-[3.75rem] object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <HashSectionLink
                key={link.id}
                sectionId={link.id}
                className="px-4 py-2 text-sm font-medium text-black/60 transition-all hover:text-[#991b1b] hover:bg-red-50 rounded-full"
              >
                {link.name}
              </HashSectionLink>
            ))}
            
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-sm font-medium text-black/60 transition-all hover:text-[#991b1b] hover:bg-red-50 rounded-full inline-flex items-center gap-1"
            >
              Find us <ArrowUpRight size={14} className="opacity-40" />
            </a>

            <HashSectionLink
              sectionId="products"
              className="ml-4 rounded-full bg-[#991b1b] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#801616] hover:scale-105 active:scale-95 shadow-lg shadow-red-900/10 btn-ripple"
            >
              Shop now
            </HashSectionLink>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black transition-colors hover:text-[#991b1b]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 mt-2 px-4 transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="overflow-hidden rounded-2xl border border-black/[0.05] bg-white/95 p-4 shadow-xl backdrop-blur-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <HashSectionLink
                  key={link.id}
                  sectionId={link.id}
                  onNavigate={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-black/70 hover:bg-red-50 hover:text-[#991b1b]"
                >
                  {link.name}
                </HashSectionLink>
              ))}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-4 py-3 text-base font-medium text-black/70 hover:bg-red-50 hover:text-[#991b1b]"
              >
                Find us
              </a>
              <HashSectionLink
                sectionId="products"
                onNavigate={() => setMobileMenuOpen(false)}
                className="mt-4 block w-full rounded-xl bg-[#991b1b] py-4 text-center text-base font-semibold text-white"
              >
                Shop now
              </HashSectionLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
