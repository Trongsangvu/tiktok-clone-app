/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
  },
  async rewrites() {
    return [
      {
        source: '/@:nickname',
        destination: '/:nickname',
      },
    ];
  },
};

export default nextConfig;
