import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.resolve('src/assets');

function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!file.includes('favicon_io')) {
        results = results.concat(getAllImages(fullPath));
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

async function run() {
  const images = getAllImages(assetsDir);
  console.log(`Found ${images.length} images to convert to webp.`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const imgPath of images) {
    const ext = path.extname(imgPath);
    const newPath = imgPath.slice(0, -ext.length) + '.webp';
    const originalSize = fs.statSync(imgPath).size;
    totalOriginalSize += originalSize;

    try {
      const pipeline = sharp(imgPath);
      const meta = await pipeline.metadata();

      // Resize if larger than 1920 on either side
      let transformer = pipeline.rotate(); // auto-orient based on EXIF
      if (meta.width > 1920 || meta.height > 1920) {
        transformer = transformer.resize(1920, 1920, {
          fit: 'inside',
          withoutEnlargement: true
        });
      }

      // Convert to WebP
      // If image has alpha channel (e.g. nobg transparent cutout), keep alpha
      transformer = transformer.webp({
        quality: 82,
        effort: 6,
        alphaQuality: 85
      });

      await transformer.toFile(newPath);
      const newSize = fs.statSync(newPath).size;
      totalOptimizedSize += newSize;

      // Remove original file
      fs.unlinkSync(imgPath);

      const rel = path.relative(assetsDir, imgPath);
      const pct = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
      console.log(`✓ ${rel} (${(originalSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB, -${pct}%)`);
    } catch (err) {
      console.error(`Error processing ${imgPath}:`, err.message);
    }
  }

  const origMB = (totalOriginalSize / 1024 / 1024).toFixed(1);
  const newMB = (totalOptimizedSize / 1024 / 1024).toFixed(1);
  const totalPct = (((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1);

  console.log('\n=======================================');
  console.log(`TOTAL BEFORE: ${origMB} MB`);
  console.log(`TOTAL AFTER:  ${newMB} MB`);
  console.log(`SAVINGS:      ${totalPct}% REDUCTION`);
  console.log('=======================================\n');
}

run().catch(console.error);
