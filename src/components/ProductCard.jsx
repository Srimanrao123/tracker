import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ProductImageCarousel from './ProductImageCarousel';
import { getProductImages } from '../lib/productImages';
import { formatInr, getPricing } from '../lib/productPricing';

const BG_VARIANTS = ['#F2F2F2', '#FAF7F0'];

const categoryLabel = (name) => {
  const n = String(name).toLowerCase();
  if (n.includes('dash')) return 'Dash Cam';
  if (n.includes('tracker') || n.includes('gps')) return 'GPS Tracker';
  return 'Product';
};

const ProductCard = ({ product, index = 0 }) => {
  const navigate = useNavigate();
  const { price, salePrice, onSale, effective, showQuote } = getPricing(product);
  const bg = BG_VARIANTS[index % BG_VARIANTS.length];
  const images = getProductImages(product);

  const openProduct = () => navigate(`/products/${product.id}`);

  return (
    <Motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-[28px] border border-black/[0.06] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:border-black/10 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]"
      style={{ backgroundColor: bg }}
      onClick={openProduct}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProduct();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${product.name}, open product page`}
    >
      <div className="relative w-full px-4 pt-4 sm:px-5 sm:pt-5">
        <ProductImageCarousel
          images={images}
          alt={product.name}
          variant="card"
          intervalMs={4200}
          pauseOnHover={false}
        />
      </div>

      <div className="flex flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
          {categoryLabel(product.name)}
        </p>
        <h3 className="mt-1.5 line-clamp-2 text-left text-lg font-bold leading-snug tracking-tight text-black sm:text-xl">
          {product.name}
        </h3>

        <div className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-black/70">
          <span>View details</span>
          <ChevronRight size={16} strokeWidth={2.25} className="opacity-70" />
        </div>

        <p className="mt-3 line-clamp-2 text-left text-[13px] leading-relaxed text-[#757575] sm:text-sm">
          {product.description}
        </p>

        {/* Price + sale — explicit labels (parseMoney handles "12,999" strings from sheets) */}
        <div className="mt-4 rounded-2xl border border-black/[0.08] bg-white/90 px-4 py-3 shadow-sm">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                Price
              </p>
              <p
                className={`mt-0.5 text-base font-bold tabular-nums text-stone-900 sm:text-lg ${
                  onSale ? 'text-sm line-through opacity-50 decoration-stone-400' : ''
                }`}
              >
                {showQuote ? '—' : price > 0 ? formatInr(price) : '—'}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800/90">
                Sale price
              </p>
              <p className="mt-0.5 text-base font-bold tabular-nums text-stone-900 sm:text-lg">
                {showQuote
                  ? '—'
                  : onSale
                    ? formatInr(salePrice)
                    : price === 0 && salePrice > 0
                      ? formatInr(salePrice)
                      : '—'}
              </p>
            </div>
          </div>
          {showQuote ? (
            <p className="mt-2 text-center text-[11px] font-medium text-stone-500">
              Contact for quote
            </p>
          ) : null}
        </div>

        <div className="mt-4 flex w-full overflow-hidden rounded-full text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-sm sm:text-xs">
          <div className="flex min-w-[38%] flex-col items-center justify-center gap-0.5 bg-black px-2 py-3 normal-case tracking-normal sm:px-3 sm:py-3.5">
            {showQuote ? (
              <span>Quote</span>
            ) : (
              <span className="text-[13px] sm:text-base">{formatInr(effective)}</span>
            )}
          </div>
          <div className="flex flex-1 items-center justify-center bg-[#4A4A4A] px-2 py-3.5 transition-colors group-hover:bg-[#404040]">
            Shop now
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default ProductCard;
