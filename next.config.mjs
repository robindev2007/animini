/** @type {import('next').NextConfig} */
/**
 * @type {import('next').NextConfig}
 */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gogocdn.net",
      },
      {
        protocol: "https",
        hostname: "s4.anilist.co",
      },
    ],
  },
};

export default withPWA(nextConfig);
