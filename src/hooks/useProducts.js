import { useEffect, useState } from 'react';
import { fetchProductsFromGoogleSheetCsv } from '../lib/productsFromGoogleSheetCsv';
import { getProductsCsvUrl, getProductsRefreshMs } from '../config/productsSheet';

/** Products load only from the Google Sheet CSV — no local mock catalog. */
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const csvUrl = getProductsCsvUrl();
    let cancelled = false;

    const load = async () => {
      const bust = csvUrl.includes('?') ? `&_=${Date.now()}` : `?_=${Date.now()}`;
      const urlWithBust = `${csvUrl}${bust}`;

      try {
        const sheet = await fetchProductsFromGoogleSheetCsv(urlWithBust);
        if (cancelled) return;
        setProducts(Array.isArray(sheet) ? sheet : []);
        setError(null);
      } catch (err) {
        if (!cancelled) {
          if (import.meta.env.DEV) {
            console.warn('Failed to load products from Google Sheet:', err);
          }
          setProducts([]);
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    const intervalMs = getProductsRefreshMs();
    const intervalId = window.setInterval(load, intervalMs);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, []);

  return { products, loading, error };
}
