# Images Folder

## Where to Place Your Images

Add your image files here:
- `/images/hero-background.jpg` - Hero section background
- `/images/profile.jpg` - Your profile photo
- `/images/og-image.jpg` - Social sharing image (1200×630px)
- `/images/favicon.png` - Browser tab icon (512×512px)

## Recommended Images for Your Landing Page

1. **Profile Photo** (`profile.jpg`)
   - Replace the "◈" symbol in the About section
   - Dimensions: 400×400px minimum
   - Professional but authentic shot from Bali

2. **Hero Background** (optional)
   - Subtle Bali landscape or gradient
   - Dimensions: 1920×1080px
   - Low opacity overlay recommended

3. **Social Share Image** (`og-image.jpg`)
   - Shows when shared on social media
   - Dimensions: 1200×630px
   - Include your headline + logo

4. **Favicon** (`favicon.png`)
   - Browser tab icon
   - Dimensions: 512×512px
   - Simple logo or symbol

## Image Optimization Tips

- Use WebP format for better compression
- Compress JPGs to 80% quality
- Keep file sizes under 200KB
- Use descriptive filenames
- Add alt text for accessibility

## How to Use Images in Your HTML

Once you add an image, reference it like this:

```html
<!-- Profile image -->
<img src="images/profile.jpg" alt="Felix Winkler in Bali">

<!-- Background image via CSS -->
<style>
  .hero {
    background-image: url('images/hero-background.jpg');
  }
</style>
```

