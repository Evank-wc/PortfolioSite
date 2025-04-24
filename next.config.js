/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PortfolioSite',
  assetPrefix: '/PortfolioSite/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 