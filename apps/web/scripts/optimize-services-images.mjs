import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = path.resolve('public', 'servicios');
const validExtensions = new Set(['.jpg', '.jpeg']);
const quality = 84;

const files = await readdir(inputDir, { withFileTypes: true });
const images = files.filter(
  (file) => file.isFile() && validExtensions.has(path.extname(file.name).toLowerCase())
);

await Promise.all(
  images.map(async (image) => {
    const source = path.join(inputDir, image.name);
    const output = path.join(inputDir, `${path.parse(image.name).name}.webp`);

    await sharp(source)
      .rotate()
      .webp({
        quality,
        effort: 6,
      })
      .toFile(output);

    console.log(`${image.name} -> ${path.basename(output)}`);
  })
);
