import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ayberktanriverdi.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
    localPatterns: [
      {
        pathname: '/Koleksiyonlar(Site)/**',
      },
      {
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
