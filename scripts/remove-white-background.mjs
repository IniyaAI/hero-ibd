/**
 * Removes near-white backgrounds from PNG/JPG logos via edge flood-fill.
 * Usage: node scripts/remove-white-background.mjs [file-or-dir...]
 */

import fs from "fs";
import path from "path";
import sharp from "sharp";

const THRESHOLD = 246;
const SOFT_EDGE = 10;

function isBackgroundPixel(r, g, b, a) {
  if (a < 8) return true;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  return min >= THRESHOLD - SOFT_EDGE && max - min <= 22;
}

function removeWhiteBackground({ data, width, height }) {
  const size = width * height;
  const visited = new Uint8Array(size);
  const queue = [];

  const pushIfBackground = (x, y) => {
    const idx = y * width + x;
    if (visited[idx]) return;
    const i = idx * 4;
    if (!isBackgroundPixel(data[i], data[i + 1], data[i + 2], data[i + 3])) return;
    visited[idx] = 1;
    queue.push(idx);
  };

  for (let x = 0; x < width; x++) {
    pushIfBackground(x, 0);
    pushIfBackground(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    pushIfBackground(0, y);
    pushIfBackground(width - 1, y);
  }

  while (queue.length > 0) {
    const idx = queue.pop();
    const x = idx % width;
    const y = (idx - x) / width;

    const i = idx * 4;
    data[i + 3] = 0;

    if (x > 0) pushIfBackground(x - 1, y);
    if (x < width - 1) pushIfBackground(x + 1, y);
    if (y > 0) pushIfBackground(x, y - 1);
    if (y < height - 1) pushIfBackground(x, y + 1);
  }

  for (let idx = 0; idx < size; idx++) {
    const i = idx * 4;
    const a = data[i + 3];
    if (a === 0) continue;

    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const min = Math.min(r, g, b);

    if (min >= THRESHOLD - SOFT_EDGE) {
      const fade = Math.max(0, 255 - min);
      data[i + 3] = Math.min(a, fade * 18);
    }

    if (data[i + 3] > 0 && data[i + 3] < 255 && min > 200) {
      const alpha = data[i + 3] / 255;
      data[i] = Math.round(r * alpha);
      data[i + 1] = Math.round(g * alpha);
      data[i + 2] = Math.round(b * alpha);
    }
  }
}

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const isJpeg = ext === ".jpg" || ext === ".jpeg";
  const pngSibling = filePath.replace(/\.(jpe?g)$/i, ".png");

  if (isJpeg && fs.existsSync(pngSibling)) {
    console.log(`Skipped ${filePath} (${pngSibling} already exists)`);
    return;
  }

  const outputPath = isJpeg ? pngSibling : filePath;
  const image = sharp(filePath).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const pixels = Buffer.from(data);
  removeWhiteBackground({ data: pixels, width: info.width, height: info.height });

  await sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(`${outputPath}.tmp`);

  fs.renameSync(`${outputPath}.tmp`, outputPath);

  if (isJpeg && filePath !== outputPath && fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  console.log(`Processed ${filePath}${outputPath !== filePath ? ` → ${outputPath}` : ""}`);
}

function collectFiles(input) {
  const stat = fs.statSync(input);
  if (stat.isFile()) return [input];
  return fs
    .readdirSync(input)
    .filter((name) => /\.(png|jpe?g)$/i.test(name))
    .map((name) => path.join(input, name));
}

const inputs = process.argv.slice(2);
const files =
  inputs.length > 0
    ? inputs.flatMap(collectFiles)
    : [
        "public/images/logo.png",
        "public/images/logo.jpg",
        ...collectFiles("public/images/partners"),
      ].map((p) => path.resolve(p));

for (const file of files) {
  await processImage(file);
}
