import sharp from "sharp";

const [, , input, output, left, top, width, height] = process.argv;

await sharp(input)
  .extract({ left: Number(left), top: Number(top), width: Number(width), height: Number(height) })
  .trim({ background: "#ffffff", threshold: 12 })
  .png()
  .toFile(output);

console.log("wrote", output);
