import sharp from "sharp";

// Crops a logo mark from one of the Details-card hero images and makes the
// white background transparent (chroma-key on near-white pixels), so the
// logo can sit cleanly on a non-white card face.
const [, , input, output, left, top, width, height] = process.argv;

const { data, info } = await sharp(input)
  .extract({ left: Number(left), top: Number(top), width: Number(width), height: Number(height) })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width: w, height: h, channels } = info;
for (let i = 0; i < w * h; i++) {
  const idx = i * channels;
  const r = data[idx];
  const g = data[idx + 1];
  const b = data[idx + 2];
  if (r > 240 && g > 240 && b > 240) {
    data[idx + 3] = 0;
  }
}

await sharp(data, { raw: { width: w, height: h, channels } })
  .trim({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(output);

console.log("wrote", output);
