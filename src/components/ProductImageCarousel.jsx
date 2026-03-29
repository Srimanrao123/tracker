import React, { useEffect, useState } from 'react';

/**
 * Carousel: track width = N × viewport; translate by (index/N)×100% of track (not index×100%).
 * Remount when `images` changes so slide index resets without an effect.
 */
const ProductImageCarouselInner = ({
  slides,
  alt = '',
  className = '',
  intervalMs = 4500,
  pauseOnHover = false,
  showDots = true,
  dotClassName = '',
  variant = 'card',
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  useEffect(() => {
    if (n <= 1 || paused) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [n, intervalMs, paused]);

  const frameClass =
    variant === 'page'
      ? 'aspect-[16/11] min-h-[220px] sm:aspect-[2/1] sm:min-h-[280px]'
      : 'aspect-[4/3] sm:aspect-[5/4]';

  if (n === 0) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-stone-200/90 text-sm text-stone-500 ${className}`}
      >
        No image
      </div>
    );
  }

  const offsetPct = n > 0 ? (index * 100) / n : 0;

  return (
    <div
      className={className}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div
        className={`relative w-full overflow-hidden ${frameClass}`}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform"
          style={{
            width: `${n * 100}%`,
            transform: `translateX(-${offsetPct}%)`,
          }}
        >
          {slides.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="flex h-full min-w-0 shrink-0 items-center justify-center"
              style={{ flex: `0 0 calc(100% / ${n})` }}
            >
              <img
                src={src}
                alt={i === 0 ? alt : ''}
                className="max-h-full max-w-full object-contain"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      {showDots && n > 1 ? (
        <div
          className={`mt-3 flex justify-center gap-1.5 sm:mt-4 ${dotClassName}`}
          onClick={(e) => e.stopPropagation()}
          role="presentation"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1} of ${n}`}
              aria-current={i === index ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-black' : 'w-1.5 bg-black/25 hover:bg-black/40'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

const ProductImageCarousel = (props) => {
  const slides = props.images?.length ? props.images : [];
  const remountKey = slides.join('|');
  return <ProductImageCarouselInner key={remountKey} {...props} slides={slides} />;
};

export default ProductImageCarousel;
