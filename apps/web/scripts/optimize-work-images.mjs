import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = path.resolve('public', 'trabajos');
const validExtensions = new Set(['.jpg', '.jpeg', '.png']);
const quality = 84;

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      images.push(...await collectImages(entryPath));
      continue;
    }

    if (entry.isFile() && validExtensions.has(path.extname(entry.name).toLowerCase())) {
      images.push(entryPath);
    }
  }

  return images;
}

const images = await collectImages(inputDir);

await Promise.all(
  images.map(async (source) => {
    const output = path.join(path.dirname(source), `${path.parse(source).name}.webp`);

    await sharp(source)
      .rotate()
      .webp({
        quality,
        effort: 6,
      })
      .toFile(output);

    console.log(`${path.relative(inputDir, source)} -> ${path.relative(inputDir, output)}`);
  })
);
