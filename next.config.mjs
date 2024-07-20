/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'utfs.io',
      },
    ],
  },

  eslint: {
    /** change it to false for enable eslint */
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
