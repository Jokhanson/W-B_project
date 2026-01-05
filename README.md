# Frame by Frame — Image optimization

This project includes a small helper to generate optimized WebP versions and resized variants of JPEG images.

## How to run

1. Install dependencies (requires Node.js >= 14):

```bash
npm install
```

2. Run optimizer (it will write files to `photo/optimized`):

```bash
npm run optimize-images
```

Options:
- The script generates WebP at sizes: 1600, 1200, 800, 400, 200 and an `-orig.webp` file.
- Adjust `scripts/convert-images.js` to change quality or sizes.

## After generation
- Update HTML to use `<picture>` + `srcset` (already applied for main gallery & portfolio images in `index.html`) so browsers that support WebP load the smaller optimized assets.
- You can add `/photo/optimized` to `.gitignore` if you prefer not to commit generated files.
