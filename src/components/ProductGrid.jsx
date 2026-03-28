import React from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';
import { motion as Motion } from 'framer-motion';

const SkeletonCard = () => (
  <div className="flex flex-col overflow-hidden rounded-[32px] bg-white border border-black/[0.01] p-6 h-[380px] soft-shadow animate-pulse">
    <div className="w-full aspect-square rounded-[20px] bg-black/[0.02] mb-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
    </div>
    <div className="h-1.5 w-12 bg-black/[0.02] rounded-full mb-3" />
    <div className="h-6 w-3/4 bg-black/[0.02] rounded-lg mb-3" />
    <div className="h-2.5 w-full bg-black/[0.02] rounded-md mb-2" />
    <div className="h-2.5 w-2/3 bg-black/[0.02] rounded-md mb-8" />
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/[0.01]">
      <div className="h-6 w-20 bg-black/[0.02] rounded-md" />
      <div className="h-4 w-4 rounded-full bg-black/[0.02]" />
    </div>
  </div>
);

const ProductGrid = () => {
  const { products, loading, error } = useProducts();

  return (
    <section className="relative bg-white py-24 sm:py-32" id="products">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fcfcfc] to-transparent pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <Motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-[#991b1b]/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#991b1b]">
              Advanced Assets Catalog
            </span>
          </Motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <Motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-tight selection:bg-[#991b1b] selection:text-white"
            >
              Hardware for every <span className="text-[#991b1b]/20 italic">mission.</span>
            </Motion.h2>
            <Motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-black/40 font-medium max-w-sm"
            >
              Elite 4G tracking units engineered for extreme reliability and precise telemetry across India.
            </Motion.p>
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-24 bg-[#991b1b]/[0.01] rounded-[48px] border border-dashed border-[#991b1b]/[0.1] px-8 text-center">
            <p className="text-xl font-black text-black mb-2">Network Error</p>
            <p className="text-xs text-black/30 max-w-xs font-medium uppercase tracking-widest leading-loose">Check connection to hardware database</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-8 px-8 py-4 bg-[#991b1b] text-white rounded-full font-black shadow-xl shadow-red-900/10 hover:scale-105 active:scale-95 transition-all text-[10px] uppercase tracking-widest"
            >
              Retry Link
            </button>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 bg-black/[0.01] rounded-[48px] border border-dashed border-black/[0.05]">
            <p className="text-lg font-black text-black/20 uppercase tracking-[0.2em]">Inventory Syncing</p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
