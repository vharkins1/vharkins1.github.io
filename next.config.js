/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    // Image optimization must be disabled for static export
    unoptimized: true,
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200],
    // Define image sizes for srcset
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320],
    // Formats to use (webp is smaller, avif even smaller but less supported)
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
