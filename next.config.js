/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resizer.otstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
