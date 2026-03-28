import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import AboutSection from '../components/AboutSection';
import LiveMapSimulator from '../components/LiveMapSimulator';
import ContactSection from '../components/ContactSection';
import TransformSection from '../components/TransformSection';
import RedefineSection from '../components/RedefineSection';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname !== '/') return;
    const id = location.hash?.replace(/^#/, '').trim();
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />
      <main>
        <Hero />
        <TransformSection />
        <RedefineSection />
        <AboutSection />
        <ProductGrid />
        <LiveMapSimulator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
