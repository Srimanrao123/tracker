import React from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';

const ProductGrid = () => {
  const { products, loading, error } = useProducts();

  return (
    <section className="relative bg-[#E4E4E2] py-20 sm:py-24" id="products">
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#111] md:text-5xl">
              GPS products &amp; solutions
            </h2>
            <p className="max-w-xl font-sans text-[#5a5a5a]">
              Reliable hardware, clear pricing, and support when you need it.
            </p>
          </div>
        </div>

        {loading && products.length === 0 ? (
          <p className="text-[#5a5a5a]">Loading products from Google Sheet…</p>
        ) : error ? (
          <p className="max-w-xl text-[#5a5a5a]">
            Could not load products. Confirm the sheet is shared (anyone with the link can view) and
            your proxy or <code className="rounded bg-black/5 px-1">VITE_PRODUCTS_SHEET_CSV_URL</code>{' '}
            is correct.
          </p>
        ) : products.length === 0 ? (
          <p className="text-[#5a5a5a]">No product rows in the sheet yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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
