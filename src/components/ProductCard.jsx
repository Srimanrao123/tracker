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
      className="group relative flex cursor-pointer flex-col transition-all duration-500 hover:-translate-y-2"
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

      {/* Image Section - Main Visual */}
      <div className="relative w-full aspect-square overflow-hidden bg-white rounded-[48px] mb-8 transition-colors duration-500 group-hover:bg-[#fcfcfc]">
        <div className="absolute inset-0 p-2 transition-transform duration-700 group-hover:scale-110 ease-out">
          <ProductImageCarousel
            images={images}
            alt={product.name}
            variant="card"
            intervalMs={4800}
            pauseOnHover={true}
            showDots={false}
          />
        </div>
        <div className="absolute inset-0 bg-[#991b1b]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section - Center Aligned */}
      <div className="flex flex-col items-center text-center px-4">
        <h3 className="text-xl font-black tracking-tight text-black mb-1.5 transition-colors duration-300 line-clamp-1 leading-tight">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          {showQuote ? (
            <span className="text-[11px] font-black text-black/40 uppercase tracking-[0.1em]">Enquiry Only</span>
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black tracking-tighter text-black">
                {formatInr(effective)}
              </span>
              {onSale && (
                <span className="text-[10px] font-bold text-black/20 line-through tracking-tight">
                  {formatInr(price)}
                </span>
              )}
            </div>
          )}
        </div>

        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#991b1b]/40 group-hover:text-[#991b1b] transition-all duration-300 flex items-center gap-2">
          View Details <ArrowRight size={10} strokeWidth={3} className="translate-y-[0.5px]" />
        </span>
      </div>
    </Motion.div>
  );
};

export default ProductCard;
