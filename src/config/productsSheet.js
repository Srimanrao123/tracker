/**
 * Products load from a Google Sheet published as CSV.
 *
 * 1. In Google Sheets: File → Share → set to "Anyone with the link" (Viewer) so CSV export works.
 * 2. Copy the sheet ID from the URL: docs.google.com/spreadsheets/d/<SHEET_ID>/edit
 * 3. First tab is usually gid=0; other tabs: Sheet → copy gid from URL when published.
 * 4. Set VITE_PRODUCTS_SHEET_ID / VITE_PRODUCTS_SHEET_GID in .env (see .env.example).
 * 5. Dev: Vite proxies /google-sheet-export → Google (avoids CORS).
 * 6. Production — Netlify: public/_redirects proxies /google-sheet-export → Google (keep sheet id in sync).
 *    Vercel: vercel.json rewrites /google-sheet-export → api/google-sheet-export.js (uses env at runtime).
 *
 * Optional: VITE_PRODUCTS_SHEET_CSV_URL = full CSV URL (only if your host allows CORS to that URL).
 */

const DEFAULT_SHEET_ID = '15qJiWWGd70_yp4oGqP6zuf3fghMi5alWI3zKK4Vp8rE';
const DEFAULT_GID = '0';

export const PRODUCTS_SHEET_ID =
  import.meta.env.VITE_PRODUCTS_SHEET_ID?.trim() || DEFAULT_SHEET_ID;
export const PRODUCTS_SHEET_GID =
  import.meta.env.VITE_PRODUCTS_SHEET_GID?.trim() || DEFAULT_GID;

/** Direct Google CSV URL (for docs / debugging). */
export const GOOGLE_SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${PRODUCTS_SHEET_ID}/export?format=csv&gid=${PRODUCTS_SHEET_GID}`;

/** Same-origin path — Vite dev proxy, Netlify _redirects, or Vercel API rewrite → Google CSV. */
export const PRODUCTS_CSV_PROXY_PATH = '/google-sheet-export';

/**
 * CSV URL used by the app.
 * - Prefer VITE_PRODUCTS_SHEET_CSV_URL when set (must be fetchable from the browser).
 * - Otherwise use the proxy path (recommended with Vite + Netlify).
 */
export function getProductsCsvUrl() {
  const fromEnv = import.meta.env.VITE_PRODUCTS_SHEET_CSV_URL;
  if (fromEnv && String(fromEnv).trim()) return String(fromEnv).trim();
  return PRODUCTS_CSV_PROXY_PATH;
}

/** How often to re-fetch products (ms). Default 60s. */
export function getProductsRefreshMs() {
  const raw = import.meta.env.VITE_PRODUCTS_REFRESH_MS;
  const n = raw != null && String(raw).trim() !== '' ? Number(raw) : 60_000;
  return Number.isFinite(n) && n >= 10_000 ? n : 60_000;
}
