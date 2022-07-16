const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: false,
  swcMinify: true,
  poweredByHeader: false
})

module.exports = nextConfig
