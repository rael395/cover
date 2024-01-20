/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');
const nextConfig = {
    images: {
        unoptimized: false,
      },
}

module.exports = withContentlayer(nextConfig);