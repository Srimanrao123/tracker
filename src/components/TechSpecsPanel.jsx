import React, { useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, Battery, Droplets, Radio } from 'lucide-react';
import { getProductImages } from '../lib/productImages';
import { whatsappUrl } from '../config/company';

const specRows = [
  { key: 'battery', label: 'Battery life', Icon: Battery },
  { key: 'waterproof', label: 'Durability / sealing', Icon: Droplets },
  { key: 'range', label: 'Connectivity', Icon: Radio },
];

const TechSpecsPanel = ({ product, onClose }) => {
  const firstImage = product ? getProductImages(product)[0] : undefined;

  useEffect(() => {
    if (!product) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <>
          <Motion.button
            type="button"
            aria-label="Close specifications"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/45 backdrop-blur-[2px]"
          />

          <Motion.aside
            key={product.id}
            role="dialog"
            aria-modal="true"
            aria-labelledby="specs-panel-title"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 z-50 flex h-full w-full max-w-[420px] flex-col border-l border-stone-200/90 bg-[#F4F4F2] shadow-[-16px_0_48px_rgba(0,0,0,0.12)]"
          >
            <header className="flex shrink-0 items-center justify-between gap-4 px-6 py-5">
              <h2
                id="specs-panel-title"
                className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-[1.35rem]"
              >
                Specifications
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-stone-500 transition-colors hover:bg-stone-200/90 hover:text-stone-900"
              >
                <X size={22} strokeWidth={1.75} />
              </button>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-6">
              <div className="overflow-hidden rounded-[28px] bg-[#E8E8E6] p-8 shadow-inner">
                {firstImage ? (
                  <img
                    src={firstImage}
                    alt={product.name}
                    className="mx-auto h-52 w-full max-w-[280px] object-contain"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex h-52 items-center justify-center text-sm text-stone-500">
                    No image in sheet
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h3 className="text-[1.15rem] font-semibold leading-snug text-stone-900">
                  {product.name}
                </h3>
                {product.description ? (
                  <p className="mt-3 line-clamp-4 text-[15px] leading-relaxed text-stone-500">
                    {product.description}
                  </p>
                ) : null}
              </div>

              <p className="mb-3 mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                Technical details
              </p>
              <div className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white/70 shadow-sm">
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
            </div>

            <footer className="shrink-0 border-t border-stone-200/90 bg-[#F4F4F2] px-6 py-5">
              <a
                href={whatsappUrl(
                  `Hi, I want to buy the ${product.name}. Please let me know the details.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-2xl bg-[#1a1a1a] px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black"
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#25D366]" aria-hidden />
                Message on WhatsApp
              </a>
              <p className="mt-3 text-center text-[11px] text-stone-400">
                We typically reply within a few hours
              </p>
            </footer>
          </Motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default TechSpecsPanel;
