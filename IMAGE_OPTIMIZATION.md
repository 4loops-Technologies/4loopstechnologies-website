# Image Optimization Guide

## Problem
Your website has large PNG images (some over 3MB) that slow down loading. Since you're using Next.js static export, the built-in image optimization is disabled.

## Solution Overview

### Option 1: Automated Script (Recommended)

1. **Install the required dependency:**
   ```bash
   npm install --save-dev sharp
   ```

2. **Run the optimization script:**
   ```bash
   node scripts/optimize-images.js
   ```

3. **Update components to use .webp images** (see below)

4. **Test and delete original PNGs** after confirming everything works

### Option 2: Manual Optimization (Quick Fix)

If you can't run the script, manually convert your largest images:

**Critical images to optimize first:**
- `backgroundherosection.png` (2.1MB) → Compress to ~300KB
- `lunar-gray-interior.png` (3.6MB) → Compress to ~400KB  
- `martian-red-interior.png` (2.7MB) → Compress to ~350KB
- `green-velvet-modular-chair.png` (2.5MB) → Compress to ~300KB

Use these free tools:
- [Squoosh](https://squoosh.app/) - Best compression, WebP conversion
- [TinyPNG](https://tinypng.com/) - Easy PNG compression
- [Convertio](https://convertio.co/png-webp/) - PNG to WebP converter

## Component Updates

### Hero Section
Current: `backgroundherosection.png` (2.1MB)
Action: Replace with compressed WebP version (~300KB)

### Footer Logo
Current: `nwlogo.png` (2.1MB)
Action: Use `newlogo.png` (181KB) which is already optimized

### Product/Feature Images
All large furniture images should be:
1. Resized to max 1200px width (currently many are 2000px+)
2. Converted to WebP format
3. Compressed to 80% quality

## Expected Results

After optimization:
- **Before**: ~25MB total images
- **After**: ~5-8MB total images
- **Loading time improvement**: 60-70% faster

## Code Changes Needed

Update these components to reference .webp files:

### hero-section.tsx
```tsx
<Image
  src="/backgroundherosection.webp"  // Change from .png
  alt="Hero background"
  fill
  className="object-cover"
  priority
  sizes="100vw"
/>
```

### footer.tsx
Replace `nwlogo.png` with `newlogo.png`:
```tsx
<img 
  src="/newlogo.png"  // Already optimized at 181KB
  alt="4Loops logo" 
  className="h-20 w-20 object-contain"
/>
```

### product-card.tsx & collection-strip.tsx
Change image paths from `.png` to `.webp` after running optimization script.

## Next.js Image Best Practices

Already implemented in your code:
- ✅ Using `next/image` component
- ✅ `priority` attribute for hero images
- ✅ `sizes` attribute for responsive images

Add these improvements:
```tsx
// For below-fold images, add loading="lazy"
<Image
  src="/image.webp"
  alt="Description"
  width={400}
  height={300}
  loading="lazy"  // Add this
/>

// For critical images, keep priority
<Image
  src="/hero.webp"
  alt="Hero"
  fill
  priority
  sizes="100vw"
/>
```

## Verification

After optimization, check:
1. All images load correctly
2. No console errors
3. Website loads significantly faster
4. Image quality is still acceptable

## Keeping Images Optimized

For future images:
1. Always compress before adding to `public/` folder
2. Use WebP format when possible
3. Don't exceed 1920px width for web images
4. Use the optimization script before each deploy
