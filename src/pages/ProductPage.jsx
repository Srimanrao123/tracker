import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { HashSectionLink } from '../components/HashSectionLink';
import { whatsappUrl } from '../config/company';
import { Battery, Droplets, Radio, ArrowLeft, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductImageCarousel from '../components/ProductImageCarousel';
import { useProducts } from '../hooks/useProducts';
import { getProductImages } from '../lib/productImages';
import { formatInr, getPricing } from '../lib/productPricing';
import { motion as Motion } from 'framer-motion';

const categoryLabel = (name) => {
  const n = String(name).toLowerCase();
  if (n.includes('dash')) return 'Dash Cam';
  if (n.includes('tracker') || n.includes('gps')) return 'GPS Tracker';
  return 'Product';
};

const specRows = [
  { key: 'battery', label: 'Battery life', Icon: Battery },
  { key: 'waterproof', label: 'Durability / sealing', Icon: Droplets },
  { key: 'range', label: 'Connectivity', Icon: Radio },
];

function ProductPriceBlock({ product }) {
  const { price, onSale, effective, showQuote } = getPricing(product);

  if (showQuote) {
    return (
      <div className="flex flex-col">
        <span className="text-sm font-bold text-[#991b1b]/40 uppercase tracking-[0.2em] mb-2">Request Quote</span>
        <p className="text-4xl font-black text-black tracking-tight">Price on Request</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <span className="text-sm font-bold text-[#991b1b]/40 uppercase tracking-[0.2em] mb-2">
        {onSale ? 'Special Premium Offer' : 'Investment'}
      </span>
      <div className="flex items-end gap-4">
        <p className="text-5xl font-black tracking-tighter text-black">{formatInr(effective)}</p>
        {onSale && (
          <p className="text-xl font-bold text-black/20 line-through mb-2 italic">{formatInr(price)}</p>
        )}
      </div>
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

  const images = useMemo(
    () => (product ? getProductImages(product) : []),
    [product],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  return (
    <div className="min-h-screen bg-white selection:bg-red-100 selection:text-[#991b1b]">
      <Navbar />
      <main className="pt-40 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HashSectionLink
            sectionId="products"
            className="group mb-16 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black/40 hover:text-[#991b1b] transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-2" />
            Back to Hardware Fleet
          </HashSectionLink>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-48">
              <div className="h-16 w-16 rounded-3xl border-4 border-[#991b1b]/5 border-t-[#991b1b] animate-spin mb-8" />
              <p className="font-bold text-[#991b1b] animate-pulse uppercase tracking-widest text-xs">Initializing Hardware Interface...</p>
            </div>
          ) : error && !product ? (
            <div className="text-center py-48 bg-[#991b1b]/[0.02] rounded-[64px] border border-dashed border-[#991b1b]/[0.1] px-8">
              <p className="text-3xl font-black text-black mb-4">Transmission Interrupted</p>
              <p className="text-black/40 font-medium mb-12">We couldn't retrieve the specifications for this unit.</p>
              <button 
                onClick={() => window.location.reload()}
                className="px-10 py-5 bg-[#991b1b] text-white rounded-full font-bold shadow-2xl shadow-red-900/20"
              >
                Retry Link
              </button>
            </div>
          ) : !product ? (
            <div className="text-center py-48 bg-black/[0.02] rounded-[64px] border border-dashed border-black/[0.1] px-8">
              <p className="text-3xl font-black text-black mb-6">Hardware Not Found</p>
              <HashSectionLink
                sectionId="products"
                className="px-10 py-5 rounded-full bg-black text-white font-bold inline-block"
              >
                Return to catalog
              </HashSectionLink>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
              {/* Left Column: Images */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] rounded-[64px] overflow-hidden bg-gradient-to-br from-[#fcfcfc] to-[#f5f5f5] soft-shadow border border-black/[0.02]"
              >
                <ProductImageCarousel
                  images={images}
                  alt={product.name}
                  variant="page"
                  intervalMs={6000}
                  pauseOnHover={false}
                  dotClassName="pb-12"
                />
                <div className="absolute inset-0 pointer-events-none bg-[#991b1b]/[0.01]" />
              </Motion.div>

              {/* Right Column: Content */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col pt-4"
              >
                <div className="mb-12">
                  <span className="inline-block px-5 py-2 rounded-full bg-[#991b1b]/[0.05] border border-[#991b1b]/[0.1] text-[10px] font-black uppercase tracking-[0.4em] text-[#991b1b] mb-8">
                    {categoryLabel(product.name)}
                  </span>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-black mb-10 leading-[1] selection:bg-[#991b1b] selection:text-white">
                    {product.name}
                  </h1>
                  <p className="text-xl md:text-2xl text-black/40 leading-relaxed font-medium">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                  {specRows.map(({ key, label, Icon }) => {
                    const value = product.specs?.[key] ?? '—';
                    return (
                      <div key={key} className="p-8 rounded-[40px] bg-[#991b1b]/[0.02] border border-[#991b1b]/[0.05] hover:bg-white hover:soft-shadow transition-all duration-500 group/spec">
                        <Icon size={24} className="text-[#991b1b]/20 mb-6 group-hover/spec:scale-110 group-hover/spec:text-[#991b1b] transition-all" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 mb-2">{label}</p>
                        <p className="text-base font-black text-black">{value}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-10 pt-16 border-t border-black/[0.05]">
                  <ProductPriceBlock product={product} />
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={whatsappUrl(
                        `Hi, I want to buy the ${product.name}. Please let me know the details.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center gap-4 rounded-full bg-[#991b1b] px-12 py-6 text-lg font-black text-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-red-900/30 w-full overflow-hidden btn-ripple pulse-accent"
                    >
                      <MessageCircle size={24} className="fill-white" />
                      <span className="uppercase tracking-[0.1em]">Instant Purchase</span>
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </a>
                  </div>
                </div>
              </Motion.div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
