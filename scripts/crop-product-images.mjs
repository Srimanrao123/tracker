/**
 * Crops WhatsApp-style screenshots to emphasize product photos
 * (less bubble chrome, timestamps, forwarded bars).
 */
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const pub = join(root, 'public', 'products');

async function extractRegion(inputName, outputName, { topPct, heightPct, leftPct = 0, widthPct = 100 }) {
  const inputPath = join(pub, inputName);
  const meta = await sharp(inputPath).metadata();
  const w = meta.width;
  const h = meta.height;
  const top = Math.round((topPct / 100) * h);
  const height = Math.round((heightPct / 100) * h);
  const left = Math.round((leftPct / 100) * w);
  const width = Math.round((widthPct / 100) * w);
  await sharp(inputPath)
    .extract({ left, top, width, height })
    .png()
    .toFile(join(pub, outputName));
  console.log('wrote', outputName, `${width}x${height}`);
}

async function main() {
  // 547x800 — two stacked messages
  await extractRegion('personal-and-engine-cutoff.png', 'crop-01-personal-kit.png', {
    topPct: 1,
    heightPct: 47,
  });
  await extractRegion('personal-and-engine-cutoff.png', 'crop-02-engine-cutoff.png', {
    topPct: 49,
    heightPct: 49,
  });

  // 595x852 — two stacked product blocks (vertical)
  await extractRegion('dual-channel-dashcams.png', 'crop-03-dual-4g.png', {
    topPct: 1,
    heightPct: 47,
  });
  await extractRegion('dual-channel-dashcams.png', 'crop-04-dual-car.png', {
    topPct: 50,
    heightPct: 48,
  });

  // 440x827 — three stacked blocks
  await extractRegion('gps-and-single-dashcams.png', 'crop-05-gps-9599.png', {
    topPct: 1,
    heightPct: 31,
  });
  await extractRegion('gps-and-single-dashcams.png', 'crop-06-single-with-gps.png', {
    topPct: 33,
    heightPct: 31,
  });
  await extractRegion('gps-and-single-dashcams.png', 'crop-07-single-no-gps.png', {
    topPct: 65,
    heightPct: 33,
  });

  // 360x543 — 2x2 style tiles; use top row for the two hero product shots
  await extractRegion('ai-and-nonai-dashcams.png', 'crop-08-h20p.png', {
    topPct: 1,
    heightPct: 48,
    leftPct: 1,
    widthPct: 48,
  });
  await extractRegion('ai-and-nonai-dashcams.png', 'crop-09-nonai.png', {
    topPct: 1,
    heightPct: 48,
    leftPct: 50,
    widthPct: 49,
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
