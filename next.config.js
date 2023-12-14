/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'avabot.co',
        pathname: '/',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;

