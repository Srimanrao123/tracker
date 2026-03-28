import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { HashSectionLink } from '../components/HashSectionLink';
import { whatsappUrl } from '../config/company';
import { Battery, Droplets, Radio } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductImageCarousel from '../components/ProductImageCarousel';
import { useProducts } from '../hooks/useProducts';
import { getProductImages } from '../lib/productImages';
import { formatInr, getPricing } from '../lib/productPricing';

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
  const { price, salePrice, onSale, showQuote } = getPricing(product);

  const saleLabel =
    showQuote
      ? '—'
      : onSale
        ? formatInr(salePrice)
        : price === 0 && salePrice > 0
          ? formatInr(salePrice)
          : '—';

  if (showQuote) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white/80 px-5 py-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Price</p>
            <p className="mt-1 text-2xl font-bold text-stone-400">—</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Sale price</p>
            <p className="mt-1 text-2xl font-bold text-stone-400">—</p>
          </div>
        </div>
        <p className="mt-3 text-sm font-medium text-stone-600">Price on request — message us for a quote.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-stone-200 bg-white/80 px-5 py-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Price</p>
          <p
            className={`mt-1 text-2xl font-bold tabular-nums text-stone-900 ${
              onSale ? 'text-xl line-through opacity-50 decoration-stone-400' : ''
            }`}
          >
            {price > 0 ? formatInr(price) : '—'}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Sale price</p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-stone-900">{saleLabel}</p>
        </div>
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
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <div className="min-h-screen bg-[#ECECEA]">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <HashSectionLink
            sectionId="products"
            className="mb-6 inline-flex text-sm font-medium text-stone-600 underline-offset-4 hover:text-stone-900 hover:underline"
          >
            ← All products
          </HashSectionLink>

          {loading ? (
            <p className="text-stone-600">Loading product…</p>
          ) : error && !product ? (
            <p className="text-stone-600">Could not load catalog.</p>
          ) : !product ? (
            <div className="rounded-3xl border border-stone-200 bg-white/80 p-10 text-center shadow-sm">
              <p className="text-lg font-medium text-stone-800">Product not found</p>
              <HashSectionLink
                sectionId="products"
                className="mt-4 inline-block text-sm font-semibold text-stone-900 underline"
              >
                Return to products
              </HashSectionLink>
            </div>
          ) : (
            <>
              <div className="overflow-hidden rounded-[32px] border border-stone-200/90 bg-[#F2F2F2] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.2)]">
                <div className="px-5 pb-2 pt-8 sm:px-10 sm:pt-10">
                  <ProductImageCarousel
                    images={images}
                    alt={product.name}
                    variant="page"
                    intervalMs={5000}
                    pauseOnHover={false}
                    dotClassName="pb-4"
                  />
                </div>

                <div className="border-t border-stone-200/80 bg-[#FAFAF8] px-6 py-8 sm:px-10 sm:py-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                    {categoryLabel(product.name)}
                  </p>
                  <h1 className="mt-2 font-serif text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl">
                    {product.name}
                  </h1>
                  <p className="mt-6 text-[17px] leading-relaxed text-stone-600">
                    {product.description}
                  </p>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                    Technical details
                  </p>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm">
                    {specRows.map(({ key, label, Icon }, i) => {
                      const value = product.specs?.[key] ?? '—';
                      return (
                        <div
                          key={key}
                          className={`flex gap-4 px-4 py-4 sm:px-5 ${
                            i > 0 ? 'border-t border-stone-200/80' : ''
                          }`}
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
                            <Icon size={20} strokeWidth={1.75} />
                          </div>
                          <div className="min-w-0 flex-1 pt-0.5">
                            <p className="text-[11px] font-medium uppercase tracking-wider text-stone-500">
                              {label}
                            </p>
                            <p className="mt-1 text-[15px] font-medium leading-snug text-stone-900">
                              {value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <ProductPriceBlock product={product} />
                    </div>
                    <a
                      href={whatsappUrl(
                        `Hi, I want to buy the ${product.name}. Please let me know the details.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-[#1a1a1a] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black"
                    >
                      <span
                        className="mr-2 inline-block h-2 w-2 rounded-full bg-[#25D366]"
                        aria-hidden
                      />
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
