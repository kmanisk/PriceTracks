
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverActions: {
//       bodySizeLimit: '2mb'
//     }
//   },
//   serverExternalPackages: ['mongoose'],
//   images: {
//     domains: ['m.media-amazon.com']
//   }
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: {
  //     bodySizeLimit: '2mb'
  //   }
  // },
  serverExternalPackages: ['mongoose'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "**",
      }
    ],
  },
// Add caching headers globally for API routes (if needed)
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', // Cache API responses for 1 hour
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
