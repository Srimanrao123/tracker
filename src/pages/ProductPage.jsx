import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { HashSectionLink } from '../components/HashSectionLink';
import { whatsappUrl } from '../config/company';
import {
  Battery,
  Droplets,
  Radio,
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Zap,
  Globe,
  Activity
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductImageCarousel from '../components/ProductImageCarousel';
import { useProducts } from '../hooks/useProducts';
import { getProductImages } from '../lib/productImages';
import { formatInr, getPricing } from '../lib/productPricing';
import { motion as Motion } from 'framer-motion';

const categoryLabel = (name) => {
  const n = String(name).toLowerCase();
  if (n.includes('dash')) return 'Elite Dash Series';
  if (n.includes('tracker') || n.includes('gps')) return 'Precision GPS Unit';
  return 'Premium Hardware';
};

const mainSpecs = [
  { key: 'battery', label: 'Endurance', Icon: Battery, color: 'text-amber-500' },
  { key: 'waterproof', label: 'Protection', Icon: Droplets, color: 'text-blue-500' },
  { key: 'range', label: 'Signal Range', Icon: Radio, color: 'text-emerald-500' },
];

function FeatureChip({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors cursor-default">
      <Icon size={14} className="text-[#991b1b]" />
      <span className="text-[10px] font-black uppercase tracking-widest text-black/60">{text}</span>
    </div>
  );
}

export default function ProductPage() {
  const { productId } = useParams();
  const { products, loading, error } = useProducts();

  const product = useMemo(() => {
    const id = Number(productId);
    if (!Number.isFinite(id)) return null;
    return products.find((p) => Number(p.id) === id) ?? null;
  }, [products, productId]);

  const images = useMemo(() => (product ? getProductImages(product) : []), [product]);
  const { price, onSale, effective, showQuote } = product ? getPricing(product) : {};

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <Motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-20 w-20 rounded-full border-2 border-[#991b1b]/10 border-t-[#991b1b]"
        />
        <p className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-[#991b1b]">Loading Specifications</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-black mb-6">Hardware Missing</h1>
        <HashSectionLink sectionId="products" className="text-sm font-bold uppercase tracking-widest text-[#991b1b] border-2 border-[#991b1b] px-8 py-4 rounded-full">
          Return to Catalog
        </HashSectionLink>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="pt-20 lg:pt-24 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 mb-8 lg:mb-12">
          <HashSectionLink
            sectionId="products"
            className="group inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-black/40 hover:text-[#991b1b] transition-all"
          >
            <div className="h-10 w-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#991b1b] group-hover:border-[#991b1b] group-hover:text-white transition-all">
              <ArrowLeft size={16} />
            </div>
            Back to fleet
          </HashSectionLink>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Product Gallery */}
            <div className="lg:col-span-8">
              <Motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-white rounded-[48px] lg:rounded-[64px] overflow-hidden aspect-[4/3] lg:aspect-square"
              >
                <ProductImageCarousel
                  images={images}
                  alt={product.name}
                  variant="page"
                  intervalMs={5000}
                  showDots={true}
                  dotClassName="bottom-8 lg:bottom-12"
                />

                {/* Floating Meta Badges - Hidden on mobile */}
                <div className="hidden lg:flex absolute top-10 left-10 flex-col gap-3">
                  <FeatureChip icon={ShieldCheck} text="Certified" />
                  <FeatureChip icon={Globe} text="Real-time" />
                </div>

                {onSale && (
                  <div className="hidden lg:block absolute top-10 right-10">
                    <div className="px-6 py-2 rounded-full bg-[#991b1b] text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-red-900/40">
                      Promo
                    </div>
                  </div>
                )}
              </Motion.div>
            </div>

            {/* Right: Product Details */}
            <div className="lg:col-span-4 flex flex-col pt-8 lg:pt-8">
              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:pl-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-8 bg-[#991b1b]/20" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#991b1b]">
                    {categoryLabel(product.name)}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-[1.1] mb-8">
                  {product.name}
                </h1>

                <p className="text-lg text-black/60 leading-relaxed font-medium mb-12 max-w-lg">
                  {product.description}
                </p>

                {/* Primary Specs Grid */}
                <div className="grid grid-cols-3 gap-4 p-2 rounded-[32px] bg-black/[0.02] mb-12">
                  {mainSpecs.map(({ key, label, Icon, color }) => (
                    <div key={key} className="flex flex-col items-center justify-center p-6 text-center">
                      <Icon size={20} className={`${color} mb-3`} />
                      <span className="text-[8px] font-black uppercase tracking-widest text-black/20 mb-1">{label}</span>
                      <span className="text-xs font-black text-black">{product.specs?.[key] || '—'}</span>
                    </div>
                  ))}
                </div>

                {/* Price and Action Unit */}
                <div className="p-10 rounded-[48px] bg-white border border-black/[0.05] soft-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                    <Activity size={100} />
                  </div>

                  <div className="relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-4 block">Official Listing Price</span>

                    {showQuote ? (
                      <div className="mb-8">
                        <p className="text-4xl font-black tracking-tight">Price on request</p>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-4 mb-8">
                        <p className="text-5xl font-black tracking-tighter text-black">{formatInr(effective)}</p>
                        {onSale && <p className="text-lg font-bold text-black/10 line-through italic">{formatInr(price)}</p>}
                      </div>
                    )}

                    <a
                      href={whatsappUrl(`Interested in ${product.name}. Requesting deployment details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-4 w-full py-6 bg-[#991b1b] text-white rounded-[24px] font-black uppercase tracking-widest text-sm shadow-xl shadow-red-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all pulse-accent"
                    >
                      <MessageCircle size={20} className="fill-white" />
                      Instant Engagement
                    </a>
                  </div>
                </div>

                {/* Brand Trust Feature List */}
                <div className="mt-12 space-y-4">
                  {[
                    { label: 'Pan-India Installation Support', icon: Zap },
                    { label: 'Dual Tracking Redundancy', icon: Radio },
                    { label: 'Military-Grade Enclosures', icon: ShieldCheck }
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-black/[0.02] transition-colors group">
                      <div className="h-8 w-8 rounded-xl bg-[#991b1b]/[0.05] flex items-center justify-center text-[#991b1b] group-hover:bg-[#991b1b] group-hover:text-white transition-all">
                        <f.icon size={14} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-black/60">{f.label}</span>
                    </div>
                  ))}
                </div>

              </Motion.div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
