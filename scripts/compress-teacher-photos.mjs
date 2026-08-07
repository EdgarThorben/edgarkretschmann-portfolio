import sharp from "sharp";
import { readdirSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const SRC = "C:/Users/Edgar/Pictures/Lehrerphotos";
const DEST = "C:/Users/Edgar/Projects/edgarkretschmann-new/public/images/bio/teacher";

mkdirSync(DEST, { recursive: true });

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[()]/g, "")
    .replace(/[_\s]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const files = readdirSync(SRC).filter((f) => /\.(jpe?g|png)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const srcPath = join(SRC, file);
  const slug = slugify(file);
  const destPath = join(DEST, `${slug}.jpg`);
  const before = statSync(srcPath).size;
  totalBefore += before;

  await sharp(srcPath)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 76, mozjpeg: true })
    .toFile(destPath);

  const after = statSync(destPath).size;
  totalAfter += after;
  console.log(`${file} -> ${slug}.jpg  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}

console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
