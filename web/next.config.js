/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig;
