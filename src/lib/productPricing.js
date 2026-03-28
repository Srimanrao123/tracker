/**
 * Parse money from sheet/API values. Handles "12999", "12,999", "₹ 6800", etc.
 * `Number("12,999")` is NaN — this avoids silent zero prices in the UI.
 */
export function parseMoney(value) {
  if (value == null || value === '') return 0;
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  const cleaned = String(value).replace(/[^0-9.]/g, '');
  if (!cleaned) return 0;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

/**
 * `price` = list / regular (MRP). `salePrice` = promotional when lower than `price`.
 * Reads legacy fields from older sheets (`priceStandard`, `pricePro`).
 */
export function getPricing(product) {
  if (!product) {
    return {
      price: 0,
      salePrice: 0,
      onSale: false,
      effective: 0,
      showQuote: true,
    };
  }

  const price = parseMoney(
    product.price ?? product.priceStandard ?? product.listPrice ?? product.mrp,
  );
  const salePrice = parseMoney(
    product.salePrice ??
      product.pricePro ??
      product.offerPrice ??
      product.discountedPrice,
  );

  const onSale = salePrice > 0 && price > 0 && salePrice < price;
  const effective = onSale
    ? salePrice
    : salePrice > 0 && price === 0
      ? salePrice
      : price;
  const showQuote = effective <= 0;

  return { price, salePrice, onSale, effective, showQuote };
}

export function formatInr(n) {
  return `₹${parseMoney(n).toLocaleString('en-IN')}`;
}
