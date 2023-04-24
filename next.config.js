/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "cdn.sanity.io",
      "images.unsplash.com",
      "plus.unsplash.com",
      "unsplash.com",
    ],
  },
};

module.exports = nextConfig;
