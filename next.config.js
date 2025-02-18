// module.exports = {
//   reactStrictMode: false,
//   images: {
//     domains: ['avatars.githubusercontent.com'],
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Dhruv-Portfolio',
  assetPrefix: '/Dhruv-Portfolio/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
