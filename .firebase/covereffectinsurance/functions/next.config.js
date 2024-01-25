"use strict";

// next.config.js
var { withContentlayer } = require("next-contentlayer");
var withImages = require("next-images");
var nextConfig = {
  ...withImages({
    images: {
      domains: ["res.cloudinary.com"]
      // Cloudinary domain here
    }
  })
};
module.exports = withContentlayer(nextConfig);
