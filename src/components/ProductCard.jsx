import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import ProductImageCarousel from './ProductImageCarousel';
import { getProductImages } from '../lib/productImages';
import { formatInr, getPricing } from '../lib/productPricing';

const categoryLabel = (name) => {
  const n = String(name).toLowerCase();
  if (n.includes('dash')) return 'Dash';
  if (n.includes('tracker') || n.includes('gps')) return 'GPS';
  return 'Unit';
};

const ProductCard = ({ product, index = 0 }) => {
  const navigate = useNavigate();
  const { price, salePrice, onSale, effective, showQuote } = getPricing(product);
  const images = getProductImages(product);

  const openProduct = () => navigate(`/products/${product.id}`);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[32px] bg-white border border-black/[0.02] soft-shadow transition-all duration-500 hover:border-[#991b1b]/10 hover:shadow-[0_24px_48px_-8px_rgba(153,27,27,0.06)] hover:-translate-y-1.5"
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
      {/* Badge */}
      {onSale && (
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#991b1b] text-white text-[8px] font-black uppercase tracking-[0.1em] shadow-lg shadow-red-900/10">
            <Star size={8} className="fill-white" />
            Promo
          </div>
        </div>
      )}

      {/* Image Section */}
      <div className="relative w-full aspect-[1/1] overflow-hidden bg-[#fcfcfc]">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <ProductImageCarousel
            images={images}
            alt={product.name}
            variant="card"
            intervalMs={4800}
            pauseOnHover={true}
          />
        </div>
        <div className="absolute inset-0 bg-[#991b1b]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-6 pt-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#991b1b]">
            {categoryLabel(product.name)}
          </span>
          {!showQuote && onSale && (
            <span className="text-[9px] font-bold text-[#991b1b] bg-red-50 px-1.5 py-0.5 rounded-md italic">
              SAVE {Math.round(((price - salePrice) / price) * 100)}%
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-black tracking-tight text-black mb-1.5 group-hover:text-[#991b1b] transition-colors duration-300 line-clamp-1 leading-tight">
          {product.name}
        </h3>

        <p className="text-[11px] leading-relaxed text-black/30 mb-5 line-clamp-2 h-8 font-medium">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/[0.02]">
          <div className="flex flex-col">
            {showQuote ? (
              <span className="text-[11px] font-black text-black/40 uppercase tracking-[0.05em]">Quote-Only</span>
            ) : (
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black tracking-tighter text-black group-hover:text-[#991b1b] transition-colors">
                  {formatInr(effective)}
                </span>
                {onSale && (
                  <span className="text-[10px] font-bold text-black/10 line-through tracking-tight">
                    {formatInr(price)}
                  </span>
                )}
              </div>
            )}
          </div>
          
          <ArrowRight size={16} className="text-[#991b1b]/20 group-hover:text-[#991b1b] group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Motion.div>
  );
};

export default ProductCard;
