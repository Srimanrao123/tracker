# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Product data (Google Sheets)

Products load from this sheet by default (CSV via same-origin `/google-sheet-export` so the browser avoids CORS issues):

- [Vikram products sheet](https://docs.google.com/spreadsheets/d/15qJiWWGd70_yp4oGqP6zuf3fghMi5alWI3zKK4Vp8rE/edit?gid=0#gid=0)

Row 1 headers (case-insensitive): `id, name, description, price, salePrice, images, battery, waterproof, range`.

- **`images`** — one column for all photos: a **comma-separated** list of paths or URLs (e.g. `/products/a.png,/products/b.png`). Multiple values enable the **auto-advancing carousel** on cards and product pages. Legacy `image` / `img` columns are not used; put every path in **`images`**.
- **`price`** / **`salePrice`** — list price and optional lower sale price. Legacy `priceStandard` / `pricePro` still map for older sheets.

There is **no local mock catalog**; the app only reads the Google Sheet. Use **`google-sheet-products-template.csv`** as a starting import.

Static files can live under **`public/products/`**; reference them as **`/products/your-file.png`** (leading slash) or the full `https://your-domain.com/products/...` URL.

**Images not loading?** Use **one URL per line** in the `images` cell (Alt+Enter in Google Sheets) or separate multiple `https://…` URLs with commas only *between* URLs (not inside one URL’s query string). Drive **share** links are rewritten to `uc?export=view&id=…`. For Dropbox, use `dl=1` in the link (or plain `?dl=1`). External hosts may block hotlinking; `referrerPolicy="no-referrer"` is set on `<img>` to help with some CDNs.

The grid **re-fetches every 60 seconds** (change with `VITE_PRODUCTS_REFRESH_MS` in `.env`).

To use a **different** sheet, set `VITE_PRODUCTS_SHEET_CSV_URL` to its full `.../export?format=csv&gid=...` URL in `.env`.
