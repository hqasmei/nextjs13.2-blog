/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ["tutorialsteacher.com", "www.drupal.org", "res.cloudinary.com"],
  },
}

const withMDX = require("@next/mdx")()
module.exports = withMDX(nextConfig)
