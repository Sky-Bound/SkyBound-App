// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    reactStrictMode: true,
    swcMinify: true
  },
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['firebasestorage.googleapis.com' ,  'lh3.googleusercontent.com', 'cdn.pixabay.com', 'localhost/3000'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig;
module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.org',
      },
    ],
  },
}
