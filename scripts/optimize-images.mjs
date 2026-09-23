import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDirectory = path.resolve('public/images/portfolio');
const outputDirectory = path.resolve('public/images/optimized');

const responsiveImages = [
  { file: 'systems-hero.png', widths: [768, 1440] },
  { file: 'buildow-case-study.png', widths: [768, 1440] },
  { file: 'agentforge-intake.png', widths: [768, 1440] },
  { file: 'agentforge-integrations.png', widths: [768, 1440] },
  { file: 'agentforge-review.png', widths: [768, 1440] },
  { file: 'agentforge-workspace.png', widths: [768, 1440] },
  { file: 'woody-hero.jpg', widths: [640, 1200] },
];

const socialImages = [
  { name: 'default', file: 'systems-hero.png' },
  { name: 'buildow', file: 'buildow-case-study.png' },
  { name: 'agentforge', file: 'agentforge-intake.png' },
  { name: 'woody', file: 'woody-hero.jpg' },
];

await mkdir(outputDirectory, { recursive: true });
await mkdir(path.join(outputDirectory, 'og'), { recursive: true });

for (const image of responsiveImages) {
  const source = path.join(sourceDirectory, image.file);
  const basename = path.parse(image.file).name;

  for (const width of image.widths) {
    const pipeline = sharp(source).resize({ width, withoutEnlargement: true });
    await Promise.all([
      pipeline.clone().avif({ quality: 52, effort: 5 }).toFile(path.join(outputDirectory, `${basename}-${width}.avif`)),
      pipeline.clone().webp({ quality: 78, effort: 5 }).toFile(path.join(outputDirectory, `${basename}-${width}.webp`)),
    ]);
  }
}

for (const image of socialImages) {
  await sharp(path.join(sourceDirectory, image.file))
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, progressive: true })
    .toFile(path.join(outputDirectory, 'og', `${image.name}.jpg`));
}

console.log(`Optimized ${responsiveImages.length} responsive images and ${socialImages.length} social images.`);
