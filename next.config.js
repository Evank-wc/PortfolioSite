/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/PortfolioSite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PortfolioSite/' : '',
}

module.exports = nextConfig 