/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');
const nextConfig = {
    images: {
        unoptimized: false,
      },
      experimental: {
        appDir: true,
        },
}

module.exports = withContentlayer(nextConfig);