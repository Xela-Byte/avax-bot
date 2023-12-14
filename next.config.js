/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'TradeAvaxBot.co',
        pathname: '/',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;

