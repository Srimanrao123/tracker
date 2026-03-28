const dedupe = (arr) => {
  const seen = new Set();
  return arr.filter((x) => {
    if (!x || seen.has(x)) return false;
    seen.add(x);
    return true;
  });
};

/**
 * Clean one URL/path from Google Sheets (quotes, =IMAGE(), Drive share links, etc.)
 */
export function normalizeImageUrl(s) {
  if (s == null) return '';
  let t = String(s).trim();
  if (!t) return '';

  while (
    (t.startsWith('"') && t.endsWith('"')) ||
    (t.startsWith("'") && t.endsWith("'"))
  ) {
    t = t.slice(1, -1).trim();
  }

  if (t.startsWith('=')) {
    const imageQuoted = t.match(/IMAGE\s*\(\s*"([^"]+)"/i) || t.match(/IMAGE\s*\(\s*'([^']+)'/i);
    if (imageQuoted) {
      t = imageQuoted[1].trim();
    } else if (/^=\s*"/.test(t) && t.endsWith('"')) {
      t = t.replace(/^=\s*"/, '').replace(/"$/, '').trim();
    } else if (/^=\s*'/.test(t) && t.endsWith("'")) {
      t = t.replace(/^=\s*'/, '').replace(/'$/, '').trim();
    } else {
      t = t.replace(/^=\s*/, '').trim();
      if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
        t = t.slice(1, -1).trim();
      }
    }
  }

  const fileIdMatch = t.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileIdMatch) {
    return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
  }
  const openMatch = t.match(/drive\.google\.com\/open\?[^#]*\bid=([a-zA-Z0-9_-]+)/);
  if (openMatch) {
    return `https://drive.google.com/uc?export=view&id=${openMatch[1]}`;
  }

  // Sheets sometimes double-encode in CSV
  t = t.replace(/&amp;/g, '&');

  if (t.includes('dropbox.com') && /[?&]dl=0(?:&|$)/.test(t)) {
    t = t.replace(/([?&])dl=0(?=&|$)/, '$1dl=1');
  }

  if (
    t &&
    !/^https?:\/\//i.test(t) &&
    !t.startsWith('//') &&
    !t.startsWith('data:') &&
    !t.startsWith('blob:')
  ) {
    if (!t.startsWith('/')) t = `/${t}`;
  }

  return t.trim();
}

/**
 * Parse the sheet `images` cell into multiple URLs.
 */
export function parseImagesList(raw) {
  if (raw == null) return [];
  let s = String(raw).trim();
  if (!s) return [];

  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1).trim();
  }

  let parts;

  if (/\r?\n/.test(s)) {
    parts = s
      .split(/\r?\n/)
      .map((p) => p.trim())
      .filter(Boolean);
  } else {
    const httpCount = (s.match(/https?:\/\//gi) || []).length;

    if (httpCount > 1) {
      parts = s
        .split(/\s*,\s*(?=https?:\/\/)/i)
        .map((p) => p.trim())
        .filter(Boolean);
    } else if (httpCount === 1) {
      parts = [s];
    } else if (s.includes(';')) {
      parts = s
        .split(/\s*;\s*/)
        .map((p) => p.trim())
        .filter(Boolean);
    } else if (/,/.test(s)) {
      const byCommaSlash = s.split(/\s*,\s*(?=\/)/);
      parts =
        byCommaSlash.length > 1
          ? byCommaSlash.map((p) => p.trim()).filter(Boolean)
          : s.split(',').map((p) => p.trim()).filter(Boolean);
    } else {
      parts = [s];
    }
  }

  return dedupe(parts.map(normalizeImageUrl).filter(Boolean));
}

/** Product image URLs from the sheet `images` column. */
export function getProductImages(product) {
  const raw = product?.images;
  if (!Array.isArray(raw)) return [];
  return raw.map((u) => normalizeImageUrl(u)).filter(Boolean);
}
