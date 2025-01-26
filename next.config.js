
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
    ],
  },
}

module.exports = nextConfig