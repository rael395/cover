/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');
const withImages = require('next-images');
const nextConfig = {
 
  ...withImages({
    images: {
      
      domains: ['res.cloudinary.com'], // Cloudinary domain here
    },
  }),
}

module.exports = withContentlayer(nextConfig);