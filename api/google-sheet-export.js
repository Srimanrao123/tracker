/**
 * Proxies Google Sheets CSV export (same-origin for the browser; avoids CORS).
 * Vercel: /google-sheet-export is rewritten here (see vercel.json).
 *
 * Set in Vercel → Project → Environment Variables (same values as VITE_* for the build):
 *   VITE_PRODUCTS_SHEET_ID, VITE_PRODUCTS_SHEET_GID
 * or server-only: PRODUCTS_SHEET_ID, PRODUCTS_SHEET_GID
 */

const DEFAULT_SHEET_ID = '15qJiWWGd70_yp4oGqP6zuf3fghMi5alWI3zKK4Vp8rE';
const DEFAULT_GID = '0';

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const id = String(
    process.env.VITE_PRODUCTS_SHEET_ID || process.env.PRODUCTS_SHEET_ID || DEFAULT_SHEET_ID,
  ).trim();
  const gid = String(
    process.env.VITE_PRODUCTS_SHEET_GID || process.env.PRODUCTS_SHEET_GID || DEFAULT_GID,
  ).trim();

  const url = `https://docs.google.com/spreadsheets/d/${id}/export?format=csv&gid=${encodeURIComponent(gid)}`;

  try {
    const r = await fetch(url, { redirect: 'follow' });
    const body = await r.text();
    if (!r.ok) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.status(r.status).send(body.slice(0, 4000));
      return;
    }
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=600');
    res.status(200).send(body);
  } catch (err) {
    console.error('[google-sheet-export]', err);
    res.status(502).send('Bad gateway');
  }
}
