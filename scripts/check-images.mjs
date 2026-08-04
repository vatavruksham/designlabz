/**
 * DesignLabz — Image Inventory Check
 * Run: node scripts/check-images.mjs
 */
import { existsSync } from 'fs';
import { join } from 'path';

const PUBLIC_DIR = join(process.cwd(), 'public');
const required = [
  'images/hero/ai-design-studio.jpg',
  'images/features/logo-generator.jpg',
  'images/features/banner-layouts.jpg',
  'images/features/brand-colors.jpg',
  'images/features/social-packs.jpg',
  'images/features/export-formats.jpg',
  'images/features/templates-gallery.jpg',
];

console.log('Checking DesignLabz local images...');
let missing = 0;
for (const rel of required) {
  const filepath = join(PUBLIC_DIR, rel);
  if (existsSync(filepath)) console.log(`  ✓ ${rel}`);
  else {
    console.error(`  ✗ missing: ${rel}`);
    missing += 1;
  }
}
if (missing) {
  console.error(`\n${missing} image(s) missing. See IMAGE-GUIDE.md.`);
  process.exit(1);
}
console.log('\nAll local images present.');
